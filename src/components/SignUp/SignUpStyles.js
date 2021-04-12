import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  border: 1px solid lightseagreen;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const Label = styled.label``

export const Input = styled.input`
  padding: 5px;
  width: 200px;
  height: 30px;
  &.invalid {
    outline: 1px solid red;
  }
  /* outline: ${(props) => !props.IsValid && '1px solid red'}; */
`

export const SubmitBtn = styled.button``
