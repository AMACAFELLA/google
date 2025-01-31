import Image from 'next/image'
import { ComponentProps } from 'react'
import { SearchResult } from 'src/components'

type Content = ComponentProps<typeof SearchResult>

export const searchResults: Content[] = [
  {
    title: 'San Antonio Regional Hospital | Web Developer Intern',
    description: (
      <>
        Designed and developed a patient education web/mobile app that increased
        learning compliance by 80%. Enhanced search functionality reducing
        bounce rate by 5% while implementing ADA-compliant features that
        improved engagement for visually-impaired users by 7%. Optimized
        performance to reduce page load time by 40%, boosting user engagement by
        25%.
      </>
    ),
    extras: <b>React, Node.js, Jest, Performance Optimization</b>,
    link: 'https://www.sarh.org/',
    image: (
      <Image
        src="https://sarhfiles.blob.core.windows.net/live/images/default-source/about-us/mission-bug417e9a01-44ef-4ef0-be45-36921e6e1338.jpg?sfvrsn=facaa391_3"
        alt="San Antonio Regional Hospital logo"
        priority
        fill
      />
    ),
  },
  {
    title: 'Power Changes Lives | Web Developer Intern',
    description: (
      <>
        Led team of 2 interns in website redesign using React/Node.js, improving
        user engagement. Developed Shopify store with Liquid template language
        and resolved 100% of IT tickets across departments. Implemented
        automation scripts with Python and Make.
      </>
    ),
    extras: <b>React, Node.js, Shopify, Liquid, Python</b>,
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
    title: 'Google Cloud Vertex AI Hackathon (Winner)',
    description: (
      <>
        Built AI agent processing 15% more queries than competitors. Integrated
        WeatherAPI, YouTube Data API, and Google Places API, increasing
        engagement by 25%. Deployed on Google Cloud Functions.
      </>
    ),
    extras: <b>Google Cloud, Vertex AI, API Integration</b>,
    link: 'https://devpost.com/software/garden-genie',
    image: (
      <Image
        src="https://ph-files.imgix.net/6adf2fe0-7df8-48f5-a41d-fede214924ad.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&frame=1&dpr=2"
        alt="Google Cloud logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'Sketch It! - AWS Game Builder Challenge Hackathon',
    description: (
      <>
        Developed AI-powered drawing game ranked #5 on Product Hunt. Integrated
        Claude 3.5 Sonnet for image analysis with 100% detection accuracy. Built
        with React, Tailwind, Node.js, and AWS serverless architecture.
      </>
    ),
    extras: <b>AWS, React, AI/ML, Serverless</b>,
    link: 'https://www.producthunt.com/posts/sketch-it',
    image: (
      <Image
        src="https://ph-files.imgix.net/7f3ac119-cf79-4e80-a936-78609e2aeb96.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&frame=1&dpr=2"
        alt="Sketch It! logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'WordLink - Reddit Games Hackathon',
    description: (
      <>
        Vocabulary trivia game integrating Reddit WebViews with Redis-powered
        leaderboards supporting 500+ concurrent players. Achieved #6 on Product
        Hunt with curated topic rotation system.
      </>
    ),
    extras: <b>Redis, TypeScript, Reddit API</b>,
    link: 'https://www.producthunt.com/posts/wordlink',
    image: (
      <Image
        src="https://ph-files.imgix.net/0f0f32ef-3e8b-4ed7-8950-7bd10f0fda1e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&frame=1&dpr=2"
        alt="WordLink logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'FitCheck AI - Google Gemini Hackathon',
    description: (
      <>
        Computer vision fashion assistant processing webcam feeds at 30 FPS.
        Integrated Pinterest/Gemini APIs with LangChain for NLP features. Ranked
        #18 on Product Hunt launch.
      </>
    ),
    extras: <b>Python, Computer Vision, Gemini API</b>,
    link: 'https://www.producthunt.com/posts/fitcheck-ai',
    image: (
      <Image
        src="https://ph-files.imgix.net/46ceefe3-0bfa-4dad-85ea-4b50094d7760.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&frame=1&dpr=2"
        alt="FitCheck AI logo"
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
        Fictional e-commerce store implemented using Next.js, Sanity, and Stripe
        for processing payments.
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
        I really enjoyed &quot;Across the Spider-Verse&quot; and was inspired to
        become my own version of Spider-Man. I implemented vanilla HTML, CSS,
        JavaScript, and Photoshop.
      </>
    ),
    extras: (
      <>
        <b>Frontend, Photoshop</b>
      </>
    ),
    link: 'https://portfolioverse.netlify.app',
  },
  {
    title: 'Hire Me | Software Engineer',
    description: (
      <>
        I created this simple but cute website to help those who do not have a
        portfolio website, using HTML, CSS, and JavaScript. This was inspired by
        an Instagram reel.
      </>
    ),
    extras: <b>Frontend</b>,
    link: 'https://hireme-xi.vercel.app/',
  },
  {
    title: 'Desktop Cleaner | Software Engineer',
    description: (
      <>
        Created a Python script using the Watchdog library that helps
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
        Admin dashboard app using React.js and Syncfusion. This admin panel
        includes one dashboard, three pages, four apps, and seven fully
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
