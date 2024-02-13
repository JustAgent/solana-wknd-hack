import { observer } from 'mobx-react-lite'
import React from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { createGame, type CreateGameReq } from '../../../api/api2.ts'
import {
  Button,
  FormControl,
  Input,
  PageLayout,
  Txt,
} from '../../UIkit'
import {
  ButtonContainer,
  Form,
  Label,
  TitleGroup,
} from './helper/style/style'

export const CreatePage: React.FC = observer(() => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    formState: { isValid },

    setValue,
  } = useForm<CreateGameReq>()

  const onSubmit: SubmitHandler<CreateGameReq> = async (data) => {
    const { id } = await createGame({
      ...data,
      creator_id: parseInt(data.creator_id),
      smartcontract_info: parseInt(data.smartcontract_info),
      genre_id: parseInt(data.genre_id),
    })
    navigate(`/game/${id}`)
  }

  return (
    <PageLayout
      style={{
        minHeight: '100vh',
      }}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TitleGroup>
          <h3><Txt h3 style={{ fontWeight: '600' }}>Create New Game</Txt></h3>
        </TitleGroup>

        <FormControl>
          <Label css={{ marginBottom: '$1' }}>Url to preview img</Label>
          <Input<CreateGameReq>
            withoutDefaultBorder
            placeholder='Url'
            controlledInputProps={{
              name: 'image_link',
              control,
              setValue,
              rules: {
                required: true,
              },
            }}
          />
        </FormControl>

        <FormControl>
          <Label>Name</Label>
          <Input<CreateGameReq>
            withoutDefaultBorder
            placeholder='Game name'
            controlledInputProps={{
              name: 'name',
              control,
              setValue,
              rules: {
                required: true,
              },
            }}
          />
        </FormControl>

        <FormControl>
          <Label>Description</Label>
          <Input<CreateGameReq>
            withoutDefaultBorder
            placeholder='Description'
            controlledInputProps={{
              name: 'description',
              control,
              setValue,
              rules: {
                required: true,
              },
            }}
          />
        </FormControl>

        <FormControl>
          <Label>Creator id</Label>
          <Input<CreateGameReq>
            withoutDefaultBorder
            placeholder='Game Link'
            controlledInputProps={{
              name: 'creator_id',
              control,
              setValue,
            }}
          />
        </FormControl>

        <FormControl>
          <Label>Genre id</Label>
          <Input<CreateGameReq>
            withoutDefaultBorder
            placeholder='Link to your code'
            controlledInputProps={{
              name: 'genre_id',
              control,
              setValue,
              rules: {
                required: true,
              },
            }}
          />
        </FormControl>

        <FormControl>
          <Label>Code link</Label>
          <Input<CreateGameReq>
            withoutDefaultBorder
            placeholder='Link to your code'
            controlledInputProps={{
              name: 'code_link',
              control,
              setValue,
              rules: {
                required: true,
              },
            }}
          />
        </FormControl>

        <FormControl>
          <Label>Version</Label>
          <Input<CreateGameReq>
            withoutDefaultBorder
            placeholder='Link to your code'
            controlledInputProps={{
              name: 'version',
              control,
              setValue,
              rules: {
                required: true,
              },
            }}
          />
        </FormControl>

        <FormControl>
          <Label>Smart contract info</Label>
          <Input<CreateGameReq>
            withoutDefaultBorder
            placeholder='Link to your code'
            controlledInputProps={{
              name: 'smartcontract_info',
              control,
              setValue,
              rules: {
                required: true,
              },
            }}
          />
        </FormControl>

        <ButtonContainer>
          <Button
            primary
            type='submit'
            isDisabled={!isValid}
            title={isValid ? undefined : 'Required fields must be filled'}
            css={{
              width: '320px',
            }}
          >
            Build
          </Button>
        </ButtonContainer>
      </Form>
    </PageLayout>
  )
})
