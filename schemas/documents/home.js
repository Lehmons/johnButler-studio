export default {
  type: 'document',
  name: 'home',
  title: 'Home',
  fields: [
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'singleImage',
    },
    {
      title: 'Blocks',
      name: 'blocks',
      type: 'array',
      of: [{type: 'singleImage'}, {type: 'textBlock'}, {type: 'imageTextBlock'}],
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
