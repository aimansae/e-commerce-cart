import { PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext, Pagination } from '@/components/ui/pagination'
import React from 'react'
import { PaginationProps } from '../types'

const PaginationComponent = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <Pagination className='my-2'>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious onClick={() => onPageChange(currentPage - 1)} />
      </PaginationItem>
      {Array.from({ length: totalPages }, (_, index) => (
        <PaginationItem key={index + 1}>
          <PaginationLink
            isActive={currentPage === index + 1}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationNext onClick={() => onPageChange(currentPage + 1)} />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
  )
}

export default PaginationComponent
