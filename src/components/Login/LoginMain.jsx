import React, { useState, useContext, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import Form from '../common/Form/Form'
import useAsync from '../../hooks/useAsync'

const loginInputs = [
  {
    text: '이메일',
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'abc@wncoms.com',
  },
  {
    text: '비밀번호',
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: '8자 이상 15자 이하',
  },
]

const LoginMain = () => {
  const [values, setValues] = useState({})
  const { email, password } = values
  const { setUser } = useContext(AuthContext)
  const history = useHistory()

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target
      setValues({
        ...values,
        [name]: value,
      })
    },
    [values],
  )
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
    }),
  }
  const { requestData: login } = useAsync({
    urlDetail: '/login',
    options,
  })

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      try {
        const response = await login()
        if (response) {
          setUser({ token: response.token })
          sessionStorage.setItem('token', response.token)
          history.push('/')
        }
      } catch (error) {
        console.log('error:', error)
      }
    },
    [history, login, setUser],
  )

  return (
    <>
      <Form
        inputs={loginInputs}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        signUpPage={false}
      />
    </>
  )
}

export default React.memo(LoginMain)
