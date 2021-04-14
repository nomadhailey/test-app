import React, { useEffect, useState } from 'react'
import {
  Container,
  OrderItem,
  ItemId,
  ItemName,
} from './MyPageDetailMainStyles'
import useAsync from '../../hooks/useAsync'

const MyPageDetailMain = ({ paramsId }) => {
  const [id, setId] = useState('')
  const [itemName, setItemName] = useState('')

  const { response, requestData: getOrderItem } = useAsync({
    urlDetail: `/order/${paramsId}`,
  })

  useEffect(() => {
    if (response) {
      setId(response?.id)
      setItemName(response?.itemName)
    }
  }, [response])

  useEffect(() => {
    getOrderItem(paramsId)
  }, [paramsId])

  return (
    <Container>
      <OrderItem>
        <ItemId>{id}</ItemId>
        <ItemName>{itemName}</ItemName>
      </OrderItem>
    </Container>
  )
}

export default React.memo(MyPageDetailMain)
