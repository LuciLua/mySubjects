import React, { useState } from "react"
import axios from "axios"

import styles from "./index.module.scss"
import InputArea from "./InputArea"
import SelectArea from "./SelectArea"

function Table() {

    const [code, setCode] = useState<string>("COD000")
    const [subject, setSubject] = useState<string>("Something")
    const [teacher, setTeacher] = useState<string>("Teacher")
    const [date, setDate] = useState<string>("Segunda")

    function setData() {
        return axios.post('http://localhost:3001/subjects', {
            code: code,
            subject: subject,
            teacher: teacher,
            date: date
        })

    }

    function addValue(e: any) {
        var valueInput = e.target.value
        var inputById = e.target.id

        console.log(date)

        switch (inputById) {
            case "Code":
                setCode(valueInput)
                break
            case "Subject":
                setSubject(valueInput)
                break
            case "Teacher":
                setTeacher(valueInput)
                break
            case "Date":
                setDate(valueInput)
                break
        }
    }

    return (
        <>
            <form className={`defaultBlueContainers ${styles.submitForm}`}>
                <h1>Submit yours subjects</h1>
                <InputArea name="Code" onChangeAddValue={addValue} />
                <InputArea name="Subject" onChangeAddValue={addValue} />
                <InputArea name="Teacher" onChangeAddValue={addValue} />
                <SelectArea name="Date" onChangeAddValue={addValue} options={["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]} />

                <div className={styles.buttonCollection}>
                    <button type="submit" onClick={setData}>Add</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </>
    )
}

export default Table