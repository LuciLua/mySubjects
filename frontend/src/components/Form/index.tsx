import { useState } from "react"
import axios from "axios"

import styles from "./index.module.scss"
import InputArea from "./InputArea"

function Table() {

    const [id, setId] = useState() 
    const [subject, setSubject] = useState() 
    const [teacher, setTeacher] = useState() 
    const [date, setDate] = useState() 

    function setData(data){
console.log("ola")
    }

    return (
        <>
            <form className={`defaultBlueContainers ${styles.submitForm}`}>
                <h1>Submit yours subjects</h1>
                <InputArea name="ID" />
                <InputArea name="Subject" />
                <InputArea name="Teacher" />
                <InputArea name="Date" />
                <div className={styles.buttonCollection}>
                    <button type="submit" onClick={setData}>Add</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </>
    )
}

export default Table