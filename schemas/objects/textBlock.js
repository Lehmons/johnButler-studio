export default {
  title: 'Text Block',
  name: 'textBlock',
  type: 'object',
  fields: [
    {
      title: 'Menu Category',
      name: 'menuCategory',
      type: 'string',
      options: {
        list: [
          {title: 'Service', value: 'service'},
          {title: 'About', value: 'about'},
          {title: 'Contact', value: 'contact'},
        ],
      },
      description: 'Which menu section should this appear under?',
    },
    {
      title: 'Section ID',
      name: 'sectionId',
      type: 'string',
      description: 'For anchor links (e.g., "Self hypnosis")',
    },

    {
      title: 'Heading',
      name: 'heading',
      type: 'simple',
    },
    {
      title: 'Sub Heading',
      name: 'subHeading',
      type: 'simple',
    },

    {
      title: 'Paragraph',
      name: 'paragraph',
      type: 'headingOneTwoThreeNormalSmall',
    },
    {
      title: 'Call to action button',
      name: 'callToActionButton',
      type: 'callToActionButton',
    },
    {
      title: 'Line Breaker',
      name: 'lineBreaker',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subHeading: 'subHeading',
      paragraph: 'paragraph',
    },
    prepare({heading, subHeading, paragraph}) {
      const headingText = heading?.[0]?.children?.[0]?.text
      const subHeadingText = subHeading?.[0]?.children?.[0]?.text
      const paragraphText = paragraph?.[0]?.children?.[0]?.text

      return {
        title: headingText || subHeadingText || paragraphText || 'No title defined',
      }
    },
  },
}
