import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({pages, currentPage, keyword = ""}) => {
  return (
    pages > 1 && (
        <Pagination className='justify-content-center'>
            {[...Array(pages).keys()].map((x) => (
                <LinkContainer 
                key={x + 1} 
                to={keyword 
                        ? `/transactions/search/${keyword}/page/${x + 1}` 
                        : `/transactions/${x + 1}`}>
                    <Pagination.Item active={x + 1 === currentPage}>{x + 1}</Pagination.Item>
                </LinkContainer>
            ))}
        </Pagination>
    )
  )
}

export default Paginate