import { createBrowserRouter, Navigate, type RouteObject } from 'react-router-dom'

import { AppLayout } from '../components/App'
import { Params } from '../utils/router'
import { CreateValidatorPage } from './Create/CreateValidatorPage.tsx'
import { CreatePage } from './Create/CreatGamePage.tsx'
import { ExplorePage } from './ExplorePage/ExplorePage.tsx'
import GamePage from './GamePage/GamePage.tsx'
import { ValidatorsPage } from './ValidatorsPage/ValidatorsPage.tsx'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <ExplorePage />,
  },
  {
    path: '/validators',
    element: <ValidatorsPage />,
  },
  {
    path: `game/:${Params.gameId}`,
    element: <GamePage />,
  },
  {
    path: '/create/game',
    element: <CreatePage />,
  },
  {
    path: '/create/validator',
    element: <CreateValidatorPage />,
  },
  {
    path: '*',
    element: <Navigate replace to={'/'} />,
  },
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: routes,
  },
])
