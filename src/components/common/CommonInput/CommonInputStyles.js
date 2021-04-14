import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const Label = styled.label`
  margin-right: 10px; ;
`

export const StyledInput = styled.input`
  padding: 5px;
  width: 200px;
  height: 30px;
  &.email_invalid,
  &.password_invalid {
    outline: 2px solid red;
  }
`
