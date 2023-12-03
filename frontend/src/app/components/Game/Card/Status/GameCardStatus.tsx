import { type FC } from 'react'

import { type GameStatusEnum } from '../../../../../api/Api.ts'
import { styled } from '../../../../../styles'

interface GameCardStatusProps {
  status?: GameStatusEnum
}
const StyledCardStatus = styled('span', {
  // Общие стили для всех статусов
  display: 'inline-block',
  padding: '0.25em 0.5em',
  borderRadius: '4px',
  fontSize: '0.75em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  height: 'max-content',
  marginTop: '2px',
  // Вариации статусов
  variants: {
    status: {
      created: {
        backgroundColor: 'rgba(135, 206, 250, 0.3)', // Светло-синий
        color: '#000000',
      },
      request: {
        backgroundColor: 'rgba(135, 206, 250, 0.3)', // Светло-синий
        color: '#000000',
      },
      voting: {
        backgroundColor: 'rgba(255, 239, 0, 0.3)', // Светло-жёлтый
        color: '#000000',
      },
      validation: {
        backgroundColor: 'rgba(255, 239, 0, 0.3)', // Светло-жёлтый
        color: '#000000',
      },
      validating: {
        backgroundColor: 'rgba(255, 239, 0, 0.3)', // Светло-жёлтый
        color: '#000000',
      },
      approved: {
        backgroundColor: 'rgba(50, 205, 50, 0.3)', // Светло-зелёный
        color: '#FFFFFF',
      },
      denied: {
        backgroundColor: 'rgba(255, 69, 0, 0.3)', // Светло-красный
        color: '#FFFFFF',
      },
      refactor: {
        backgroundColor: 'rgba(135, 206, 250, 0.3)', // Светло-синий
        color: '#000000',
      },
      cancel: {
        backgroundColor: 'rgba(255, 69, 0, 0.3)', // Светло-красный
        color: '#FFFFFF',
      },
    },
  },
})

export const GameCardStatus: FC<GameCardStatusProps> = ({ status }) => {
  return (
    <StyledCardStatus status={status}>
      {status}
    </StyledCardStatus>
  )
}
