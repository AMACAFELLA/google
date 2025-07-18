import { Skill } from 'src/types'

export const HISTORY_LENGTH = 15

const pad = (arr: number[]) =>
  new Array(HISTORY_LENGTH - arr.length).fill(0).concat(arr)

export const skills = [
  {
    symbol: 'TS',
    name: 'TypeScript',
    type: 'LANGUAGE',
    category: 'FRONTEND',
    history: [0, 0, 8, 20, 34, 55, 58, 70, 85, 91, 89, 93, 95, 93],
  },
  {
    symbol: 'JS',
    name: 'JavaScript',
    type: 'LANGUAGE',
    category: 'FRONTEND',
    history: [10, 20, 20, 35, 56, 57, 58, 72, 71, 70, 77, 78, 76, 74],
  },
  {
    symbol: 'PY',
    name: 'Python',
    type: 'LANGUAGE',
    category: 'BACKEND',
    history: [4, 8, 22, 35, 50, 48, 45, 50, 73, 71, 78, 64, 66, 68, 69],
  },
  {
    symbol: 'JAVA',
    name: 'Java',
    type: 'LANGUAGE',
    category: 'BACKEND',
    history: [0, 0, 32, 37, 42, 40, 38, 35, 50, 47, 44, 40, 37, 50],
  },
  {
    symbol: 'REACT',
    name: 'React',
    type: 'FRAMEWORK',
    category: 'FRONTEND',
    history: [1, 10, 40, 37, 32, 55, 50, 80, 78, 73, 92, 91, 95, 96],
  },
  {
    symbol: 'RN',
    name: 'React Native',
    type: 'FRAMEWORK',
    category: 'MOBILE',
    history: [0, 0, 0, 5, 32, 50, 67, 53, 52, 50, 48, 74, 70, 86],
  },
  {
    category: 'FRONTEND',
    name: 'NextJS',
    symbol: 'NEXT',
    type: 'FRAMEWORK',
    history: [0, 49, 52, 63, 72, 70, 71, 72, 73, 76],
  },
  {
    category: 'BACKEND',
    name: 'Express',
    symbol: 'EXP',
    type: 'FRAMEWORK',
    history: [0, 4, 32, 25, 29, 24, 50, 56, 54, 52, 62, 66, 72],
  },
  {
    category: 'BACKEND',
    name: 'Prisma',
    symbol: 'PSMA',
    type: 'FRAMEWORK',
    history: [0, 34, 50, 57, 65],
  },
  {
    category: 'BACKEND',
    name: 'NestJS',
    symbol: 'NEST',
    type: 'FRAMEWORK',
    history: [0, 10, 32, 45, 60, 80, 82, 86, 84],
  },
  {
    category: 'FRONTEND',
    name: 'Tailwind CSS',
    symbol: 'TW',
    type: 'FRAMEWORK',
    history: [0, 0, 20, 35, 50, 65, 70, 75, 80, 85, 88, 90, 92, 94, 96],
  },
  {
    category: 'FRONTEND',
    name: 'Three.js',
    symbol: '3JS',
    type: 'FRAMEWORK',
    history: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 45, 60, 75, 85],
  },
  {
    category: 'FRONTEND',
    name: 'Zustand',
    symbol: 'ZUS',
    type: 'TOOL',
    history: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 55, 70, 80],
  },
  {
    category: 'FRONTEND',
    name: 'Vite',
    symbol: 'VITE',
    type: 'TOOL',
    history: [0, 0, 0, 0, 0, 0, 0, 0, 20, 35, 50, 65, 75, 80, 85],
  },
  {
    category: 'BACKEND',
    name: 'Bolt.new',
    symbol: 'BOLT',
    type: 'TOOL',
    history: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 90],
  },
  {
    category: 'BACKEND',
    name: 'Perplexity API',
    symbol: 'PERP',
    type: 'TOOL',
    history: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 85],
  },
  {
    category: 'BACKEND',
    name: 'Firecrawl API',
    symbol: 'FIRE',
    type: 'TOOL',
    history: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 75],
  },
  {
    category: 'BACKEND',
    name: 'Tavus API',
    symbol: 'TAV',
    type: 'TOOL',
    history: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 70],
  },
  {
    category: 'BACKEND',
    name: 'Dodo Payments',
    symbol: 'DODO',
    type: 'TOOL',
    history: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 65],
  },
  {
    category: 'DATABASE',
    name: 'PostgreSQL',
    symbol: 'PSQL',
    type: 'TOOL',
    history: [10, 21, 24, 22, 26, 30, 32, 40, 45, 50, 49, 48, 51, 55],
  },
  {
    category: 'DATABASE',
    name: 'MySQL',
    symbol: 'MSQL',
    type: 'TOOL',
    history: [8, 25, 30, 35, 50, 56, 54, 57, 53, 52, 46, 43, 40, 45],
  },
  {
    category: 'DATABASE',
    name: 'MongoDB',
    symbol: 'MDB',
    type: 'TOOL',
    history: [14, 45, 60, 67, 64, 62, 56, 48, 42, 45, 46, 47, 43],
  },
  {
    category: 'PROTOCOL',
    name: 'GraphQL',
    symbol: 'GQL',
    type: 'TOOL',
    history: [20, 31, 37, 42, 46, 52, 60, 62, 71, 72, 74, 75, 76, 82],
  },
  {
    category: 'BACKEND',
    name: 'Kotlin',
    symbol: 'KT',
    type: 'LANGUAGE',
    history: [24, 39],
  },
  {
    category: 'BACKEND',
    name: 'PHP',
    symbol: 'PHP',
    type: 'LANGUAGE',
    history: [34, 46],
  },
  {
    symbol: 'ANG',
    name: 'AngularJS',
    type: 'FRAMEWORK',
    category: 'FRONTEND',
    history: [0, 15, 30, 45, 60, 65, 70, 72, 75, 78],
  },
  {
    symbol: 'NUXT',
    name: 'Nuxt.js',
    type: 'FRAMEWORK',
    category: 'FRONTEND',
    history: [0, 20, 35, 50, 62, 68, 72, 75],
  },
  {
    symbol: 'NET',
    name: '.NET',
    type: 'FRAMEWORK',
    category: 'BACKEND',
    history: [0, 25, 40, 55, 65, 70, 72],
  },
  {
    symbol: 'FB',
    name: 'Firebase',
    type: 'TOOL',
    category: 'DATABASE',
    history: [10, 25, 40, 55, 65, 70, 75, 78, 80],
  },
  {
    symbol: 'SB',
    name: 'Supabase',
    type: 'TOOL',
    category: 'DATABASE',
    history: [0, 20, 35, 50, 65, 70, 75, 80, 85, 88, 90, 92, 94, 95, 97],
  },
  {
    symbol: 'RDS',
    name: 'Redis',
    type: 'TOOL',
    category: 'DATABASE',
    history: [0, 15, 30, 45, 60, 70, 75, 78],
  },
  {
    symbol: 'DDB',
    name: 'DynamoDB',
    type: 'TOOL',
    category: 'DATABASE',
    history: [0, 20, 35, 50, 65, 70, 72],
  },
  {
    symbol: 'WP',
    name: 'WordPress',
    type: 'FRAMEWORK',
    category: 'FRONTEND',
    history: [15, 30, 45, 55, 60, 65, 68, 70],
  },
  {
    symbol: 'AMP',
    name: 'AWS Amplify',
    type: 'TOOL',
    category: 'FRONTEND',
    history: [0, 25, 40, 55, 65, 70, 75],
  },
  {
    symbol: 'VCL',
    name: 'Vercel',
    type: 'TOOL',
    category: 'FRONTEND',
    history: [0, 20, 35, 50, 65, 70, 75, 80, 82, 85, 87, 88, 90, 92, 94],
  },
  {
    symbol: 'NTL',
    name: 'Netlify',
    type: 'TOOL',
    category: 'FRONTEND',
    history: [0, 25, 40, 55, 65, 70, 72, 75, 78, 80, 82, 84, 86, 88, 90],
  },
  {
    symbol: 'GCP',
    name: 'Google Cloud',
    type: 'TOOL',
    category: 'BACKEND',
    history: [0, 20, 35, 50, 65, 75, 80, 85],
  },
  {
    symbol: 'BDR',
    name: 'Amazon Bedrock',
    type: 'TOOL',
    category: 'BACKEND',
    history: [0, 30, 45, 60, 70, 75],
  },
  {
    symbol: 'AZR',
    name: 'Azure',
    type: 'TOOL',
    category: 'BACKEND',
    history: [0, 25, 40, 55, 65, 70],
  },
  {
    symbol: 'COG',
    name: 'Amazon Cognito',
    type: 'TOOL',
    category: 'BACKEND',
    history: [0, 30, 45, 60, 70, 75],
  },
  {
    symbol: 'S3',
    name: 'Amazon S3',
    type: 'TOOL',
    category: 'BACKEND',
    history: [0, 35, 50, 65, 75, 80, 85],
  },
].map((skill) => ({
  ...skill,
  history: pad(skill.history.map((value) => value + Math.random() * 3)),
}))

skills.sort((a, b) => b.history.at(-1) - a.history.at(-1))

export const skillsMap: Record<
  string,
  Skill & { data: { x: string; y: number }[] }
> = {}

export const languages: Skill[] = [],
  frameworks: Skill[] = [],
  services: Skill[] = [],
  tools: Skill[] = [],
  frontend: Skill[] = [],
  backend: Skill[] = [],
  frontendData: { x: number; y: number }[] = [],
  backendData: { x: number; y: number }[] = []

skills.forEach((skill) => {
  switch (skill.type) {
    case 'LANGUAGE':
      languages.push(skill)
      break
    case 'FRAMEWORK':
      frameworks.push(skill)
      break
    case 'TOOL':
      tools.push(skill)
      break
  }

  switch (skill.category) {
    case 'FRONTEND':
    case 'MOBILE':
      frontend.push(skill)
      break
    case 'BACKEND':
    case 'PROTOCOL':
    case 'DATABASE':
      backend.push(skill)
      break
  }

  if (
    skill.name === 'Python' ||
    skill.name === 'NextJS' ||
    skill.name === 'TypeScript' ||
    skill.name === 'JavaScript'
  )
    backend.push(skill)

  skillsMap[skill.name] = {
    ...skill,
    data: skill.history.map((y, i) => ({
      y,
      x: `${2018 + Math.floor((8 + i * 4) / 12)}-${((8 + i * 4) % 12)
        .toString()
        .padStart(2, '0')}-01`,
    })),
  }
})

for (let i = 0; i < HISTORY_LENGTH; i++) {
  let curr = 0
  frontend.forEach(({ history }) => (curr += history.at(i)))
  frontendData.push({ y: curr / frontend.length, x: i })

  curr = 0
  backend.forEach(({ history }) => (curr += history.at(i)))
  backendData.push({ y: curr / backend.length, x: i })
}

export const frontendDataRaw = skills
  .filter(({ category }) => category === 'FRONTEND')
  .map(({ history, name }) => ({
    id: name,
    data: history.map((y, x) => ({ x, y })),
  }))
  .reverse()

export const backendDataRaw = skills
  .filter(({ category }) => category === 'BACKEND')
  .map(({ history, name }) => ({
    id: name,
    data: history.map((y, x) => ({ x, y })),
  }))
  .reverse()

export const databaseDataRaw = skills
  .filter(({ category }) => category === 'DATABASE')
  .map(({ history, name }) => ({
    id: name,
    data: history.map((y, x) => ({ x, y })),
  }))
  .reverse()

export const protocolDataRaw = skills
  .filter(({ category }) => category === 'PROTOCOL')
  .map(({ history, name }) => ({
    id: name,
    data: history.map((y, x) => ({ x, y })),
  }))
  .reverse()

export const mobileDataRaw = skills
  .filter(({ category }) => category === 'MOBILE')
  .map(({ history, name }) => ({
    id: name,
    data: history.map((y, x) => ({ x, y })),
  }))
  .reverse()
