import React from 'react'
import { Container, StyledText } from './LoadingStyles'

const Loading = () => {
  return (
    <Container>
      <StyledText>loading...</StyledText>
    </Container>
  )
}

export default React.memo(Loading)
