import React from 'react'
import { Container, PageList, PageNumber } from './PaginationStyles'

const Pagination = ({ totalPages, getOrderList, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPages); i++) {
    pageNumbers.push(i)
  }
  console.log('currentPage@@@@@', currentPage)

  return (
    <Container>
      <PageList>
        {pageNumbers.map((page) => (
          <PageNumber
            onClick={() => getOrderList(page)}
            className={page === currentPage + 1 && 'active'}>
            {page}
          </PageNumber>
        ))}
      </PageList>
    </Container>
  )
}

export default Pagination
