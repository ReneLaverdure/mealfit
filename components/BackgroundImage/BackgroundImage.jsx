import {CoverBackgroundImage} from './Background.styles.js'

export default function BackgroundImage({image, children}) {
  return (
    <CoverBackgroundImage image={image}>
        {children}
    </CoverBackgroundImage>
  )
}
