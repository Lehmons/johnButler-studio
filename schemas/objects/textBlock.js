export default {
  title: 'Text Block',
  name: 'textBlock',
  type: 'object',
  fields: [
    {
      title: 'Menu Category',
      name: 'menuCategory',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'menuItem'}],
        },
      ],
      description: 'Which menu section(s) should this appear under?',
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
      title: 'Sub Heading Color',
      name: 'subHeadingColor',
      type: 'string',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Blue', value: 'blue'},
          {title: 'Red', value: 'red'},
          {title: 'Orange', value: 'orange'},
        ],
        layout: 'dropdown',
      },
      description: 'Choose a color for the sub heading',
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
