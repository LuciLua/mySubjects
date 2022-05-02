import Table from "../components/Table"
import Form from "../components/Form"

import styles from "../styles/home.module.scss"

import axios from "axios"
import { useEffect, useState } from "react"
// import AreaProvider, { useDestiny } from "../contexts/subjectsContexts"
import Navigator from "../components/Navigator/Nav"

async function getSubjects() {
    const BASE_URL = process.env.BASE_URL
    try {
        const resp = await axios.get(BASE_URL || 'https://localhost:3001/subjects')
        const data = await resp.data
        return data
    } catch (erro) {
        console.log("erro:", erro)
    }
}

export async function getStaticProps(ctx) {
    const subjects = await getSubjects()
    return {
        props: {
            subjects
        },
        revalidate: 10,
    }
}


function Home({ subjects }) {

    // const { destiny, setDestiny } = useDestiny()

    // Alternate state
    const [estado, setEstado] = useState("table")

    function changeState() {
        estado == "table" ? setEstado("form") : setEstado("table")
    }

    // Change visually the page
    function toggleAreas() {
        if (estado == "form") { return (<Form />) }
        if (estado == "table") { return (<Table subjects={subjects} />) }
    }

    return (
        <div className={styles.contentHome}>
            {/* <AreaProvider> */}

            <Navigator dest={estado} click={() => changeState()} />
            {toggleAreas()}

            {/* </AreaProvider> */}
        </div>
    )
}


export default Home