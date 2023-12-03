import { styled } from '../../../../../styles'
import { textVariant } from '../../../../UIkit'

export const PropertyTitle = styled('h2', {
  ...textVariant('h5').true,
  color: '$gray600',
  marginBottom: '$3',
  fontWeight: '600',
})

export const GridBlock = styled('div')
