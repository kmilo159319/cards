import '../src/styles/index.css'
import type { AppProps } from 'next/app'
import '../src/styles/UI/atoms/buttons.scss'
import '../src/styles/UI/organisms/cardsbody.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
