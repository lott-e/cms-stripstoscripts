import type { CollectionConfig } from 'payload/types'

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'posts', // required
      type: 'relationship', // required
      relationTo: 'posts', // required
      hasMany: true,
    },
    {
      name: 'title',
      type: 'text',
    },
  ],
}

export default Categories
