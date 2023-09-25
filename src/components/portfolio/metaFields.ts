function createUrl(slug: string) {
  return `https://github.com/mhborthwick/${slug}`
}

export interface MetaField {
  id: number
  title: string
  description: string
  technologies: string[]
  demo: string | null
  source: string
}

const metaFields: MetaField[] = [
  {
    id: 5,
    title: 'SongBook',
    description: 'Share your favorite song for a future visitor.',
    technologies: [
      'JavaScript / TypeScript',
      'Next.js',
      'React',
      'Express',
      'Zod',
      'MongoDB'
    ],
    demo: 'https://songbook.up.railway.app',
    source: createUrl('songbook')
  },
  {
    id: 4,
    title: 'AWA Monitoring',
    description:
      "A platform monitoring service for me and my partner's online store.",
    technologies: ['Golang', 'InfluxDB', 'Grafana', 'Amazon Web Services'],
    demo: null,
    source: createUrl('awa-monitoring')
  },
  {
    id: 3,
    title: 'lorem-intl',
    description:
      'NPM package to generate Lorem Ipsum and placeholder text in multiple languages.',
    technologies: ['JavaScript / TypeScript', 'NPM', 'Jest', 'GitHub Actions'],
    demo: null,
    source: createUrl('lorem-intl')
  },
  {
    id: 2,
    title: 'Connect 4',
    description: 'A simple Connect 4 implementation in TypeScript.',
    technologies: [
      'JavaScript / TypeScript',
      'Express',
      'Webpack',
      'Jest',
      'Cypress'
    ],
    demo: 'https://mhborthwick.github.io/connect4/',
    source: createUrl('connect4')
  },
  {
    id: 1,
    title: 'My Blogfolio',
    description: 'The source of this website.',
    technologies: ['JavaScript / TypeScript', 'React', 'Chakra-UI', 'Vite'],
    demo: null,
    source: createUrl('blogfolio')
  }
]

export default metaFields
