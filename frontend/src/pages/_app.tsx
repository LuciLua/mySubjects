import Navigator from '../components/Navigator/nav'
import '../styles/globals.scss'

function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Navigator paths={["form", "table"]} />
        </>
    )
}

export default App