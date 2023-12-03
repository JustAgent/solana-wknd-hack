import { Avatar, Box, Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { type GameStatusEnum } from '../../../../api/Api.ts'
import { styled } from '../../../../styles'
import { GameCardStatus } from './Status/GameCardStatus.tsx'

export interface GameCardProps {
  id?: string
  gamePhoto?: string
  name?: string
  statusGame: GameStatusEnum
  creator: {
    avatarUrl?: string
    name: string
  }
}

const StyledCard = styled(Card, {
  width: '100%',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
  },
})

export const GameCard: FC<GameCardProps> = ({
  id,
  gamePhoto,
  name,
  creator,
  statusGame,
}) => {
  const { avatarUrl, name: creatorName } = creator

  const navigate = useNavigate()

  return (
    <StyledCard
      onClick={() => {
        navigate(`/game${id}`)
      }}
    >
      <CardBody>
        <Image
          src={gamePhoto}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Heading alignItems={'flex-end'} size='lg'>{name}</Heading>
            <GameCardStatus status={statusGame} />
          </Flex>
          <Flex
            onClick={() => {
              navigate(`/validator/${id}`)
            }}
            alignItems={'center'}
          >
            <Avatar src={avatarUrl} />
            <Box ml='3'>
              <Text fontWeight='bold' style={{ display: 'flex', alignItems: 'center' }}>
                {creatorName}
              </Text>
            </Box>
          </Flex>
        </Stack>
      </CardBody>
    </StyledCard>
  )
}
