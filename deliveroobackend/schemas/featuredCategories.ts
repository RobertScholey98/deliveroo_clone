import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featuredCategories',
  title: 'Featured categories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Featured category title',
      type: 'string',
    }),
    defineField({
        name: 'description',
        title: 'Short description',
        type: 'string',
        validation: (Rule) => Rule.max(100)
      }),
    defineField({
      name: 'restaurants',
      title: 'featured restaurants',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'restaurant' }] }],
    }),
  ],
})
