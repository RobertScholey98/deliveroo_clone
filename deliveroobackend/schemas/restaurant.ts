import {defineField, defineType} from 'sanity'

type Title = string;

type Address = {
  nameNum: string | number;
  street: string;
  postcode: string;
};

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant address',
      type: 'object',
      fields: [
        { type: 'string', name: 'nameNum' },
        { type: 'string', name: 'street' },
        { type: 'string', name: 'town' },
        { type: 'string', name: 'postcode' },
        { type: 'number', name: 'latitude' },
        { type: 'number', name: 'longditude'}
      ],
    }),
    defineField({
      name: 'image',
      title: 'display image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Short description (max 200 characters)',
      type: 'string',
      validation: (Rule) => Rule.max(200)
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'dish'}}],
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating from 1 - 5',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('rating must be between 1 and 5')
    }),
  ],
})
