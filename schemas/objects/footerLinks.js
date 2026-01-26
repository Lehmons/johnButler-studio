export default {
  title: 'Footer Links',
  name: 'footerLinks',
  type: 'object',
  fields: [
    {
      title: 'Open in new tab',
      name: 'openInNewTab',
      type: 'boolean',
    },
    {
      title: 'Link Text',
      name: 'linkText',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      placeholder: 'https://youtube.com/link',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'href', 'tel'],
        }),
    },
  ],
}
