import styled from 'styled-components'

export const Container = styled.div``
export const PageList = styled.ul`
  display: flex;
  justify-content: center;
`
export const PageNumber = styled.li`
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`
