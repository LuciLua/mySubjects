import Navigator from '../components/Navigator/Nav'
import '../styles/globals.scss'

import AreaProvider from '../contexts/subjectsContexts'

function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default App