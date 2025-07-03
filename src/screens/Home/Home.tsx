import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { About, SearchResult, LoadTime, Pagination } from 'src/components'
import { getResultsForPage, totalPages, searchResults } from 'src/content'

const about = (
  <svg
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={styles.about}
  >
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
  </svg>
)

import styles from './Home.module.scss'

export const Home: NextPage = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    // Only access router properties when router is available and ready
    if (router && router.isReady) {
      const page = parseInt(router.query.page as string) || 1
      setCurrentPage(page)
    }
  }, [router]) // Depend on the entire router object

  const currentResults = getResultsForPage(currentPage)
  
  return (
    <div className={styles.container}>
      <LoadTime count={searchResults.length} />
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.headshot}>
            <Image
              src="/images/headshot.png"
              alt="profile picture"
              height={56}
              width={56.1}
            />
          </div>
          <div className={styles.name}>
            <h2>Angus Macapella {about}</h2>
            <p>South African Software Engineer {about}</p>
          </div>
        </div>
        <div className={styles.divider} />
      </div>
      <div className={styles.content}>
        <div className={styles.results}>
          <About />
          {currentResults.map((result) => (
            <SearchResult {...result} key={result.title} />
          ))}
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            totalResults={searchResults.length}
          />
        </div>
        <div className={styles.info}>
          <About />
        </div>
      </div>
    </div>
  )
}
