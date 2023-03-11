import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'global',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'site_title',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
        name: 'site_description',
        title: 'Site Description',
        type: 'text',
    }),
    defineField({
        name: 'site_image',
        title: 'Site Image',
        type: 'image',
        description: "Recommended Image Dimensions: 1200x630"
    })           
  ]
})
