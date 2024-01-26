import { ComponentProps } from 'react'
import { Friend, SocialProfile } from 'src/components'
import { elon, orion, github, instagram, mark, pat, linkedin } from './b64'

type Profile = ComponentProps<typeof SocialProfile>

export const profiles: Profile[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/AMACAFELLA/',
    src: github,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/angus-macapella/',
    src: linkedin,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/macafella_/',
    src: instagram,
  },
]

type Friends = ComponentProps<typeof Friend>[]

export const friends: Friends = [
  {
    src: orion,
    name: 'Orion Macapella',
    label: 'Former Child Star',
    url: 'https://www.linkedin.com/in/orionmac/',
  },
  {
    src: pat,
    name: 'Patricia Ojijo',
    label: 'My Therapist',
    url: 'https://www.linkedin.com/in/patricia-ojijo/',
  },
  {
    src: mark,
    name: 'Mark Zuckerberg',
    label: 'MMA Sparring Partner',
    url: 'https://www.google.com/search?q=mark+zuckerberg&sca_esv=601415381&sxsrf=ACQVn0_htCyKsvIUI6ZenB52Dm6rvSoW8g%3A1706191279591&ei=r2myZaTaI_TYhbIP1JWMwAI&gs_ssp=eJzj4tTP1TewMEvJqzRg9OLPTSzKVqgqTc5OLUpKLUoHAHpvCVE&oq=mark+&gs_lp=Egxnd3Mtd2l6LXNlcnAiBW1hcmsgKgIIADIKEC4YgAQYigUYJzIKEC4YgAQYigUYJzIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIKEC4YgAQYigUYQzIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIXEC4YgAQYigUYlwUY3AQY3gQY3wTYAQNIqxhQzwhY3A5wAXgBkAEAmAHiAqABsQyqAQUyLTIuM7gBAcgBAPgBAcICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgINEC4YgAQYigUYQxiwA8ICDhAAGOQCGNYEGLAD2AEBwgITEC4YgAQYigUYQxjIAxiwA9gBAsICChAjGIAEGIoFGCfCAgsQLhiABBjHARjRA8ICBBAAGAPCAgsQABiABBixAxiDAcICEBAAGIAEGIoFGEMYsQMYgwHCAhAQLhiABBiKBRhDGMcBGNED4gMEGAAgQYgGAZAGEroGBggBEAEYCboGBggCEAEYCLoGBggDEAEYFA&sclient=gws-wiz-serp',
  },
  {
    src: elon,
    name: 'Elon Musk',
    label: 'A Twitter User',
    url: 'https://www.google.com/search?q=elon+musk&sca_esv=601415381&sxsrf=ACQVn0-qmCptAOINmV6PaiH9TwCCm5_1Xg%3A1706191274756&source=hp&ei=qmmyZf2gLLivhbIPvdaKsA4&iflsig=ANes7DEAAAAAZbJ3ujVfaDWQNtCVve_Z1QDQwvzbClzM&gs_ssp=eJzj4tTP1TcwzqtKMzRg9OJMzcnPU8gtLc4GAEjMBtM&oq=Elon+&gs_lp=Egdnd3Mtd2l6IgVFbG9uICoCCAAyChAuGIAEGIoFGCcyDRAAGIAEGIoFGEMYsQMyDRAAGIAEGIoFGEMYsQMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyEBAAGIAEGIoFGEMYsQMYgwEyDRAAGIAEGIoFGEMYsQMyDhAAGIAEGIoFGLEDGIMBMgUQABiABDIFEAAYgARIuBJQAFjJBnAAeACQAQCYAboGoAHJD6oBBzItNC42LTG4AQHIAQD4AQHCAgoQIxiABBiKBRgnwgIKEC4YgAQYigUYQ8ICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQM&sclient=gws-wiz',
  },
]
