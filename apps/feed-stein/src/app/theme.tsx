import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    mono: 'Poppins, sans-serif',
  },
  colors: {
    primary: {
      100: '#fa95a0',
      200: '#f98390',
      300: '#f87180',
      400: '#f76070',
      500: '#f64e60',
      600: '#dd4656',
      700: '#c53e4d',
      800: '#ac3743',
      900: '#942f3a',
    },
    secondary: {
      100: '#6dd4cf',
      200: '#54cdc7',
      300: '#3cc5bf',
      400: '#23beb7',
      500: '#0bb7af',
      600: '#0aa59e',
      700: '#09928c',
      800: '#08807a',
      900: '#076e69',
    },
  },
  components: {
    Input: {
      variants: {
        'solid-white': {
          backgroundColor: 'white',
          border: 'none',
          _focus: {
            border: 'none',
          },
        },
      },
    },
  },
});
