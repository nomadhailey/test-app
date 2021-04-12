import React, { useEffect, useState } from 'react'
import {
  Container,
  OrderItem,
  ItemId,
  ItemName,
} from './MyPageDetailComponentStyles'

const MyPageDetailComponent = ({ paramsId }) => {
  const [id, setId] = useState('')
  const [itemName, setItemName] = useState('')
  const getOrderItem = async () => {
    const url = `https://mycroft-test-api.herokuapp.com/order/${paramsId}`
    await fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const { id, itemName } = data
        setId(id)
        setItemName(itemName)
      })
  }

  useEffect(() => {
    getOrderItem(paramsId)
  }, [])
  return (
    <Container>
      <OrderItem>
        <ItemId>{id}</ItemId>
        <ItemName>{itemName}</ItemName>
      </OrderItem>
    </Container>
  )
}

export default MyPageDetailComponent
