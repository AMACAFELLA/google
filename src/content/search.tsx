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
        src="/images/san_antonio_regional_hospital_logo.jpeg"
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
    title: 'Kontent Kid - Perplexity Hackathon (AI Content Creation Assistant)',
    description: (
      <>
        Designed and built AI-powered content creation assistant that reduces YouTube content research and scripting time by up to 50%. Developed full-stack web app using React, TypeScript, Tailwind CSS, and Supabase with 95% uptime. Integrated Perplexity API for AI-driven research and content generation.
      </>
    ),
    extras: <b>React, TypeScript, Supabase, Perplexity API, AI Content Generation</b>,
    link: 'https://kontent-kid.vercel.app/',
    image: (
      <Image
        src="/favicon.png"
        alt="Kontent Kid logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'SponsorCheck - Bolt.new Hackathon (AI-Powered Sponsor Verification)',
    description: (
      <>
        Developed AI-powered platform protecting content creators from scams through data-driven sponsor legitimacy verification. Built with bolt.new, React, TypeScript, and Supabase. Integrated Firecrawl API and Perplexity AI for automated risk assessment, reducing manual vetting time by 60%.
      </>
    ),
    extras: <b>React, TypeScript, Supabase, Bolt.new, AI Integration, Web Scraping</b>,
    link: 'https://sponsorcheck.netlify.app/',
    image: (
      <Image
        src="/images/sponsorcheck_icon.png"
        alt="SponsorCheck logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'Fluendo - Bolt.new Hackathon (AI Language Learning Platform)',
    description: (
      <>
        Created AI-powered interactive language learning platform with gamified role-playing episodes. Developed with bolt.new, React, TypeScript, and Supabase. Integrated Tavus platform for real-time conversations and implemented robust gamification features including hearts, streaks, and leaderboards.
      </>
    ),
    extras: <b>React, TypeScript, Supabase, Zustand, Gamification, AI Integration</b>,
    link: 'https://devpost.com/software/fluendo?ref_content=user-portfolio&ref_feature=in_progress',
    image: (
      <Image
        src="/images/image.png"
        alt="Fluendo logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'Froggy Flight - Bolt.new Hackathon (Physics-Based Game)',
    description: (
      <>
        Conceived and developed unique physics-based game combining airplane piloting with strategic frog launching. Built using bolt.new's Three.js template with 8 distinct frog personalities. Implemented intricate physics for realistic bouncing and impact effects with stunning low-poly graphics.
      </>
    ),
    extras: <b>Game Design, Three.js, TypeScript, Bolt.new, Physics Simulation</b>,
    link: 'https://www.reddit.com/r/froggyflight/comments/1lba9dp/froggy_flight_launch_frogs_into_the_sky/',
    image: (
      <Image
        src="/images/frog-icon.png"
        alt="Froggy Flight logo"
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
]

// Pagination logic
export const RESULTS_PER_PAGE = 10
export const totalPages = Math.ceil(searchResults.length / RESULTS_PER_PAGE)

export const getResultsForPage = (page: number) => {
  const startIndex = (page - 1) * RESULTS_PER_PAGE
  const endIndex = startIndex + RESULTS_PER_PAGE
  return searchResults.slice(startIndex, endIndex)
}
