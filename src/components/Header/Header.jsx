import React, { useContext, useCallback } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
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
  // const location = useLocation()
  // const currentLocation = location.pathname
  const { user, setUser } = useContext(AuthContext)
  const { token } = user
  const logout = useCallback(() => {
    sessionStorage.removeItem('token')
    setUser({
      token: null,
    })
  }, [setUser])

  return (
    <Container>
      <Logo alt="로고" />
      <Navigation>
        <StyledUl>
          {(token ? LogInNav : MainNav).map((nav) => (
            <NavItem key={nav.id}>
              <NavLink
                key={nav.id}
                exact={true}
                activeStyle={{ color: 'lightseagreen', fontWeight: 'bold' }}
                to={nav.url}
                onClick={nav.name === '로그아웃' ? logout : undefined}>
                {nav.name}
              </NavLink>
            </NavItem>
          ))}
        </StyledUl>
      </Navigation>
    </Container>
  )
}

export default React.memo(Header)
