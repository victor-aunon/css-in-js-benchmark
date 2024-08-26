import 'styled-components'

interface Colors {
  black: HexColor
  white: HexColor
  transparent: HexColor
  primaryColor: HexColor
  secondaryColor: HexColor
  textColor: HexColor
  titleColor: HexColor
  labelColor: HexColor
  placeholderColor: HexColor
  backgroundColor: HexColor
  textAlternativeColor: HexColor
  disabled: HexColor
  shadow: HexColor
  buttonHover: HexColor
  gray: HexColor
  success: HexColor
  danger: HexColor
  warning: HexColor
  homeBackgroundColor: HexColor
  calendarHighlight: HexColor
  item1: HexColor
  item2: HexColor
  item3: HexColor
  item4: HexColor
  item5: HexColor
  item6: HexColor
  actionColor: HexColor
  skeletonLightColor: HexColor
  skeletonDarkColor: HexColor
  admin?: HexColor
  therapist?: HexColor
  guardian?: HexColor
  patient?: HexColor
  reportColor10?: HexColor
  reportColor20?: HexColor
  reportColor30?: HexColor
  reportColor60?: HexColor
  reportColor100?: HexColor
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    fontFamily: string
    fontSizes: {
      huge: string
      heading: string
      title: string
      subTitle: string
      body: string
      small: string
    }
    fontWeights: {
      thin: number
      light: number
      normal: number
      bold: number
      extraBold: number
    }
    sizes: {
      none: string
      small: string
      medium: string
      big: string
      large: string
      xlarge: string
      xxlarge: string
    }
    radius: {
      fullRounded: string
      small: string
      medium: string
      big: string
    }
    colors: Colors
    boxShadows: {
      down: string
      downSmall: string
      left: string
      right: string
      downLeft: string
      downRight: string
      center: string
    }
    maxWidth: string
    transitions: {
      default: string
    }
    backgroundImage: string | undefined
  }
}
