import Image from 'next/image'
import { ComponentProps } from 'react'
import { SearchResult } from 'src/components'

type Content = ComponentProps<typeof SearchResult>

export const searchResults: Content[] = [
  {
    title: 'San Antonio Regional Hospital | Web Design/Developer Intern',
    description: (
      <>
        On this week&apos;s episode of Grey&apos;s Antomy, I integrated
        ADA-compliant features and, as well as implement a web and mobile
        application for patient education video.
      </>
    ),
    extras: <b>Frontend, Backend, CMS</b>,
    link: 'https://www.sarh.org/',
    image: (
      <Image
        src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/312807862_797697458230537_3703828040525300332_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=y1T-UQebB7UAX-KduDI&_nc_ht=scontent-cpt1-1.xx&oh=00_AfAycdvvORJDkOKayG3No5DHYPJHldZahkkU-ticCA5ntw&oe=65B0B414"
        alt="San Antonio Regional Hospital logo"
        priority
        fill
      />
    ),
  },
  {
    title: 'Power Changes Lives | IT Web Design/Developer Intern',
    description: (
      <>
        I was promoted to Tech Lead and led two other interns on redesigning the
        company site with React and Node.js. I also worked with Shopify, Liquid,
        Python, Make automation, Microsoft Sharepoint, Microsoft Admin, and
        Ticketing Systems.
      </>
    ),
    extras: <b>Frontend, Backend, Admin</b>,
    link: 'https://www.powerchangeslives.com/',
    image: (
      <Image
        src="https://www.powerchangeslives.com/images/POWERLOGO10292021.png"
        alt="Power Changes Lives logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: "You're Wrong | Software Engineer",
    description: (
      <>
        I founded and published You&apos;re Wrong on Product Hunt, gaining 78
        followers and ranking #34 for the day. The project utilized React,
        TypeScript, MongoDB, Mongoose, Clerk auth, Next.js, and Vercel to create
        a responsive, secure, and efficient social network that provided an
        excellent user experience.
      </>
    ),
    extras: (
      <>
        <b>Deployment, Frontend, Backend</b>
      </>
    ),
    link: 'https://www.producthunt.com/products/you-re-wrong#you-re-wrong',
    image: (
      <Image
        src="https://ph-files.imgix.net/f22947fd-54dd-470c-9a38-b0afc9c875b3.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&bg=0fff&dpr=1"
        alt="Product Hunt logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'Macabeats | Software Engineer',
    description: (
      <>
        Fictional ecommerce store implemented using Next JS, Sanity and Stripe
        processing payment.
      </>
    ),
    extras: (
      <>
        <b> CMS, Frontend, Backend</b>
      </>
    ),
    link: 'https://macabeats.netlify.app/',
  },
  {
    title: 'Portfolio-Verse | Software Enigeer',
    description: (
      <>
        Really enjoyed Across the Spider-Verse and wanted to become my own
        version of Spider-Man. I implemented vanilla HTML, CSS, Javascript and
        PhotoShop.
      </>
    ),
    extras: (
      <>
        <b>Frontend, Photoshop</b>
      </>
    ),
    link: 'https://github.com/AMACAFELLA/Portfolio-Verse',
  },
  {
    title: 'Hire Me | Software Engineer',
    description: (
      <>
        Create this simple but cute website to help those who did not have a
        portfolio website, using HTML, CSS, Javascript. This was inspired but a
        instagram reel.
      </>
    ),
    extras: <b>Frontend</b>,
    link: 'https://github.com/AMACAFELLA/hire_me',
  },
  {
    title: 'Desktop Cleaner | Software Engineer',
    description: (
      <>
        Created a Python script using Watchdog library that helps to
        automatically clean up your desktop by moving files into folders named
        after their extensions in your Documents directory.
      </>
    ),
    extras: (
      <>
        <b>Backend</b>
      </>
    ),
    link: 'https://github.com/AMACAFELLA/desktop_cleaner',
  },
  {
    title: 'Macdashboard | Software Engineer',
    description: (
      <>
        Admin dashboard app using React.js and Syncfusion. This Admin Panel
        includes one Dashboard, Three Pages, Four Apps, and Seven fully
        functional charts!
      </>
    ),
    extras: (
      <>
        <b>Frontend</b>
      </>
    ),
    link: 'https://macadashboard.netlify.app/',
  },
]
