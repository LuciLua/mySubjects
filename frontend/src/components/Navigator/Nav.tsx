import styles from "./index.module.scss"

function Navigator(props: any) {

    const { table, form } = props

    return (
        <>
            <div className={styles.navigatorContainer}>

                <ul className={styles.navigator}>
                    <li>
                        <a>table</a>
                    </li>
                    <li>
                        <a>form</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigator