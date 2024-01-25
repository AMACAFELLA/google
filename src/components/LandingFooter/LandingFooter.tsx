import classNames from 'classnames'
import styles from './LandingFooter.module.scss'
import { googleLeaf } from '../../content/b64'
import Image from 'next/image'

export const LandingFooter: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>South Africa</div>
      <div className={classNames(styles.row, styles.bottom)}>
        <div className={styles.content}>
          <a
            href="https://about.google/?utm_source=google-ZA&utm_medium=referral&utm_campaign=hp-footer&fg=1"
            rel="noopener noreferrer"
          >
            About
          </a>
          <a
            href="https://ads.google.com/intl/en_za/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
            rel="noopener noreferrer"
          >
            Advertising
          </a>
          <a
            href="https://smallbusiness.withgoogle.com/intl/en-ssa/?subid=za_en-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=za-en_GB-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u#!/"
            rel="noopener noreferrer"
          >
            Business
          </a>
          <a
            href="https://www.google.com/search/howsearchworks/?fg=1"
            rel="noopener noreferrer"
          >
            How Search Works
          </a>
        </div>
        <div className={styles.content}>
          <a
            className={styles.carbon}
            href="https://sustainability.google/"
            rel="noopener noreferrer"
          >
            <Image
              height={14}
              width={9}
              className={styles.image}
              src={googleLeaf}
              alt="leaf"
            />
            Carbon neutral since 2007
          </a>
        </div>
        <div className={styles.content}>
          <a
            href="https://policies.google.com/privacy?hl=en-ZA&fg=1"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
          <a
            href="https://policies.google.com/terms?hl=en-ZA&fg=1"
            rel="noopener noreferrer"
          >
            Terms
          </a>
          <span>Settings</span>
        </div>
      </div>
    </div>
  )
}
