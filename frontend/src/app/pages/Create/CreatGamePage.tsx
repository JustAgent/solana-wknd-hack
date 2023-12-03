import { observer } from 'mobx-react-lite'
import React from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { api } from '../../../api/Api.ts'
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

export interface CreateGameForm {
  name: string
  imageUrl: string
  description: string
  gitHubUrl: string
  gameLink?: string
}

export const CreatePage: React.FC = observer(() => {
  const {
    handleSubmit,
    control,
    formState: { isValid },

    setValue,
  } = useForm<CreateGameForm>()

  const onSubmit: SubmitHandler<CreateGameForm> = (data) => {
    api.games.gameCreate({
      id: '1',
      name: 'Solana Game',
      description: 'Good project',
      genre: '',
      image_url: '',
      status: 'Denied',
      creator: 'NoName',
      validator: '1',
      github_link: '',
      game_link: '',
    })
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
          <Input<CreateGameForm>
            withoutDefaultBorder
            placeholder='Url'
            controlledInputProps={{
              name: 'imageUrl',
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
          <Input<CreateGameForm>
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
          <Input<CreateGameForm>
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
          <Label>Game Link</Label>
          <Input<CreateGameForm>
            withoutDefaultBorder
            placeholder='Game Link'
            controlledInputProps={{
              name: 'gameLink',
              control,
              setValue,
            }}
          />
        </FormControl>

        <FormControl>
          <Label>Github url</Label>
          <Input<CreateGameForm>
            withoutDefaultBorder
            placeholder='Link to your code'
            controlledInputProps={{
              name: 'gitHubUrl',
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
