import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { GlobalStyle } from '../styles/globalStyle'

import { AuthContextProvider } from '../contexts/AuthContext'


export default function MyApp({ Component, pageProps }) {


  return (
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </AuthContextProvider>
      </ThemeProvider>
  )
}