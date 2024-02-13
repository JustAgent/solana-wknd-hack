import { styled } from '../../../styles'

export const FormControl = styled('div', {
  margin: '0 auto',
  marginBottom: '$4',
  maxWidth: '$breakpoints$sm',
  variants: {
    noMax: {
      true: {
        maxWidth: '100%',
      },
    },
    size: {
      lg: {
        maxWidth: '100%',
      },
    },
  },
})
