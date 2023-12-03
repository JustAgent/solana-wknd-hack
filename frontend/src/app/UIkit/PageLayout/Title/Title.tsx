import { Divider } from '@chakra-ui/react'
import React, { type FC, type PropsWithChildren } from 'react'

import { styled } from '../../../../styles'
import { textVariant, Txt } from '../../Txt'

const StyledTitle = styled(Txt, {
  ...textVariant('h2').true,
})

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledTitle>
      {children}
      <Divider style={{ height: '0.5px', marginTop: '16px' }} background={'black'} />
    </StyledTitle>
  )
}
