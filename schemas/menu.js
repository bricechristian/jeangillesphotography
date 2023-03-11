import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Menus',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }), 
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),       
    defineField({
        type: 'array',
        name: 'menuItems',
        title: 'Menu Items',
        of: [
          defineArrayMember({type: 'menuItem'})
        ]
    }) 
  ],

  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
