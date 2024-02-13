import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { rejectGame, type RejectGameReq } from '../../../api/api2.ts'
import { Button, FormControl, Input, PageLayout } from '../../UIkit'
import { Label } from '../Create/helper/style/style.ts'

export const RejectGamePage = () => {
  const params = useParams()

  const {
    handleSubmit,
    control,
    formState: { isValid },

    setValue,
  } = useForm<RejectGameReq>()

  const onSubmit = (data: RejectGameReq) => {
    rejectGame({
      ...data,
      validator_id: parseInt(data.validator_id),
      game_id: parseInt(params.gameId),
    })
  }

  return (
    <PageLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Label>Validator id</Label>
          <Input<RejectGameReq>
            withoutDefaultBorder
            placeholder='Id'
            controlledInputProps={{
              name: 'validator_id',
              control,
              setValue,
            }}
          />
        </FormControl>
        <FormControl>
          <Label>Comment</Label>
          <Input<RejectGameReq>
            withoutDefaultBorder
            placeholder='Reason'
            controlledInputProps={{
              name: 'comment',
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
          Reject game
        </Button>
      </form>
    </PageLayout>
  )
}
