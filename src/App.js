import { useState } from 'react'
import AuthContext from '../src/context/AuthContext'
import { Route, Switch } from 'react-router-dom'
import Service from './pages/Service'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MyPage from './pages/MyPage'
import MyPageDetail from './pages/MyPageDetail'
import Header from '../src/components/Header/Header'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
  
  }
  a{
    text-decoration:none;
    color:inherit;
    cursor: pointer;
  }
  ul,
  li {
    list-style: none;
    padding:0
  }
  button {
    cursor : pointer
  }
  input {
    outline : none
  }

`

function App() {
  const [user, setUser] = useState({
    token: undefined,
  })
  return (
    <>
      <GlobalStyle />
      <AuthContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route path="/" component={Service} exact />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/mypage/order/:id" component={MyPageDetail} />
          <Route path="/mypage/order" component={MyPage} />
        </Switch>
      </AuthContext.Provider>
    </>
  )
}

export default App
