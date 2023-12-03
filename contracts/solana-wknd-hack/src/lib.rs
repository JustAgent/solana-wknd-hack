use anchor_lang::prelude::*;
use num_derive::*;

declare_id!("4ef3ForKM6LwHRBHmYoHSUh9BE3hxD9d5TauAKLa4pD8");

#[program]
pub mod coin_flip {
    use super::*;
    use anchor_lang::solana_program::{program::invoke, system_instruction::transfer};
    // use anchor_lang::AccountsClose;

    pub fn setup(
        ctx: Context<Setup>,
        player: Pubkey,
        fee_recipient: Pubkey,
        bet_amount: u64,
        vendor_seed: i64,
    ) -> Result<()> {
        let coin_flip = &mut ctx.accounts.coin_flip;

        coin_flip.players = [ctx.accounts.vendor.key(), player];
        coin_flip.vendor_seed = vendor_seed;
        coin_flip.bump = *ctx.bumps.get("coin_flip").unwrap();
        coin_flip.bet_amount = bet_amount;
        coin_flip.fee_recipient = fee_recipient;

        invoke(
            &transfer(
                ctx.accounts.vendor.to_account_info().key,
                coin_flip.to_account_info().key,
                coin_flip.bet_amount,
            ),
            &[
                ctx.accounts.vendor.to_account_info(),
                coin_flip.to_account_info(),
                ctx.accounts.system_program.to_account_info(),
            ],
        )?;

        Ok(())
    }

    pub fn play(ctx: Context<Play>, player_choice: u8, player_seed: i64) -> Result<()> {
        let coin_flip = &mut ctx.accounts.coin_flip;
        let player_seed = player_seed;

        // 0: Tails, 1: Heads
        let player_side = if player_choice == 0 {
            Side::Tails
        } else {
            Side::Heads
        };

        invoke(
            &transfer(
                ctx.accounts.player.to_account_info().key,
                coin_flip.to_account_info().key,
                coin_flip.bet_amount,
            ),
            &[
                ctx.accounts.player.to_account_info(),
                coin_flip.to_account_info(),
                ctx.accounts.system_program.to_account_info(),
            ],
        )?;

        let total_bet_raw = coin_flip.bet_amount * 2;
        let fee = total_bet_raw * 95 / 100;
        let total_bet = total_bet_raw - fee;

        let winner = coin_flip.play(player_seed, player_side);

        **coin_flip.to_account_info().try_borrow_mut_lamports()? -= total_bet;

        if winner == *ctx.accounts.vendor.key {
            **ctx.accounts.vendor.try_borrow_mut_lamports()? += total_bet;
        } else {
            **ctx
                .accounts
                .player
                .to_account_info()
                .try_borrow_mut_lamports()? += total_bet;
        }

        **ctx
                .accounts
                .fee_recipient
                .to_account_info()
                .try_borrow_mut_lamports()? += fee;
        Ok(())
    }

}

#[derive(Accounts)]
#[instruction(player: Pubkey, bet_amount: u64, vendor_seed: i64)]
pub struct Setup<'info> {
    #[account(
        init, 
        payer = vendor, 
        space = CoinFlip::LEN,
        seeds = [b"coin-flip", vendor.key().as_ref(), player.as_ref()], bump
    )]
    pub coin_flip: Account<'info, CoinFlip>,
    #[account(mut)]
    pub vendor: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Play<'info> {
    #[account(
        mut, 
        seeds = [b"coin-flip", vendor.key().as_ref(), player.key().as_ref()], bump
    )]
    pub coin_flip: Account<'info, CoinFlip>,
    #[account(mut)]
    pub player: Signer<'info>,
    #[account(mut)]
    pub fee_recipient: Signer<'info>,
    #[account(mut)]
    /// CHECK
    pub vendor: AccountInfo<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(player: Pubkey)]
pub struct Delete<'info> {
    #[account(
        mut, 
        close = vendor,
        seeds = [b"coin-flip", vendor.key().as_ref(), player.as_ref()], bump
    )]
    pub coin_flip: Account<'info, CoinFlip>,
    #[account(mut)]
    pub vendor: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
#[derive(Default)]
pub struct CoinFlip {
    players: [Pubkey; 2],
    vendor_seed: i64,
    state: CoinFlipState,
    bet_amount: u64,
    fee_recipient: Pubkey,
    bump: u8,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum CoinFlipState {
    Active,
    Finished { winner: Pubkey },
}

impl Default for CoinFlipState {
    fn default() -> Self {
        Self::Active
    }
}

#[derive(
    AnchorSerialize, AnchorDeserialize, FromPrimitive, ToPrimitive, Copy, Clone, PartialEq, Eq,
)]
pub enum Side {
    Heads,
    Tails,
}

impl CoinFlip {
    const LEN: usize = 64 + 8 + 33 + 8 + 8 + 8;

    fn flip_side(&self, flip_number: i64) -> Side {
        if flip_number == 0 {
            Side::Tails
        } else {
            Side::Heads
        }
    }

    fn flip(&self, player_seed: i64) -> Side {
        let clock: Clock = Clock::get().unwrap();
        let flip_number: i64 = (self.vendor_seed + player_seed + clock.unix_timestamp) % 2;

        self.flip_side(flip_number)
    }

    pub fn play(&mut self, player_seed: i64, player_side: Side) -> Pubkey {
        let flip_result = self.flip(player_seed);

        if flip_result == player_side {
            self.state = CoinFlipState::Finished {
                winner: self.players[1],
            };
            self.players[1]
        } else {
            self.state = CoinFlipState::Finished {
                winner: self.players[0],
            };
            self.players[0]
        }
    }
}

#[error_code]
pub enum CoinFlipError {
    #[msg("Bet amount is too small")]
    BetTooSmall,
}
