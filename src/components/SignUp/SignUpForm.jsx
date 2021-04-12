import React, { useContext, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import {
  Container,
  Form,
  InputContainer,
  Label,
  Input,
  SubmitBtn,
} from './SignUpStyles'

const SignUpForm = () => {
  const [values, setValues] = useState({})
  const { email, password, passwordCheck, mobile } = values
  const [isEmailValid, setIsEmailValid] = useState(null)
  const [isPasswordValid, setIsPasswordValid] = useState(null)

  const { setUser } = useContext(AuthContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
    if (name === 'password') {
      if (value.length >= 8 && value.length <= 15) {
        setIsPasswordValid(true)
      } else {
        setIsPasswordValid(false)
      }
    }
  }

  const validCheck = (e) => {
    const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    const { name, value } = e.target
    if (name === 'email' && emailRegExp.test(value)) {
      setIsEmailValid(true)
    } else {
      setIsEmailValid(false)
    }
  }

  const emailRef = useRef()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = 'https://mycroft-test-api.herokuapp.com/sign-up'
    const data = {
      email,
      password,
      mobile,
    }
    // valid 체크 => 따로 함수로 만들기
    if (!isEmailValid) {
      alert('이메일을 다시 확인해주세요')
      emailRef.current.focus()
    }
    if (!isPasswordValid) alert('비밀번호는 8~15자 사이로 입력해주세요')
    if (password !== passwordCheck) alert('비밀번호가 일치하지 않습니다')
    // valie 체크 => 여기까지

    if (isEmailValid && isPasswordValid && password === passwordCheck) {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log('res', res)
          return res.json()
        })
        .then((data) => {
          console.log('data', data)
          if (data.token) {
            setUser({ token: data.token })
            console.log('setUser', setUser)
            // sessionStorage.setItem('token', JSON.stringify(data.token))
            history.push('/')
          }
        })
        .catch((error) => console.log('error:', error))
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label htmlFor="email">이메일</Label>
          <Input
            name="email"
            id="email"
            // type="email"
            // value={email}
            onChange={handleChange}
            placeholder="abc@wncoms.com"
            onBlur={validCheck}
            className={isEmailValid === false && 'invalid'}
            ref={emailRef}
            // required
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            name="password"
            id="password"
            type="password"
            // value={password}
            className={isPasswordValid === false && 'invalid'}
            onChange={handleChange}
            placeholder="8자 이상 15자 이하"
            // min="8"
            // max="15"
            // IsValid={IsPasswordValid}
            // required
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="passwordCheck">비밀번호 확인</Label>
          <Input
            name="passwordCheck"
            id="passwordCheck"
            type="password"
            // value={passwordCheck}
            onChange={handleChange}
            placeholder=""
            /* 문제 : IsValid를 true상태로 놔두게 되면 다른 사람이 코드를 봤을 때 오해의 소지가 있음 */
            // IsValid
            // required
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="mobile">연락처</Label>
          <Input
            name="mobile"
            id="mobile"
            type="tel"
            // value={mobile}
            onChange={handleChange}
            placeholder="01012345678"
            // IsValid
            // required
          />
        </InputContainer>
        <SubmitBtn type="submit">가입하기</SubmitBtn>
      </Form>
    </Container>
  )
}

export default SignUpForm
