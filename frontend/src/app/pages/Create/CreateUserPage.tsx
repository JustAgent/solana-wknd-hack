import { observer } from 'mobx-react-lite'
import React from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { createUser, type UserReq } from '../../../api/api2.ts'
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

export const CreateUserPage: React.FC = observer(() => {
  const {
    handleSubmit,
    control,
    formState: { isValid },

    setValue,
  } = useForm<UserReq>()

  const onSubmit: SubmitHandler<UserReq> = (data) => {
    createUser(data)
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
          <Label css={{ marginBottom: '$1' }}>Name</Label>
          <Input<UserReq>
            withoutDefaultBorder
            placeholder='name'
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
          <Label>Wallet Address</Label>
          <Input<UserReq>
            withoutDefaultBorder
            placeholder='0x...'
            controlledInputProps={{
              name: 'walletAddress',
              control,
              setValue,
              rules: {
                required: true,
              },
            }}
          />
        </FormControl>

        <FormControl>
          <Label>Twitter link</Label>
          <Input<UserReq>
            withoutDefaultBorder
            placeholder='Twitter'
            controlledInputProps={{
              name: 'twitter_Link',
              control,
              setValue,
              rules: {
                required: true,
              },
            }}
          />
        </FormControl>

        <FormControl>
          <Label>Logo link</Label>
          <Input<UserReq>
            withoutDefaultBorder
            placeholder='Link to your logo'
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
