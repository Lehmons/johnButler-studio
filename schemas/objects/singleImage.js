export default {
  title: 'Single Image',
  name: 'singleImage',
  type: 'object',
  fields: [
    {
      title: 'Image ',
      name: 'image',
      type: 'imageBlock',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Call to action button',
      name: 'callToActionButton',
      type: 'callToActionButton',
    },
    {
      title: 'Line Breaker',
      name: 'lineBreaker',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'image.image.alt',
      media: 'image.image',
    },
  },
}
