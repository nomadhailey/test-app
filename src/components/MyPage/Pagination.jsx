import React from 'react'
import { Container, PageList, PageNumber } from './PaginationStyles'

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPages); i++) {
    pageNumbers.push(i)
  }

  return (
    <Container>
      <PageList>
        {pageNumbers.map((page) => (
          <PageNumber
            key={page}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage && 'active'}>
            {page}
          </PageNumber>
        ))}
      </PageList>
    </Container>
  )
}

export default React.memo(Pagination)
