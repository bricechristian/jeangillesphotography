import {defineField, defineArrayMember, defineType} from 'sanity'

export const photographyGridType = defineType({
  type: 'object',
  name: 'photographyGrid',
  title: 'Photography Grid',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: Rule => Rule.required(),
      description: "Used for naming purposes"
    }),
    defineField({
      name: 'photographyGridItems',
      type: 'array',
      title: 'Grid Items',
      validation: Rule => Rule.required(),
      of: [
        defineArrayMember({type: 'photographyGridItem'})
      ]
    }),
  ],
})
