import { type PressEvent } from '@react-types/shared/src/events'
import React, { type ComponentProps, forwardRef } from 'react'

import { linkStyled } from '../Link.styles'
import { useLink } from '../useLink'

const LinkStyled = linkStyled('a')

export type LinkProps = ComponentProps<typeof LinkStyled> & {
  isDisabled?: boolean
  onPress?: (e: PressEvent) => void
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { linkRef, linkProps } = useLink(props, ref)

  return (
    <LinkStyled
      {...linkProps}
      ref={linkRef}
    />
  )
})
