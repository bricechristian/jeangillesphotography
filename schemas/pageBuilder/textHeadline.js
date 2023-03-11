import {defineField, defineType} from 'sanity'

export const textHeadlineType = defineType({
  type: 'object',
  name: 'textHeadline',
  title: 'Text Headline',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
