import { Provider } from 'react-redux'
import Store from '../Store'

import '../styles/globals.css'
/* toastify */
import 'react-toastify/dist/ReactToastify.css';
/* Sslick carousel */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App({ Component, pageProps }) {

  return (
    <Provider store={Store} >
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
