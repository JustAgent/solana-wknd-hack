import { observer } from 'mobx-react-lite'
import React from 'react'
import { useParams } from 'react-router-dom'

import { styled } from '../../../../../styles'
import { Badge, NavLink } from '../../../../UIkit'
import { getHttpLinkFromIpfsString } from '../../../../utils/nfts/getHttpLinkFromIpfsString'
import { getProfileImageUrl } from '../../../../utils/nfts/getProfileImageUrl'
import { reduceAddress } from '../../../../utils/nfts/reduceAddress'
import { type Params } from '../../../../utils/router'
import { GridBlock } from '../../helper/styles/style.ts'

const BadgesContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
  '@sm': {
    flexDirection: 'column-reverse',
  },
})

const HomeLandSection = observer(() => {
  const { gameId } = useParams<Params>()

  const { ga }

  return (
    <GridBlock style={{ gridArea: 'HomeLand' }}>
      <BadgesContainer>
        <NavLink
          lgFullWidth
          to={creatorId ? `/profile/${creatorId}` : location.pathname}
        >
          <Badge
            image={{
              borderRadius: 'circle',
              url: creatorImg,
            }}
            content={{
              title: 'Creator',
              value: creatorName,
            }}
            wrapperProps={{
              nftPage: true,
            }}
          />
        </NavLink>
        {(validatorId !== undefined) && (
          <NavLink
            lgFullWidth
            to={
              `/validator/${validatorId}`
            }
          >
            <Badge
              content={{ title: 'Validator', value: validatorName }}
              image={{
                url: valdidatorImg,
                borderRadius: 'roundedSquare',
              }}
              wrapperProps={{
                nftPage: true,
              }}
            />
          </NavLink>
        )}
        <NavLink
          lgFullWidth
          to={ownerName ? `/profile/${ownerUrl}` : location.pathname}
        >
          <Badge
            image={{
              borderRadius: 'circle',
              url: ownerHasImg ? getHttpLinkFromIpfsString(ownerImg ?? '') : getProfileImageUrl(token?.owner ?? ''),
            }}
            content={{
              title: 'Owner',
              value: reduceAddress(ownerName ?? ''),
            }}
            wrapperProps={{
              nftPage: true,
            }}
          />
        </NavLink>
      </BadgesContainer>
    </GridBlock>
  )
})

export default HomeLandSection
