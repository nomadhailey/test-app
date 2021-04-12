import styled from 'styled-components'
import rocket from '../../resources/images/rocket.jpeg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MainImage = styled.img.attrs({
  src: rocket,
})`
  width: 400px;
  height: 400px;
  margin: 20px auto;
  /* display: block; */
`

export const OrderButton = styled.button`
  width: 400px;
  padding: 10px 0;
  border: 1px solid #dadada;
`
