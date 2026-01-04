export default {
  title: 'Content',
  name: 'simple',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Heading 1', value: 'h1'},
        {title: 'Heading 2', value: 'h2'},
      ],
      lists: [],
      options: {
        spellCheck: true,
      },
      marks: {
        decorators: [{title: 'Strong', value: 'strong'}],
        annotations: [],
      },
    },
  ],
}
