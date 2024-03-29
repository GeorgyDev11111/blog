// import App from 'next/app'
import NextNProgress from "nextjs-progressbar"
import { SessionProvider } from "next-auth/react"

import "../styles/global/global.scss"

const nextNProgressParams = {
  color: "#1d89e9",
  startPosition: 0.3,stopDelayMs: 200,
  height: 3, showOnShallow: true
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
    <NextNProgress {...nextNProgressParams}/>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

// Раскомментируйте этот метод только в том случае, если
//  у вас есть требования к блокировке данных для
//  каждая страница вашего приложения. Это отключает возможность
//  выполнить автоматическую статическую оптимизацию, в результате чего каждая страница в вашем приложении
//  будет обработанным на стороне сервера. ( SSR )
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }


export default MyApp
