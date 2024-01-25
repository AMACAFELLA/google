import { LegacyRef, useRef, useCallback, useEffect } from 'react'
import {
  LandingHeader,
  Logo,
  SearchBar,
  LandingButton,
  LandingFooter,
} from 'src/components'
import { sleep } from 'src/utils'
import classNames from 'classnames'

import styles from './Landing.module.scss'

interface LandingProps {
  searchText: string
  searchRef: LegacyRef<HTMLInputElement>
  onSearchClick: VoidFunction
}

export const Landing: React.FC<LandingProps> = ({
  searchText,
  searchRef,
  onSearchClick,
}: LandingProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const search = useCallback(async () => {
    await sleep(300)
    buttonRef.current?.focus()
    await sleep(400)
    buttonRef.current?.click()
  }, [])

  const redirectToLucky = useCallback(() => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }, [])

  return (
    <div className={styles.container}>
      <LandingHeader />
      <div className={styles.landing}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <SearchBar searchRef={searchRef} searchText={searchText} landing />
        <div className={styles.buttons}>
          <LandingButton onClick={onSearchClick} buttonRef={buttonRef}>
            Google Search
          </LandingButton>
          <LandingButton onClick={redirectToLucky}>
            I&apos;m Feeling Lucky
          </LandingButton>
        </div>
        <div className={classNames(styles.row, styles.bottom)}>
          <div className={styles.content}>
            Google offered in:
            <a
              href="https://www.google.com/setprefs?sig=0_6gxbm4Wplq--sxFnHhzdnpizTg0%3D&hl=af&source=homepage&sa=X&ved=0ahUKEwiO7ZL7_viDAxViQUEAHcxyAZoQ2ZgBCBc"
              rel="noopener noreferrer"
            >
              Afrikaans
            </a>
            <a
              href="https://www.google.com/setprefs?sig=0_6gxbm4Wplq--sxFnHhzdnpizTg0%3D&hl=st&source=homepage&sa=X&ved=0ahUKEwiO7ZL7_viDAxViQUEAHcxyAZoQ2ZgBCBg"
              rel="noopener noreferrer"
            >
              Sesotho
            </a>
            <a
              href="https://www.google.com/setprefs?sig=0_6gxbm4Wplq--sxFnHhzdnpizTg0%3D&hl=zu&source=homepage&sa=X&ved=0ahUKEwiO7ZL7_viDAxViQUEAHcxyAZoQ2ZgBCBk"
              rel="noopener noreferrer"
            >
              isiZulu
            </a>
            <a
              href="https://www.google.com/setprefs?sig=0_6gxbm4Wplq--sxFnHhzdnpizTg0%3D&hl=xh&source=homepage&sa=X&ved=0ahUKEwiO7ZL7_viDAxViQUEAHcxyAZoQ2ZgBCBo"
              rel="noopener noreferrer"
            >
              IsiXhosa
            </a>
            <a
              href="https://www.google.com/setprefs?sig=0_6gxbm4Wplq--sxFnHhzdnpizTg0%3D&hl=tn&source=homepage&sa=X&ved=0ahUKEwiO7ZL7_viDAxViQUEAHcxyAZoQ2ZgBCBs"
              rel="noopener noreferrer"
            >
              Setswana
            </a>
            <a
              href="https://www.google.com/setprefs?sig=0_6gxbm4Wplq--sxFnHhzdnpizTg0%3D&hl=nso&source=homepage&sa=X&ved=0ahUKEwiO7ZL7_viDAxViQUEAHcxyAZoQ2ZgBCBw"
              rel="noopener noreferrer"
            >
              Northern Sotho
            </a>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  )
}
