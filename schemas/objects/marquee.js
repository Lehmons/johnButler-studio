export default {
  name: 'marquee',
  title: 'Marquee',
  type: 'object',
  fields: [
    {
      name: 'marqueeLogos',
      title: 'Marquee Logos',
      type: 'array',
      of: [{type: 'marqueeLogo'}],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Marquee`,
      }
    },
  },
}
