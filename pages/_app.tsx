import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{
      height: "100vh",
      background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
      padding: 12,
      display: "flex",
      flexDirection: "column",
    }}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
