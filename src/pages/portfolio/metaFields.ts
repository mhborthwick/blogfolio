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
    id: 1,
    title: 'My Blogfolio',
    description: 'The source of this website.',
    technologies: ['JavaScript / TypeScript', 'React', 'Chakra-UI', 'Vite'],
    demo: null,
    source: createUrl('blogfolio')
  }
]

export default metaFields
