import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        Please star the repo, if you like it.{' '}
        <a href="" target="_blank" rel="noreferrer">
          Source Code
        </a>
        <br /> I'm not affiliated with Google. Please don&apos;t sue me, hire
        me.
      </div>
    </div>
  )
}
