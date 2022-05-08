import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/global/global'

import { Light, Dark } from '../styles/theme'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Dark}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
