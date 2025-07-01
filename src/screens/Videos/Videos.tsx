import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { LoadTime, VideoResult } from 'src/components'
import styles from './Videos.module.scss'

interface Video {
  id: string
  title: string
  description: string
  uploadDate: string
}

export const Videos: NextPage = () => {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube')
        const data = await response.json()
        setVideos(data)
      } catch (error) {
        console.error('Failed to fetch videos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <div className={styles.loadingText}>
            Loading videos<span className={styles.loadingDots}></span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <LoadTime count={videos.length} />
      <div className={styles.results}>
        {videos.map((video) => (
          <VideoResult key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}
