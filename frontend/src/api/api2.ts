import axios from 'axios'

export interface CreateGameReq {
  name: string
  description: string
  creator_id: number
  genre_id: number
  code_link: string
  image_link: string
  version: string
  smartcontract_info: number
}

export interface CreateGameResponse {
  id: number
}

export interface CheckGameReq {
  game_id: number
  validator_id: number
}

export interface CheckGameResp {
  codelink: string
}

export interface ValidateGameReq {
  game_id: number
  validator_id: number
}

export interface CommentGameReq {
  game_id: number
  user_id: number
  text: string
}

export interface RejectGameReq {
  validator_id: number
  game_id: number
  comment: string
}

export interface UserReq {
  name: string
  walletAddress: string
  twitter_Link: string
  image_link: string
}

export interface UserResp {
  id: string
}

export const createGame = (data: CreateGameReq): Promise<CreateGameResponse> => {
  return axios.post('/api/game/createGame', {
    data,
  })
}

export const checkGame = (data: CheckGameReq): Promise<CheckGameResp> => {
  return axios.get('/api/game/checkGame', {
    data,
  })
}

export const validateGame = (data: ValidateGameReq): Promise<void> => {
  return axios.post('/api/game/validateGame', {
    data,
  })
}

export const commentGame = (data: CommentGameReq): Promise<void> => {
  return axios.post('/api/game/commentGame', {
    data,
  })
}

export const rejectGame = (data: RejectGameReq): Promise<void> => {
  return axios.put('/api/game/rejectGame', {
    data,
  })
}

export const createUser = (data: UserReq): Promise<UserResp> => {
  return axios.post('/api/game/createUser', {
    data,
  })
}
