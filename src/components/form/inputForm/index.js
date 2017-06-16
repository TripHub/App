import React from 'react'
import { styled } from 'styletron-react'
import { spacing } from '../../../common/style'
import { randomString } from '../../../services/primitives'
import Button from '../../button'
import { InputWithoutLabel, Label } from '../input'

const Row = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch'
})

const InputWrapper = styled('div', {
  width: '100%',
  marginRight: spacing.sm
})

export const InputForm = ({ small, label, id, onSubmit, buttonText, disabled, ...props }) => {
  const _id = id || randomString()
  return (
    <form onSubmit={onSubmit}>
      <Label
        htmlFor={_id}
        small={small}
        children={label} />
      <Row>
        <InputWrapper>
          <InputWithoutLabel
            id={_id}
            small={small}
            {...props} />
        </InputWrapper>
        <Button
          small
          type='submit'
          disabled={disabled}
          children={buttonText || 'Save'} />
      </Row>
    </form>
  )
}