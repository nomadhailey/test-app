import React, { useContext, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import Form from '../common/Form/Form'
import useAsync from '../../hooks/useAsync'
import useInput from '../../hooks/useInput'

const loginInputs = [
  {
    text: '이메일',
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'abc@abc.com',
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
  const [{ email, password }, handleChange] = useInput({
    email: '',
    password: '',
  })
  const { setUser } = useContext(AuthContext)
  const history = useHistory()

  const { requestData: login } = useAsync({
    urlDetail: '/login',
    optionsData: { email, password },
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
