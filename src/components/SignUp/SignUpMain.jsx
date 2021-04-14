import React, { useContext, useState, useRef, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import useAsync from '../../hooks/useAsync'
import Form from '../common/Form/Form'

const signUpInputs = [
  {
    text: '이메일',
    id: 'email',
    name: 'email',
    //type = email로 설정할 경우, 이메일 형식(abc@abc.com)과 맞지 않을 경우 input 자체 설정된 문구가 뜸. 유효하지 않은 이메일일 경우 '이메일 확인 Alert'를 띄워야 하는데 input 자체 내장된 경고문구로 인해 기능 확인이 힘들어 불가피하게 type : '' 로 설정
    type: '',
    placeholder: 'abc@wncoms.com',
    hello: 'test',
  },
  {
    text: '비밀번호',
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: '8자 이상 15자 이하',
  },
  {
    text: '비밀번호 확인',
    id: 'passwordCheck',
    name: 'passwordCheck',
    type: 'password',
    placeholder: '8자 이상 15자 이하',
  },
  {
    text: '연락처',
    id: 'mobile',
    name: 'mobile',
    type: 'tel',
    placeholder: '01012345678',
  },
]
const SignUpMain = () => {
  const [values, setValues] = useState({})
  const { email, password, passwordCheck, mobile } = values
  const [isEmailValid, setIsEmailValid] = useState(null)
  const [isPasswordValid, setIsPasswordValid] = useState(null)

  const { setUser } = useContext(AuthContext)

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target
      setValues({
        ...values,
        [name]: value,
      })
      if (name === 'password') {
        setIsPasswordValid(
          value.length >= 8 && value.length <= 15 ? true : false,
        )
      }
    },
    [values],
  )

  const validCheck = useCallback((e) => {
    const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    const { name, value } = e.target
    setIsEmailValid(name === 'email' && emailRegExp.test(value) ? true : false)
  }, [])

  const history = useHistory()

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
      mobile,
    }),
  }
  const { requestData: signUp } = useAsync({
    urlDetail: '/sign-up',
    options,
  })

  const focusRef = useRef(null)
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      if (!isEmailValid) {
        alert('이메일을 다시 확인해주세요')
        focusRef?.current?.children[0]?.children[1]?.focus()
      }
      if (!isPasswordValid) alert('비밀번호는 8~15자 사이로 입력해주세요')
      if (password !== passwordCheck) alert('비밀번호가 일치하지 않습니다')
      if (isEmailValid && isPasswordValid && password === passwordCheck) {
        try {
          const response = await signUp()
          if (response) {
            setUser({ token: response.token })
            sessionStorage.setItem('token', response.token)
            history.push('/')
          }
        } catch (error) {
          console.log('error:', error)
        }
      }
    },
    [
      history,
      isEmailValid,
      isPasswordValid,
      password,
      passwordCheck,
      setUser,
      signUp,
    ],
  )

  return (
    <>
      <Form
        inputs={signUpInputs}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        validCheck={validCheck}
        isEmailValid={isEmailValid}
        isPasswordValid={isPasswordValid}
        focusRef={focusRef}
        signUpPage
      />
    </>
  )
}

export default React.memo(SignUpMain)
