// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import '../styles/globals.css'
import Footer from '../src/components/footer';
import Header from '../src/components/header';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="w-full grid justify-items-center mt-10">
        <div className="w-2/3">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MyApp
