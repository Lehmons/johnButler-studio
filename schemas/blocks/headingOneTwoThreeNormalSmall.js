import documentTypes from '../objects/documentTypes.js'

export default {
  title: 'Content',
  name: 'headingOneTwoThreeNormalSmall',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Heading 1', value: 'h1'},
        {title: 'Heading 2', value: 'h2'},
        {title: 'Heading 3', value: 'h3'},
        {title: 'Heading 4', value: 'h4'},
        {title: 'Normal', value: 'normal'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [{title: 'Strong', value: 'strong'}],
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            fields: [
              {
                name: 'openInNewTab',
                type: 'boolean',
                title: 'Open In New Tab',
              },
              {
                name: 'externalLink',
                type: 'url',
                title: 'External Link',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                    allowRelative: false,
                  }),
              },
              {
                name: 'internalLink',
                type: 'reference',
                to: [{type: 'home'}],
              },
            ],
          },
        ],
      },
    },
  ],
}
