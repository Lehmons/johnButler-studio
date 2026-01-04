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
          type: 'menuItem',
        },
      ],
    },
  ],
  preview: {
    prepare({}) {
      return {
        title: 'Menu',
      }
    },
  },
}
