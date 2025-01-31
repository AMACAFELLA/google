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
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <LoadTime count={videos.length} />
      <div className={styles.results}>
        {loading ? (
          <div className={styles.skeletonGrid}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.skeletonCard} />
            ))}
          </div>
        ) : (
          videos.map((video) => <VideoResult key={video.id} video={video} />)
        )}
      </div>
    </div>
  )
}
