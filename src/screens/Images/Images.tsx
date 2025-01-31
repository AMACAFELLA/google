import { NextPage } from 'next'
import Image from 'next/image'
import { images } from 'src/content'

import styles from './Images.module.scss'

export const Images: NextPage = () => {
  return (
    <div className={styles.container}>
      {images.map((id) => (
        <div className={styles.block} key={id}>
          <a
            href={`https://unsplash.com/photos/${id}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.image}>
              <Image
                src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2864&q=80`} // Match your example URL
                alt="photography image"
                fill
                priority
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}
