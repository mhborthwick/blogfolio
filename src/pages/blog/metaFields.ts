function createUrl (id: number, slug: string) {
  return `/blog/posts/${id}/${slug}`
}

export interface MetaField {
  id: number
  title: string
  description: string
  createdAt: Date
  url: string
}

const metaFields: MetaField[] = [
  {
    id: 1,
    title: 'Hello, World!',
    description: 'Hello, and welcome to my blogfolio!',
    createdAt: new Date(2022, 10, 11),
    url: createUrl(1, 'hello-world')
  }
]

export default metaFields
