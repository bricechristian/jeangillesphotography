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
    }),
    defineField({
      type: 'object',
      name: 'social_links',
      fieldsets: [
        {
          name: 'social', 
          title: 'Social Links',
          options: {
            collapsible: false, // Makes the whole fieldset collapsible
            collapsed: false, // Defines if the fieldset should be collapsed by default or not
            modal: {type: 'popover'} //Makes the modal type a popover
          }
        }
      ],
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string'
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
          validation: Rule => Rule.uri({
            scheme: ['http', 'https']
          })
        }
      ]
    })                 
  ]
})
