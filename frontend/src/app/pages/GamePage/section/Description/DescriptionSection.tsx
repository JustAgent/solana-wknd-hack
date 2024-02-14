import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { commentGame, type CommentGameReq } from '../../../../../api/api2.ts'
import { styled } from '../../../../../styles'
import { Button, FormControl, Input, textVariant, Txt } from '../../../../UIkit'
import { useActivatedStore } from '../../../../utils/store/activate-deactivate/useActivatedStore.ts'
import { Label } from '../../../Create/helper/style/style.ts'
import { GridBlock, PropertyTitle } from '../../helper/styles/style.ts'

const DescriptionSectionStyle = styled(GridBlock, {
  paddingTop: '32px',
  paddingBottom: '32px',
  '@md': {
    paddingTop: '16px',
    paddingBottom: '16px',
  },
  '@sm': {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
})

const Pre = styled('pre', {
  ...textVariant('body4').true,
  color: '$gray800',
  fontWeight: 400,
  whiteSpace: 'pre-wrap',
  wordWrap: 'anywhere',
  lineHeight: 1.5,
  maxWidth: 640,
})

const DescriptionSection = () => {
  const { gameStore } = useActivatedStore('gameStore')
  const params = useParams()
  const [comments, setComments] = useState<Array<{ text: string, user_id: number }>>([])
  const {
    handleSubmit,
    control,
    formState: { isValid },

    setValue,
  } = useForm<CommentGameReq>()

  const onSubmit = (data: CommentGameReq) => {
    commentGame({
      ...data,
      user_id: parseInt(data.user_id),
      game_id: parseInt(params.gameId),
    }).then(() => {
      setComments([...comments, {
        text: data.text,
        user_id: parseInt(data.user_id),
      }])
    })
  }

  return (
    <>
      {gameStore.data?.description && (
        <DescriptionSectionStyle style={{ gridArea: 'Description' }}>
          <PropertyTitle>Description</PropertyTitle>
          <Pre>{gameStore.data?.description}</Pre>
        </DescriptionSectionStyle>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl noMax>
          <Label>User id</Label>
          <Input<CommentGameReq>
            withoutDefaultBorder
            placeholder='id'
            controlledInputProps={{
              name: 'user_id',
              control,
              setValue,
            }}
          />
        </FormControl>
        <FormControl noMax>
          <Label>Comment</Label>
          <Input<CommentGameReq>
            withoutDefaultBorder
            placeholder='Reason'
            controlledInputProps={{
              name: 'text',
              control,
              setValue,
            }}
          />
        </FormControl>
        <Button
          type={'submit'}
          isDisabled={!isValid}
          primary
          styles={{ width: '50%', height: '50%', margin: '0 auto' }}
        >
          Comment
        </Button>
      </form>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
      >
        {comments.map((item, index) =>
          <div style={{ display: '' }}><Txt key={index}>{`${item.user_id}: ${item.text}`}</Txt></div>)}
      </div>
    </>
  )
}

export default DescriptionSection
