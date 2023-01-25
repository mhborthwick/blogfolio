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
    id: 2,
    title: 'Songbook',
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
    id: 1,
    title: 'My Blogfolio',
    description: 'The source of this website.',
    technologies: ['JavaScript / TypeScript', 'React', 'Chakra-UI', 'Vite'],
    demo: null,
    source: createUrl('blogfolio')
  }
]

export default metaFields
