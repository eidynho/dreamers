import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { GlobalStyle } from '../styles/globalStyle'

import { AuthContextProvider } from '../contexts/AuthContext'


export default function MyApp({ Component, pageProps }) {


  return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Uma social media</title>
        </Head>
        <AuthContextProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </AuthContextProvider>
      </ThemeProvider>
  )
}