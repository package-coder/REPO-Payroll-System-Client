import { ThemeProvider as  MuiThemeProvider, createTheme } from '@mui/material/styles';

import React from 'react'

const ThemeProvider = (props) => {
    const { children } = props
    const theme = createTheme({
        palette: {
            primary: {
                main: '#197FFA'
            },
            text: {
                primary: '#172B4D',
                secondary: '#AAB2BF'
            },
            secondary: {
                main: '#AAB2BF',
            },
            background: {
                paper: '#FAFBFC'
            }
        },
        typography: {
            fontFamily: 'Inter'
        }
    });

  return (
    <MuiThemeProvider theme={theme}>
        {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider

