import { createMuiTheme } from '@material-ui/core/styles';
import { dark } from '@material-ui/core/styles/createPalette';

const blue = '#004A80';
const slate = '#2B2B2B';
const lightBlue = '#00688E';
const white = '#EBEBEB';
const rust = '#8C403A';
const darkBlue = '#0A2A40';
const yellow = '#FBD85A';
const orange = '#FF2635';
const gray = '#8C8C8C';
const paleGreen = '#B0D9BD';

const bebasFont = 'Bebas Neue, sans-serif';
const nanumFont = 'Nanum Brush Script, cursive';
const shadowsFont = 'Shadows Into Light Two, cursive';
const comfortaaFont = 'Comfortaa, cursive';
const exoFont = 'Exo, sans-serif';
const hindFont = 'Hind Vadodara, sans-serif';
const inconsolataFont = 'Inconsolata, monospace';
const inriaFont = 'Inria Sans, sans-serif';
const lexendFont = 'Lexend Giga, sans-serif';
const merriweatherFont = 'Merriweather Sans, sans-serif';
const overpassFont = 'Overpass, sans-serif';
const poppinsFont = 'Poppins, sans-serif';

export default createMuiTheme({
  palette: {
    common: {
      blue: blue,
      lightBlue: lightBlue,
      paleGreen: paleGreen,
      slate: slate,
      gray: gray,
      white: white,
      rust: rust,
      darkBlue: darkBlue,
      yellow: yellow,
    },
    primary: {
      main: slate, // by only specifying a main color material-ui will auto generate light and dark versions to use
    },
    secondary: {
      main: orange, // by only specifying a main color material-ui will auto generate light and dark versions to use
    },
  },
  typography: {
    tab: {
      color: orange,
      fontSize: '1.2rem',
      fontWeight: '400',
      fontFamily: lexendFont,
    },
    name: {
      color: orange,
      fontSize: '1.5rem',
      fontWeight: '400',
    },
    h1: {
      letterSpacing: 5,
      fontSize: '5.6rem',
      lineHeight: 1.2,
      textAlign: 'center',
      color: orange,
      fontFamily: bebasFont,
       
    },
    h2: {
      fontSize: '5.6rem',
      lineHeight: 1.2,
      textAlign: 'center',
      color: orange,
      fontFamily: poppinsFont,
    },

    h3: {},
    h4: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    caption: {},
  },
  overrides: {
    MuiInputLabel: {
      root: {},
    },
    MuiInput: {
      root: {},
      underline: {
        '&:before': {},
        '&:hover:not($disabled):not($focused):not($error):before': {},
      },
    },
  },
});
