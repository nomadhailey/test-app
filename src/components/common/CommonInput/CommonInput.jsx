import React from 'react'
import { Container, Label, StyledInput } from './CommonInputStyles'
import classNames from 'classnames'

const CommonInput = ({
  text,
  id,
  name,
  type,
  placeholder,
  handleChange,
  onBlur,
  isEmailValid,
  isPasswordValid,
  // signUpPage,
}) => {
  return (
    <Container>
      <Label htmlFor={id}>{text}</Label>
      <StyledInput
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        className={classNames(
          id === 'email' && isEmailValid === false && `${id}_invalid`,
          id === 'password' && isPasswordValid === false && `${id}_invalid`,
        )}
        onChange={handleChange}
        onBlur={onBlur}
      />
    </Container>
  )
}

export default React.memo(CommonInput)
