import React, { useContext, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import { Container, MainImage, OrderButton } from './ServiceMainStyles'

const ServiceMain = () => {
  const history = useHistory()
  const { user } = useContext(AuthContext)
  const { token } = user
  const orderItem = useCallback(() => {
    if (token) {
      alert('주문에 성공하였습니다')
    } else {
      alert('로그인을 해주세요')
      history.push('/sign-up')
    }
  }, [history, token])
  return (
    <Container>
      <MainImage />
      <OrderButton onClick={orderItem}>주문하기</OrderButton>
    </Container>
  )
}

export default React.memo(ServiceMain)
