export default {
  title: 'Call to Action Button',
  name: 'callToActionButton',
  type: 'object',
  fields: [
    {
      title: 'Open in new tab',
      name: 'openInNewTab',
      type: 'boolean',
    },
    {
      title: 'Call To Action Button Text',
      name: 'callToActionButtonText',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      placeholder: 'https://youtube.com/link',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'href'],
        }),
    },
  ],
}
