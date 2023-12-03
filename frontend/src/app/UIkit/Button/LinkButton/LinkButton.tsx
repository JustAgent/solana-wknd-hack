import {
  type ComponentProps,
  forwardRef,
} from 'react'
import {
  type AriaButtonProps,
} from 'react-aria'

import { Drip } from '../../Drip'
import { buttonStyled } from '../Button.styles'
import { useButton } from '../useButton'

const LinkButtonStyled = buttonStyled('a')
export type LinkButtonProps = AriaButtonProps & ComponentProps<typeof LinkButtonStyled>

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      children,
      ...props
    },
    ref,
  ) => {
    const { buttonRef, buttonProps, dripProps } = useButton(props, ref)

    return (
      <LinkButtonStyled
        {...buttonProps}
        ref={buttonRef}
      >
        {children}
        <Drip {...dripProps} color='white' />
      </LinkButtonStyled>
    )
  },
)
