import type { DefaultTheme } from 'styled-components'

const baseTheme: DefaultTheme = {
  name: "Base theme",
  fontFamily: 'Montserrat',
  fontSizes: {
    body: '1rem',
    subTitle: '1.1em',
    huge: '2.5em',
    heading: '1.5em',
    title: '1.2em',
    small: '0.8em',
  },

  fontWeights: {
    thin: 100,
    light: 300,
    normal: 400,
    bold: 600,
    extraBold: 800,
  },

  sizes: {
    none: '0',
    small: '0.5rem',
    medium: '1rem',
    big: '2rem',
    large: '3rem',
    xlarge: '5rem',
    xxlarge: '8rem',
  },

  radius: {
    fullRounded: '50%',
    small: '0.5rem',
    medium: '1rem',
    big: '2rem',
  },

  colors: {
    black: '#000',
    white: '#fff',
    transparent: 'transparent',
    gray: '#aaa',
    danger: '#eb5757',
    success: '#46c076',
    warning: '#f1b604',
    primaryColor: '#79bf79',
    secondaryColor: '#3c7e3c',
    textColor: '#566a7f',
    titleColor: '#566a7f',
    labelColor: '#566a7f',
    placeholderColor: '#444',
    backgroundColor: '#fff',
    textAlternativeColor: '#fff',
    disabled: '#ccc',
    shadow: '#cbcbcb',
    buttonHover: '#eaeaea',
    calendarHighlight: '#d5ebd5',
    item1: '#00B1D8',
    item2: '#F1B604',
    item3: '#A22A7E',
    item4: '#79BF79',
    item5: '#EC6A56',
    item6: '#345995',
    admin: '#C62828',
    therapist: '#2E7D32',
    guardian: '#0277BD',
    patient: '#212121',
    homeBackgroundColor: '#f6fbf7',
    actionColor: '#a22a7e',
    skeletonDarkColor: '#ececec',
    skeletonLightColor: '#f5f5f5',
    reportColor10: '#FF0000',
    reportColor20: '#FFA500',
    reportColor30: '#E8E84A',
    reportColor60: '#45BA6E',
    reportColor100: '#4DBAEC',
  },

  boxShadows: {
    down: '0em 0.5rem 0.7rem',
    downSmall: '0em 0.25rem 0.35rem',
    right: '0.5rem 0rem 0.7rem',
    left: '-0.5rem 0rem 0.7rem',
    downRight: '0.5rem 0.5rem 0.7rem',
    downLeft: '-0.5rem 0.5rem 0.7rem',
    center: '0rem 0rem 0.7rem',
  },

  maxWidth: '1400px',

  transitions: {
    default: '0.2s ease-in-out',
  },
  backgroundImage: null,
}

export default baseTheme
