import { friends, profiles } from 'src/content'
import { SocialProfile, Friend } from 'src/components'
import styles from './About.module.scss'

const globe = (
  <svg
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={styles.globe}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
  </svg>
)

export const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h4>About</h4>
        <div className={styles.website}>
          {globe}angus-macapella-google.vercel.app
        </div>
        <p className={styles.description}>
          Angus Macapella is a South African software engineer, web author, and
          businessman. He is currently located in <b>Cape Town, ZA,</b> ,
          freelancing creative projects. He is the Founder of You&apos;re Wrong
          and occasionally posts startup applications on Product Hunt. Angus is
          known for pioneering solutions and pushing the boundaries of
          what&apos;s possible in software engineering. He&apos;s just getting
          started in leaving an indelible mark on the future of technology.{' '}
        </p>
        <div className={styles.stat}>
          <span>Born: </span>July, 1996 (age{' '}
          {new Date(Date.now() - new Date(1996, 0o2).getTime()).getFullYear() -
            1970}{' '}
          years),{' '}
          <a
            href="https://www.google.com/search?q=cape+town&sca_esv=599792272&biw=1280&bih=634&sxsrf=ACQVn08lCKYhcJKz0p7EdS1upai176uH9w%3A1705670213800&ei=RXaqZZnCMLiThbIPo96VyAE&gs_ssp=eJzj4tDP1TcwrMwyMmD04kxOLEhVKMkvzwMAP7oGWQ&oq=cape+town&gs_lp=Egxnd3Mtd2l6LXNlcnAiCWNhcGUgdG93bioCCAAyEBAuGIAEGIoFGEMYsQMYgwEyCxAAGIAEGLEDGIMBMgoQABiABBiKBRhDMgsQABiABBixAxiDATIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIKEC4YQxiABBiKBTILEC4YrwEYxwEYgAQyBRAAGIAEMgsQABiABBixAxiDATIfEC4YgAQYigUYQxixAxiDARiXBRjcBBjeBBjgBNgBA0iFKFDtCVj2HXACeAGQAQGYAewGoAHpIqoBCTMtMi4yLjIuMrgBAcgBAPgBAcICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIOEAAY5AIY1gQYsAPYAQHCAhMQLhiABBiKBRhDGMgDGLAD2AECwgIEECMYJ8ICChAjGIAEGIoFGCfCAgoQLhiABBiKBRhDwgIOEAAYgAQYigUYsQMYgwHCAhQQLhiABBiKBRixAxiDARjHARjRA8ICEBAAGIAEGIoFGEMYsQMYgwHiAwQYACBBiAYBkAYSugYGCAEQARgJugYGCAIQARgIugYGCAMQARgU&sclient=gws-wiz-serp"
            target="_blank"
            rel="noreferrer"
          >
            Cape Town
          </a>
        </div>
        <div className={styles.stat}>
          <span>Height: </span>1.66 m
        </div>
        <div className={styles.stat}>
          <span>Education: </span>
          <a href="https://www.byui.edu/" target="_blank" rel="noreferrer">
            Brigham Young University-Idaho
          </a>{' '}
          (2023)
        </div>
        <div className={styles.stat}>
          <span>Net Worth: </span>$20.3 billion USD (2024)
          <a
            href="https://www.forbes.com/billionaires/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            delulu
          </a>{' '}
        </div>

        <div className={styles.border} />
      </div>
      <div className={styles.profiles}>
        <h4>Profiles</h4>
        <div className={styles.socials}>
          {profiles.map((profile) => (
            <SocialProfile {...profile} key={profile.label} />
          ))}
        </div>
        <div className={styles.border} />
      </div>
      <div className={styles.people}>
        <h4>People also search for</h4>
        <div className={styles.socials}>
          {friends.map((friend) => (
            <Friend {...friend} key={friend.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
