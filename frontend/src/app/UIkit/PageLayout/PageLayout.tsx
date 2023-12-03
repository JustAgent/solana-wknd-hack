import { styled } from '../../../styles'
import { Container } from '../Container'

export const PageLayout = styled(Container, {
  paddingTop: 'calc($layout$navBarHeight + $space$4)',
  paddingBottom: 48,
  backgroundColor: '$gray100',
  minHeight: '100%',
  position: 'relative',
  variants: {
    nonePaddingTop: {
      true: {
        paddingTop: 0,
      },
    },
    collectionPage: {
      true: {
        '@md': {
          paddingLR: '$3',
          paddingRight: '0',
        },
      },
    },
  },
})
