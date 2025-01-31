import Image from 'next/image'
import { SearchLink } from 'src/components'
import styles from './VideoResult.module.scss'

interface Video {
  id: string
  title: string
  description: string
  uploadDate: string
}

interface Props {
  video: Video
}

export const VideoResult: React.FC<Props> = ({ video }) => {
  return (
    <div className={styles.container}>
      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.link}>
          <SearchLink link={`https://www.youtube.com/watch?v=${video.id}`} />
          <h3 className={styles.title}>{video.title}</h3>
        </div>
      </a>
      <div className={styles.content}>
        <div className={styles.thumbnail}>
          <Image
            src={`https://i1.ytimg.com/vi/${video.id}/mqdefault.jpg`}
            alt="thumbnail"
            fill
          />
        </div>
        <div className={styles.description}>
          <h4 className={styles.mobile}>{video.title}</h4>
          <p className={styles.text}>{video.description}</p>
          <p className={styles.stats}>
            <span>YouTube</span> · Angus Mac · {video.uploadDate}
          </p>
        </div>
      </div>
    </div>
  )
}
