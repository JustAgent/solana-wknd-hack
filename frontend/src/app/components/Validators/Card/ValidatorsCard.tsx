import { Avatar, Badge, Box, Card, CardBody, Flex, Text } from '@chakra-ui/react'
import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { styled } from '../../../../styles'

interface ValidatorsCardProps {
  id?: string
  avatarUrl?: string
  name?: string
  countProjects?: string
  rang?: string
}

const StyledCard = styled(Card, {
  width: '100%',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
  },
})

export const ValidatorsCard: FC<ValidatorsCardProps> = ({ id, avatarUrl, name, countProjects, rang }) => {
  const navigate = useNavigate()

  return (
    <StyledCard>
      <CardBody>
        <Flex onClick={() => {
          navigate(`/validator/${id}`)
        }}
        >
          <Avatar src={avatarUrl} />
          <Box ml='3'>
            <Text fontWeight='bold' style={{ display: 'flex', alignItems: 'center' }}>
              {name}
              <Badge ml='1' colorScheme='green'>
                {rang}
              </Badge>
            </Text>
            <Text fontSize='sm' style={{ display: 'flex', gap: '4px' }}>
              Count projects:
              <Text fontWeight='bold'>{countProjects}</Text>
            </Text>
          </Box>
        </Flex>
      </CardBody>
    </StyledCard>
  )
}
