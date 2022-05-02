import Icons from "./ActionIcons/Icons"
import styles from "./index.module.scss"

function Table(props: any) {

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
                        <th>Actions</th>
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
                                <td className={styles.actionsContainer}>
                                    <div className={`${styles.actionsBtn} ${styles.del}`}>
                                        <Icons icon="remove" />
                                    </div>
                                    <div className={`${styles.actionsBtn} ${styles.edit}`}>
                                        <Icons icon="edit" />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table