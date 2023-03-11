import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'menuItem',
  title: 'Menu Item',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
    }),
    defineField({
      name: 'link',
      type: 'object',
      title: 'Link',
      fields: [
        {
          title: 'External Link?',
          name: 'externalLink',
          type: 'boolean'
        },        
        {
          name: 'external_link',
          type: 'url',
          title: 'URL',
          validation: Rule => Rule.uri({
            scheme: ['http', 'https', 'mailto', 'tel']
          }),
          description: "Prefix URLs with \"http:\/\/\", \"https:\/\/\", \"mailto:\" or \"tel:\"",
          hidden: ({ parent, value }) => !parent?.externalLink
        },
        {
          name: 'internal_link',
          type: 'reference',
          to: [{ type: 'page' }, { type: 'photography' }],
          hidden: ({ parent, value }) => parent?.externalLink,
          options: {
            disableNew: true,
          }
        }
      ]
    })
  ]
})
