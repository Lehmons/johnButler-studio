export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      type: 'array',
      name: 'menu',
      title: 'Menu',
      of: [
        {
          type: 'reference',
          to: [{type: 'menuItem'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title ? title : 'Menu',
      }
    },
  },
}
