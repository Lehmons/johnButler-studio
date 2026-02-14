export default {
  name: 'marqueeLogo',
  title: 'Marquee Logo',
  type: 'object',
  fields: [
    {
      title: 'Image ',
      name: 'image',
      type: 'imageBlock',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'image.image.alt',
      media: 'image.image',
    },
  },
}
