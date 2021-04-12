import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

import { Container, Logo, Navigation, StyledUl, NavItem } from './HeaderStyles'

const MainNav = [
  { id: 1, name: '서비스', url: '/' },
  { id: 2, name: '회원가입', url: '/sign-up' },
  { id: 3, name: '로그인', url: '/login' },
]
const LogInNav = [
  { id: 1, name: '서비스', url: '/' },
  { id: 2, name: '마이페이지', url: '/mypage/order' },
  { id: 3, name: '로그아웃', url: '/logout' },
]

const Header = () => {
  const location = useLocation()
  const currentLocation = location.pathname

  // console.log('location', location)
  const { user, setUser } = useContext(AuthContext)
  const { token } = user
  // console.log('token in header', token)
  const logout = () => {
    // sessionStorage.removeItem('token')
    setUser({
      token: null,
    })
  }

  return (
    <Container>
      <Logo alt="로고" />
      <Navigation>
        <StyledUl>
          {(token ? LogInNav : MainNav).map((nav) => (
            <NavItem
              key={nav.id}
              className={currentLocation === nav.url && 'active'}
              onClick={nav.name === '로그아웃' && logout}>
              <Link to={nav.url}>{nav.name}</Link>
            </NavItem>
          ))}
          {/* <NavItem>
            <Link to="/">서비스</Link>
          </NavItem>
          {token ? (
            <>
              <NavItem>
                <Link to="/mypage/order">마이페이지</Link>
              </NavItem>
              <NavItem onClick={logout}>
                <Link to="/logout">로그아웃</Link>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <Link to="/sign-up">회원가입</Link>
              </NavItem>
              <NavItem>
                <Link to="/login">로그인</Link>
              </NavItem>
            </>
          )} */}
        </StyledUl>
      </Navigation>
    </Container>
  )
}

export default Header
