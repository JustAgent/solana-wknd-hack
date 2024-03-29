import { createBrowserRouter, Navigate, type RouteObject } from 'react-router-dom'

import { AppLayout } from '../components/App'
import { Params } from '../utils/router'
import { CreateUserPage } from './Create/CreateUserPage.tsx'
import { CreatePage } from './Create/CreatGamePage.tsx'
import { ExplorePage } from './ExplorePage/ExplorePage.tsx'
import GamePage from './GamePage/GamePage.tsx'
import { RejectGamePage } from './RejectGamePage/RejectGamePage.tsx'
import { ValidateGamePage } from './ValidateGamePage/ValidateGamePage.tsx'
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
    path: '/create/user',
    element: <CreateUserPage />,
  },
  {
    path: `/validate/game/:${Params.gameId}`,
    element: <ValidateGamePage />,
  },
  {
    path: `/reject/game/:${Params.gameId}`,
    element: <RejectGamePage />,
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
