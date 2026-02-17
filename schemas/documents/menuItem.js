import documentTypes from '../objects/documentTypes'

export default {
  title: 'Menu Item',
  name: 'menuItem',
  type: 'document',
  fields: [
    {
      name: 'subject',
      title: 'Subject',
      type: 'string',
      description: 'Title of a catagory',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subItems',
      title: 'Sub Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Display Title',
              type: 'string',
            },
            {
              name: 'targetSection',
              title: 'Target Section',
              type: 'reference',
              to: [{type: 'home'}],
              description: 'Which section should this link to?',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      subject: 'subject',
    },
    prepare({subject}) {
      return {
        title: subject || 'No subject defined',
      }
    },
  },
}
