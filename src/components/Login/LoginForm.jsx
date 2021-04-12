import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import {
  Container,
  Form,
  InputContainer,
  Label,
  Input,
  SubmitBtn,
} from './LoginStyles'

const LoginForm = () => {
  const [values, setValues] = useState({})
  const { email, password } = values
  const { setUser } = useContext(AuthContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = 'https://mycroft-test-api.herokuapp.com/login'
    const data = {
      email,
      password,
    }
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
        console.log('data in 로그인', data)
        if (data.token) {
          setUser({ token: data.token })
          console.log('setUser', setUser)
          // sessionStorage.setItem('token', JSON.stringify(data.token))
          history.push('/')
        }
      })
      .catch((error) => console.log('error:', error))
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label htmlFor="email">이메일</Label>
          <Input
            name="email"
            id="email"
            type="email"
            // value={email}
            onChange={handleChange}
            placeholder="abc@wncoms.com"
            // onBlur={validCheck}
            // IsValid={IsEmailValid}

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
            onChange={handleChange}
            placeholder="8자 이상 15자 이하"
            // min="8"
            // max="15"
            // IsValid={IsPasswordValid}
            // required
          />
        </InputContainer>
        <SubmitBtn type="submit">로그인</SubmitBtn>
      </Form>
    </Container>
  )
}

export default LoginForm
