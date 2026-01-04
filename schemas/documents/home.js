export default {
  type: 'document',
  name: 'home',
  title: 'Home',
  fields: [
    {
      title: 'Blocks',
      name: 'blocks',
      type: 'array',
      of: [{type: 'singleImage'}, {type: 'textBlock'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      blocks: 'blocks.length',
    },
    prepare({title}) {
      return {
        title: title ? title : 'Home',
      }
    },
  },
}
