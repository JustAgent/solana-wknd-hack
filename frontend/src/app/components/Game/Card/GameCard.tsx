import { Avatar, Box, Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { type FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { type Game } from '../../../../api/Api.ts'
import { styled } from '../../../../styles'
import { GameCardStatus } from './Status/GameCardStatus.tsx'

const StyledCard = styled(Card, {
  width: '100%',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
  },
})

export const GameCard: FC<Game> = observer(({
  id,
  name,
  creator_png,
  creator_name,
  image_url,
  status,
}) => {
  const navigate = useNavigate()

  useEffect(() => {
    console.log(image_url)
  }, [image_url])

  return (
    <StyledCard
      onClick={() => {
        navigate(`/game/${id}`)
      }}
    >
      <CardBody>
        <Image
          src={image_url}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Heading alignItems={'flex-end'} size='lg'>{name}</Heading>
            <GameCardStatus status={status} />
          </Flex>
          <Flex
            onClick={() => {
              navigate(`/validator/${id}`)
            }}
            alignItems={'center'}
          >
            <Avatar src={creator_png} />
            <Box ml='3'>
              <Text fontWeight='bold' style={{ display: 'flex', alignItems: 'center' }}>
                {creator_name}
              </Text>
            </Box>
          </Flex>
        </Stack>
      </CardBody>
    </StyledCard>
  )
})
