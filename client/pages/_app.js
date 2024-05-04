import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
//redux
import { Provider } from 'react-redux'
import Store from '../Store'
import '../styles/globals.css'
/* toastify */
import 'react-toastify/dist/ReactToastify.css';
/* tooltip */
import 'react-tooltip/dist/react-tooltip.css'
/* Sslick carousel */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.API_URL}/graphql`,
  }),
  cache: new InMemoryCache()
})

function App({ Component, pageProps }) {
  return (
    <Provider store={Store} >
      <ApolloProvider client={client} >
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )
}

export default App
