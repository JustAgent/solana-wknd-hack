import React from 'react'
import { Link } from 'react-router-dom'

import FileMarketIcon from '../../../../../../assets/GameVerifyLogoFooter.svg'
import DeBankImg from '../../../../../../assets/img/DeBankImg.svg'
import DiscordImg from '../../../../../../assets/img/DiscordImg.svg'
import InstagramImg from '../../../../../../assets/img/InstagramImg.svg'
import LinkedinImg from '../../../../../../assets/img/LinkedinImg.svg'
import MediumImg from '../../../../../../assets/img/MediumImg.svg'
import TelegramImg from '../../../../../../assets/img/TelegramImg.svg'
import TwitterImg from '../../../../../../assets/img/TwitterImg.svg'
import YoutubeImg from '../../../../../../assets/img/YoutubeImg.svg'
import { styled } from '../../../../../../styles'
import { textVariant } from '../../../../../UIkit'

const TopSectionStyle = styled('div', {
  '& .section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    ...textVariant('secondary2'),
  },
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  gap: '16px',
  flexWrap: 'wrap',
  '& .first': {
    maxWidth: '360px',
    '& img': {
      width: '100px',
      height: '100px',
    },
    '& h5': {
      fontWeight: '500 !important',
      fontSize: '16px !important',
    },
  },
  '& .third': {
    maxWidth: '256px',
  },
  '@lg': {
    '& .third': {
      maxWidth: '360px',
    },
  },
  '@md': {
    '& .first, .third': {
      maxWidth: '100%',
      width: '100%',
    },
  },
  '@sm': {
    columnGap: '74px',
    justifyContent: 'left',
    gap: '32px',
    '& .second': {
      width: '140px',
    },
  },
})
const styleLink = {
  ...textVariant('secondary2').true,
  fontFamily: '$body',
  fontWeight: '500',
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    color: '#D3D3D4',
  },
  variants: {
    black: {
      true: {
        color: '#232528',
        '&:hover': {
          color: '#393B3E',
        },
      },
    },
  },
}
export const TextLink = styled('a', {
  ...styleLink,
})

export const TextLinkMock = styled(Link, {
  ...styleLink,
})

export const Text = styled('span', {
  ...textVariant('primary2').true,
  fontWeight: '500',
  fontSize: '14px',
  color: 'white',
  textDecoration: 'none',
  variants: {
    black: {
      true: {
        color: '#232528',
      },
    },
  },
})

const HeaderText = styled('h4', {
  ...textVariant('secondary2').true,
  fontFamily: '$body',
  fontWeight: '700',
  color: '#7B7C7E',
})

const ThirdContent = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
  width: '100%',
})

export const Card = styled('a', {
  background: '#232528',
  width: '49%',
  height: '44px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '4px',
  borderRadius: '8px',
  textDecoration: 'none',
  paddingLeft: 16,
  paddingRight: 16,
  '@lg': {
    justifyContent: 'center',
  },
  '&:hover': {
    background: '#393B3E',
  },
  variants: {
    white: {
      true: {
        background: 'white',
        border: '1px solid $gray300',
        boxShadow: '0px 4px 20px rgba(35, 37, 40, 0.05)',
        '&:hover': {
          background: '#D3D3D4',
        },
      },
    },
  },
  '@md': {
    width: '49%',
  },
})

export const Cards: Array<{
  img: string
  text: string
  url: string
}> = [
  {
    img: TwitterImg,
    text: '(Twitter)',
    url: '',
  },
  {
    img: DiscordImg,
    text: 'Discord',
    url: '',
  },
  {
    img: TelegramImg,
    text: 'Telegram',
    url: '',
  },
  {
    img: YoutubeImg,
    text: 'Youtube',
    url: '',
  },
  {
    img: MediumImg,
    text: 'Medium',
    url: '',
  },
  {
    img: LinkedinImg,
    text: 'LinkedIn',
    url: '',
  },
  {
    img: InstagramImg,
    text: 'Instagram',
    url: '',
  },
  {
    img: DeBankImg,
    text: 'DeBank',
    url: '',
  },
]

export const TopSection = () => {

  return (
    <TopSectionStyle>
      <div className='section first'>
        <Link to={'/mainpage'}>
          <img src={FileMarketIcon} alt='' />
        </Link>
        <Text style={{ lineHeight: '24px', fontSize: '16px' }}>
          Creation of a gameFi application verification platform on the Solana blockchain
        </Text>
      </div>
      <div className='section third'>
        <HeaderText>Join our community</HeaderText>
        <ThirdContent>
          {Cards.map((item, index) => (
            <Card key={index} href={item.url} target={'_blank'}>
              <img src={item.img} />
              <Text>{item.text}</Text>
            </Card>
          ))}
        </ThirdContent>
      </div>
    </TopSectionStyle>
  )
}
