import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Pagination from './Pagination'
import Loading from '../common/Loading/Loading'
import {
  Container,
  OrderList,
  OrderItem,
  ItemId,
  ItemName,
} from './MyPageMainStyles'
import useAsync from '../../hooks/useAsync'

const MyPageMain = () => {
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const history = useHistory()

  const { isLoading, response, requestData: getOrderList } = useAsync({
    urlDetail: `/order?page=${currentPage - 1}`,
  })

  useEffect(() => {
    if (response) {
      setTotalPages(response?.totalPages)
    }
  }, [response])

  useEffect(() => {
    getOrderList()
  }, [currentPage])

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <OrderList>
            {response?.content?.map((item) => (
              <OrderItem
                key={item.id}
                onClick={() => history.push(`/mypage/order/${item.id}`)}>
                <ItemId>{item.id}</ItemId>
                <ItemName>{item.itemName}</ItemName>
              </OrderItem>
            ))}
          </OrderList>
          <Pagination
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </Container>
  )
}

export default React.memo(MyPageMain)
