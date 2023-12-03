import { Modal as ModalBase } from '@nextui-org/react'
import React, { type ComponentProps } from 'react'

import CloseButtonImg from '../../../assets/img/CloseButton.svg'
import FWIconImg from '../../../assets/img/FWicon.svg'
import { styled } from '../../../styles'
import { useMediaMui } from '../../hooks/useMediaMui'
import FileBunniesLogo from '../../pages/MarketPage/img/FileBunniesLogoModal.svg'
import { FormControl } from '../Form/FormControl'
import { textVariant } from '../Txt'

const CloseButton = styled('div', {
  position: 'absolute',
  top: '24px',
  right: '24px',
  cursor: 'pointer',
  '&:hover': {
    filter: 'brightness(2)',
  },
  '@sm': {
    top: '8px',
    right: '8px',
    transform: 'scale(0.7)',
  },
})

export const ModalIcon = styled('div', {
  position: 'absolute',
  top: '0',
  left: '0',
  background: `url(${FWIconImg})`,
  height: '100%',
  width: '100%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  variants: {
    fileBunnies: {
      true: {
        background: `url(${FileBunniesLogo}) no-repeat`,
        height: '50px',
        top: '-6px',
      },
    },
  },
})

export const modalStyle = {
  background: '#F9F9F9',
  border: '2px solid #232528',
  boxShadow: '0px 0px 15px rgba(19, 19, 45, 0.05)',
  borderRadius: '16px',
  padding: '32px',
  position: 'relative',
  variants: {
    isError: {
      true: {
        border: '2px solid $red500',
      },
    },
  },
}

export const FormControlModal = styled(FormControl, {
  marginBottom: '24px',
  maxWidth: 'inherit',
})

export const Modal = (props: ComponentProps<typeof ModalBase> & { isError?: boolean }) => {
  const { adaptive } = useMediaMui()
  const { isError, width, ...modalProps } = props

  return (
    <ModalBase
      {...modalProps}
      closeButton={false}
      width={width}
      css={{
        ...modalStyle,
        ...props.css,
        color: '#232528',
        borderColor: isError ? '#C54B5C' : '#232528',
        padding: adaptive({
          sm: '20px',
          defaultValue: '32px',
        }),
      }}
    >
      {modalProps.children}
      {modalProps.closeButton && (
        <CloseButton onClick={() => {
          modalProps.onClose?.()
          modalProps.onCloseButtonClick?.()
        }}
        >
          <img src={CloseButtonImg} />
        </CloseButton>
      )}
    </ModalBase>
  )
}

export const ModalBody = styled('div', {
  paddingTB: '40px',
  variants: {
    edit: {
      true: {
        paddingTB: '24px',
      },
    },
  },
})

export const ModalTitle = styled('h3', {
  ...textVariant('primary1').true,
  fontSize: '24px',
  color: '$blue900',
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: '16px',
  position: 'relative',
  '@sm': {
    fontSize: '18px',
  },
  variants: {
    error: {
      true: {
        color: '$red500',
      },
    },
  },
})

export const ModalP = styled('p', {
  ...textVariant('primary1').true,
  fontSize: '24px',
  textAlign: 'center',
})

export const ModalDescription = styled('p', {
  ...textVariant('primary1').true,
  fontWeight: '400',
  color: '$gray600',
  textAlign: 'center',
  paddingBottom: '40px',
  lineHeight: '24px',
})

export const ModalBanner = styled('div', {
  textAlign: 'left',
  marginTop: '40px',
  padding: '16px 24px',
  background: 'rgba(0, 144, 255, 0.05)',
  border: '1px solid rgba(0, 144, 255, 0.25)',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  variants: {
    edit: {
      true: {
        marginTop: '12px',
        borderRadius: '12px',
        border: '2px solid #EAEAEC',
        background: '#EAEAEC',
        fontWeight: '500',
      },
    },
  },
})

export const ModalButtonContainer = styled('div', {
  marginTop: '40px',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  variants: {
    edit: {
      true: {
        marginTop: '24px',
      },
    },
  },

})

export const InputModalTitleText = styled('p', {
  ...textVariant('primary1').true,
  fontWeight: '600',
  marginBottom: '8px',
  paddingLeft: '16px',
  textAlign: 'left',
  color: '#232528',
})
