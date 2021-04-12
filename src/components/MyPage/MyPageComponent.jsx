import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import Pagination from './Pagination'
import {
  Container,
  OrderList,
  OrderItem,
  ItemId,
  ItemName,
} from './MyPageComponentStyles'

const MyPageComponent = () => {
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [content, setContent] = useState([])
  const history = useHistory()
  const getOrderList = async (page) => {
    const url = `https://mycroft-test-api.herokuapp.com/order?page=${page - 1}`
    console.log('page#####', page)
    await fetch(url)
      .then((res) => {
        console.log('res', res)
        return res.json()
      })
      .then((data) => {
        const { totalPages, currentPage, content } = data
        setTotalPages(totalPages)
        setCurrentPage(currentPage)
        setContent(content)
        console.log('currentPage in 겟오더리스트', currentPage)
        console.log('content in 겟오더리스트', content)
        // history.push(`/mypage/order/${currentPage}`)
      })
  }

  console.log('currentPage in 바깥', currentPage)
  console.log('content in 바깥', content)

  useEffect(() => {
    getOrderList(currentPage + 1)
  }, [])
  console.log('history', history.location.pathname)
  return (
    <Container>
      <OrderList>
        {content?.map((item) => (
          <OrderItem
            key={item.id}
            onClick={() => history.push(`/mypage/order/${item.id}`)}>
            <ItemId>{item.id}</ItemId>
            <ItemName>{item.itemName}</ItemName>
          </OrderItem>
        ))}
        <button onClick={() => getOrderList(2)}>불러오기</button>
      </OrderList>
      <Pagination
        totalPages={totalPages}
        getOrderList={getOrderList}
        currentPage={currentPage}
      />
    </Container>
  )
}

export default MyPageComponent
