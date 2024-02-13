import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { checkGame, type CheckGameReq } from '../../../api/api2.ts'
import { Button, FormControl, Input, PageLayout } from '../../UIkit'
import { Label } from '../Create/helper/style/style.ts'

export const ValidateGamePage = () => {
  const params = useParams()

  const {
    handleSubmit,
    control,
    formState: { isValid },

    setValue,
  } = useForm<CheckGameReq>()

  const onSubmit = (data: CheckGameReq) => {
    checkGame({
      validator_id: parseInt(data.validator_id),
      game_id: parseInt(params.gameId),
    })
  }

  return (
    <PageLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Label>Validator id</Label>
          <Input<CheckGameReq>
            withoutDefaultBorder
            placeholder='Game Link'
            controlledInputProps={{
              name: 'validator_id',
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
          Approve game
        </Button>
      </form>
    </PageLayout>
  )
}
