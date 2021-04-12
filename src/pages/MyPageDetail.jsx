import React from 'react'
import MyPageDetailComponent from '../components/MyPageDetail/MyPageDetailComponent'

const MyPageDetail = ({ match }) => {
  const paramsId = match.params.id

  return <MyPageDetailComponent paramsId={paramsId} />
}

export default MyPageDetail
