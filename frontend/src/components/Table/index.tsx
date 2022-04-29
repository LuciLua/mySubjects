import styles from "./index.module.scss"

function Table(props:any) {

    const { subjects } = props

    return (
        <>
            <table className={`defaultBlueContainers ${styles.tableSubjects}`}>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Subject</th>
                        <th>Teacher</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map(subject => {
                        return (
                            <tr key={subject.id}>
                                <td>{subject.code}</td>
                                <td>{subject.subject}</td>
                                <td>{subject.teacher}</td>
                                <td>{subject.date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table