export default {
  title: 'Footer',
  name: 'footer',
  type: 'document',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'simple',
    },
    {
      title: 'Paragraph',
      name: 'paragraph',
      type: 'headingOneTwoThreeNormalSmall',
    },
    {
      name: 'contactLinks',
      title: 'Contact Links',
      type: 'array',
      of: [{type: 'footerLinks'}],
      placeholder: 'Phone number, email and address',
    },
    {
      type: 'string',
      name: 'company',
      title: 'Company',
      placeholder: 'John Butler 2026',
    },
    {
      type: 'string',
      name: 'terms',
      title: 'Terms',
      placeholder: 'All rights reserved',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title ? title : 'Footer',
      }
    },
  },
}
