import styles from "./index.module.scss"

// import { useDestiny } from "../../contexts/subjectsContexts"

interface NavigatorProps {
    click: any,
    dest: string
}

function Navigator({ click, dest }: NavigatorProps) {

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