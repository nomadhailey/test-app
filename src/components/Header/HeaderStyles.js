import styled from 'styled-components'
import logo from '../../resources/images/logo.png'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #dadada;
`

export const Logo = styled.img.attrs({
  src: logo,
})`
  width: 70px;
  height: 70px;
`

export const Navigation = styled.nav``
export const StyledUl = styled.ul`
  display: flex;
`

export const NavItem = styled.li`
  padding: 5px 10px;
  /* &.active {
    color: lightseagreen;
    font-weight: bold;
  } */
`
