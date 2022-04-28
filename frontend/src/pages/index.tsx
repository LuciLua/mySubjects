import Table from "../components/Table"
import Form from "../components/Form"

import styles from "../styles/home.module.scss"

import axios from "axios"
import { useEffect } from "react"


async function getSubjects() {
    try {
        const resp = await axios.get("http://localhost:3001/subjects")
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
        }
    }
}


function Home( props ) {

    const { subjects } = props

    useEffect(() => {
    })

    return (
        <div className={styles.contentHome}>
            <Table subjects={subjects} />
            <Form />
        </div>
    )
}


export default Home