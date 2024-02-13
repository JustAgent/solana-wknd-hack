import { type Game, GameStatusEnum } from '../../../api/Api.ts'

export const gameStatusInfo = (game?: Game) =>
  game?.status.status

export const gamePermissions = {
  validator: {
    canValidate: (game?: Game) => {
      const status = gameStatusInfo(game)

      return status === GameStatusEnum.ACCEPTED
    },
  },
}
