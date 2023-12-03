import { type FC, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { type BreakpointsOptions } from '../../../../styles'
import { useMediaMui, useScrollWindow } from '../../../hooks'
import { NavBar } from '../../../UIkit'
import { AppConnectWidget } from '../AppConnectWidget'
import { AppLogoButton } from '../AppLogoButton'
import { paths } from './paths'

const mobileBp: BreakpointsOptions = 'lg'

export const AppNav: FC = () => {
  const { smValue, mdValue, xlValue, lgValue } = useMediaMui()
  const scrollY = useScrollWindow()

  const isTransparent = useMemo(() => {
    if (smValue) return scrollY < -1
    if (mdValue) return scrollY < -1
    if (lgValue) return scrollY < 1284
    if (xlValue) return scrollY < 783

    return scrollY < 808
  }, [scrollY])

  const noneBlurShadow = useMemo(() => {
    return scrollY < 1
  }, [scrollY])

  return (
    <NavBar
      noneBlurShadow={noneBlurShadow}
      isTransparent={isTransparent}
      mobileBp={mobileBp}
      brand={<AppLogoButton to='/' hideNameIn={mobileBp} />}
      items={paths}
      actions={<AppConnectWidget />}
    />
  )
}
