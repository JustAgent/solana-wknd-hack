import * as anchor from '@project-serum/anchor'
import { type AnchorProvider } from '@project-serum/anchor'
import NodeWallet from '@project-serum/anchor/dist/cjs/nodewallet'
import { bs58 } from '@project-serum/anchor/dist/cjs/utils/bytes'
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey'
import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react'
import { PublicKey } from '@solana/web3.js'
import { useCallback, useEffect, useMemo, useState } from 'react'

import idl from '../../../idl/idl.json'

const PROGRAM_KEY = new PublicKey(idl.metadata.address)
const preflightCommitment = 'processed'
const commitment = 'processed'

export const useTestFlip = () => {
  const { publicKey } = useWallet()
  const [vendorProvider, setVendorProvider] = useState<AnchorProvider>()
  const [userProvider, setUserProvider] = useState<AnchorProvider>()
  const [vendorProgram, setVendorProgram] = useState<any>()
  const [userProgram, setUserProgram] = useState<any>()
  const { connection } = useConnection()

  const wallet = useAnchorWallet()
  const authorKey = useMemo(() => {
    return publicKey ? new PublicKey(publicKey) : undefined
  }, [publicKey])

  const randomSeed = new anchor.BN(Math.floor(Math.random() * 100000))

  const VENDOR_SECRET_KEY = 'RoDSGCp2EZWyooBkfPwNciErLjvTvfRZZinqbDgLRRs9rW5Vy4FwnYJe3KtKs8WDut78JMiF9bWzRB1p6b8VdZn'

  const vendor = useMemo(() => {
    const secretKeyArray = bs58.decode(VENDOR_SECRET_KEY)

    return anchor.web3.Keypair.fromSecretKey(secretKeyArray)
  }, [VENDOR_SECRET_KEY])

  useEffect(() => {
    if (vendor) {
      const vendorWallet = new NodeWallet(vendor)

      const provider = new anchor.AnchorProvider(connection, vendorWallet, {
        preflightCommitment,
        commitment,
      })

      // const provider = new anchor.AnchorProvider(connection, anchorWallet, anchor.AnchorProvider.defaultOptions())

      setVendorProvider(provider)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setVendorProgram(new anchor.Program(idl, PROGRAM_KEY, provider))
    }
  }, [publicKey, vendor])

  useEffect(() => {
    if (wallet) {
      const provider = new anchor.AnchorProvider(connection, wallet, anchor.AnchorProvider.defaultOptions())

      // const provider = new anchor.AnchorProvider(connection, anchorWallet, anchor.AnchorProvider.defaultOptions())

      setUserProvider(provider)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setUserProgram(new anchor.Program(idl, PROGRAM_KEY, provider))
    }
  }, [wallet])

  const coinFlip = useCallback(async () => {
    if (vendorProgram && authorKey && publicKey && userProgram) {
      const [coinFlipPDA] = findProgramAddressSync(
        [
          anchor.utils.bytes.utf8.encode('coin-flip'),
          vendor.publicKey.toBuffer(),
          publicKey?.toBuffer(),
        ],
        vendorProgram.programId,
      )

      try {
        // delete if account exists
        const response = await vendorProgram.account.coinFlip.fetch(coinFlipPDA) // should error out if account does not exists
        console.log(response)
        const reciept = await vendorProgram.methods.delete(publicKey)
          .accounts({
            coinFlip: coinFlipPDA,
            vendor: vendor.publicKey,
            systemProgram: anchor.web3.SystemProgram.programId,
          })
          .signers([vendor])
          .rpc()
        console.log(reciept)
      } catch (error) {
        console.log(error)
        console.log('acoount does not exists, continue')
      }

      const setupTx = await vendorProgram?.methods.setup(publicKey, new anchor.BN(100000000), randomSeed)
        .accounts({
          coinFlip: coinFlipPDA,
          vendor: vendor.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .signers([vendor])
        .rpc()

      console.log(setupTx)

      const tx = await userProgram.methods.play(0, randomSeed)
        .accounts({
          vendor: vendor.publicKey,
          player: publicKey,
          coinFlip: coinFlipPDA,
          systemProgram: anchor.web3.SystemProgram.programId,
        }).rpc()

      console.log(tx)
    }
  }, [vendorProgram, authorKey, userProvider, vendorProvider])

  return {
    coinFlip,
  }
}
