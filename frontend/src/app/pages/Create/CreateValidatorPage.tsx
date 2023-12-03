import { observer } from 'mobx-react-lite'
import React from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

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

export interface CreateValdatorForm {
  name: string
  photoUrl: string
  bio: string
  cvLink: string
}

export const CreateValidatorPage: React.FC = observer(() => {
  const {
    handleSubmit,
    control,
    formState: { isValid },

    setValue,
  } = useForm<CreateValdatorForm>()

  const onSubmit: SubmitHandler<CreateValdatorForm> = (data) => {
    console.log(data)
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
          <Label css={{ marginBottom: '$1' }}>Url to your photo</Label>
          <Input<CreateValdatorForm>
            withoutDefaultBorder
            placeholder='Url'
            controlledInputProps={{
              name: 'photoUrl',
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
          <Input<CreateValdatorForm>
            withoutDefaultBorder
            placeholder='Your name'
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
          <Input<CreateValdatorForm>
            withoutDefaultBorder
            placeholder='Bio'
            controlledInputProps={{
              name: 'bio',
              control,
              setValue,
              rules: {
                required: true,
              },
            }}
          />
        </FormControl>

        <FormControl>
          <Label>CV Link</Label>
          <Input<CreateValdatorForm>
            withoutDefaultBorder
            placeholder='Link to your cv'
            controlledInputProps={{
              name: 'cvLink',
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
            Send request
          </Button>
        </ButtonContainer>
      </Form>
    </PageLayout>
  )
})
