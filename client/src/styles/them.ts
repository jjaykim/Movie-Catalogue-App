import { createTheme, Theme, ThemeOptions } from '@material-ui/core/styles';

const theme = {
  overrides: {
    MuiCssBaseline: {
      '@global': {
        root: {
          display: 'flex',
        },
        body: {
          scrollBehavior: 'smooth',
          margin: 0,
          backgroundColor: '#303030',
          color: '#e5e5e5',
        },
        '.boldText': {
          fontWeight: '700 !important',
        },
        '.routerLink': {
          textDecoration: 'none',
          color: 'white',
        },
      },
    },
  },
} as ThemeOptions;

export const createAppTheme = (): Theme => {
  return createTheme(theme);
};
