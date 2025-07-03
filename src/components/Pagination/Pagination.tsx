import { useRouter } from 'next/router'
import styles from './Pagination.module.scss'

interface Props {
  currentPage: number
  totalPages: number
  totalResults: number
}

export const Pagination: React.FC<Props> = ({ currentPage, totalPages, totalResults }) => {
  const router = useRouter()

  // Don't show pagination if only one page
  if (totalPages <= 1) {
    return null
  }

  const handlePageChange = (page: number) => {
    if (page === 1) {
      router.push('/')
    } else {
      router.push(`/?page=${page}`)
    }
  }

  const getVisiblePages = () => {
    const pages = []
    const maxVisible = 10
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 6) {
        for (let i = 1; i <= 10; i++) {
          pages.push(i)
        }
      } else if (currentPage >= totalPages - 5) {
        for (let i = totalPages - 9; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        for (let i = currentPage - 5; i <= currentPage + 4; i++) {
          pages.push(i)
        }
      }
    }
    
    return pages
  }

  // Generate the correct number of "o"s based on total pages
  const generateGoogleLogo = () => {
    const baseOs = 2 // Minimum 2 "o"s like in original Google
    const additionalOs = Math.min(totalPages - 1, 8) // Max 8 additional "o"s
    const totalOs = baseOs + additionalOs
    
    const oElements = []
    for (let i = 0; i < totalOs; i++) {
      oElements.push(
        <span key={`o-${i}`} className={i % 2 === 0 ? styles.o1 : styles.o2}>
          o
        </span>
      )
    }
    
    return (
      <div className={styles.logo}>
        <span className={styles.g}>G</span>
        {oElements}
        <span className={styles.g}>g</span>
        <span className={styles.l}>l</span>
        <span className={styles.e}>e</span>
      </div>
    )
  }

  const visiblePages = getVisiblePages()

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        {generateGoogleLogo()}
        
        <div className={styles.pages}>
          {currentPage > 1 && (
            <button
              className={styles.prev}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          )}
          
          {visiblePages.map((page) => (
            <button
              key={page}
              className={`${styles.page} ${page === currentPage ? styles.active : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          
          {currentPage < totalPages && (
            <button
              className={styles.next}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
      
      <div className={styles.info}>
        <p>
          Page {currentPage} of about {totalResults.toLocaleString()} results
        </p>
      </div>
    </div>
  )
}