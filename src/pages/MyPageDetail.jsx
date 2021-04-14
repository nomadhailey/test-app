import React from 'react'
import MyPageDetailMain from '../components/MyPageDetail/MyPageDetailMain'

const MyPageDetail = ({ match }) => {
  const paramsId = match.params.id

  return <MyPageDetailMain paramsId={paramsId} />
}

export default MyPageDetail
