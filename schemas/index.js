// schemas/index.js

import headingOneTwoThreeNormalSmall from './blocks/headingOneTwoThreeNormalSmall'
import simple from './blocks/simple'
import normal from './blocks/normal'

//Documents
import home from './documents/home'
import menu from './documents/menu'
import footer from './documents/footer'

//Objects

import imageBlock from './objects/imageBlock'
import textBlock from './objects/textBlock'
import imageTextBlock from './objects/imageTextBlock'
import singleImage from './objects/singleImage'
import marquee from './objects/marquee'
import marqueeLogo from './objects/marqueeLogo'
import menuItem from './objects/menuItem'
import footerLinks from './objects/footerLinks'
import callToActionButton from './objects/callToActionButton'

//Le export

export const schemas = [
  headingOneTwoThreeNormalSmall,
  simple,
  normal,
  home,
  menu,
  footer,
  textBlock,
  imageTextBlock,
  singleImage,
  marquee,
  marqueeLogo,
  imageBlock,
  menuItem,
  footerLinks,
  callToActionButton,
]
