import styles from "./index.module.scss"

// import { useDestiny } from "../../contexts/subjectsContexts"

function Navigator({ click, dest }) {

    // const { destiny, setDestiny } = useDestiny()

    return (
        <>
            <div className={styles.navigatorContainer}>
                <ul className={styles.navigator}>
                    <li onClick={click}>
                        {dest}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigator