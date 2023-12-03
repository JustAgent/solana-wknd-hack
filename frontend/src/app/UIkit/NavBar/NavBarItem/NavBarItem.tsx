import { type ComponentProps, forwardRef, type PropsWithChildren } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'

import { cssShowHideIn, styled } from '../../../../styles'
import { type LinkProps, type NavLinkProps, useLink } from '../../Link'
import { Txt } from '../../Txt'

const itemHeight = 30

const navBarItemStyles = {
  color: '#512da8',
  outline: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
  position: 'relative',
  height: itemHeight,
  display: 'flex',
  alignItems: 'flex-end',
  transition: 'color 0.25s ease 0s, transform 0.25s ease 0s',
  '&[data-hovered=true]': {
    color: '#512da8',
    transform: 'scale(1.03)',
  },
  '&[data-focus=true]': {
    focusRing: '#512da8',
  },
  '&[data-pressed=true]': {
    opacity: 0.9,
  },
  '&[data-disabled=true]': {
    color: '#512da8',
    fill: '#512da8',
    cursor: 'not-allowed',
  },
  '&::after': {
    transition: 'opacity 0.25s ease 0s',
    opacity: 0,
    content: '',
    display: 'block',
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    right: 0,
    height: '2px',
    background: '$gray400',
    filter: 'blur(0.5px)',
  },
  '&.active::after': {
    opacity: 1,
  },
  variants: {
    mock: {
      true: {
        pointerEvents: 'none',
        cursor: 'default',
        '&[data-hovered=true]': {
          color: '#512da8',
          transform: 'none',
        },
        '&[data-focus=true]': {
          focusRing: 'none',
        },
        '&[data-pressed=true]': {
          opacity: 1,
        },
      },
    },
    grayLight: {
      true: {
        color: '#512da8',
        '&::after': {
          background: '#512da8',
        },
      },
    },
  },
}

export const NavLinkStyled = styled(RouterNavLink, cssShowHideIn, navBarItemStyles)
export const LinkStyled = styled('a', cssShowHideIn, navBarItemStyles)
export type NavBarItemProps = PropsWithChildren<NavLinkProps & ComponentProps<typeof NavLinkStyled>>
export const NavBarItem = forwardRef<HTMLAnchorElement, NavBarItemProps>(
  ({ children, ...navLinkProps }, ref) => {
    const { linkRef, linkProps } = useLink(navLinkProps, ref)

    return (
      <NavLinkStyled
        {...linkProps}
        ref={linkRef}
      >
        <Txt button1>
          {children}
        </Txt>
      </NavLinkStyled>
    )
  })
export type NavBarItemLinkProps = PropsWithChildren<LinkProps & ComponentProps<typeof LinkStyled>>
export const NavBarItemLink = forwardRef<HTMLAnchorElement, NavBarItemLinkProps>(
  ({ children, ...navLinkProps }, ref) => {
    const { linkRef, linkProps } = useLink(navLinkProps, ref)

    return (
      <LinkStyled
        {...linkProps}
        ref={linkRef}
      >
        <Txt button1>
          {children}
        </Txt>
      </LinkStyled>
    )
  })
