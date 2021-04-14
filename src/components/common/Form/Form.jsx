import React from 'react'
import { Container, StyledForm } from './FormStyles'
import CommonInput from '../CommonInput/CommonInput'
import SubmitBtn from '../SubmitBtn/SubmitBtn'

const Form = ({
  signUpPage,
  inputs,
  handleSubmit,
  handleChange,
  validCheck,
  isEmailValid,
  isPasswordValid,
  focusRef,
}) => {
  return (
    <Container>
      <StyledForm onSubmit={handleSubmit} ref={focusRef}>
        {inputs.map((input) => (
          <CommonInput
            key={input.id}
            text={input.text}
            id={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            handleChange={handleChange}
            onBlur={signUpPage && input.id === 'email' ? validCheck : undefined}
            isEmailValid={isEmailValid}
            isPasswordValid={isPasswordValid}
            signUpPage={signUpPage}
          />
        ))}
        <SubmitBtn text={signUpPage ? '회원가입' : '로그인'} />
      </StyledForm>
    </Container>
  )
}

export default React.memo(Form)
