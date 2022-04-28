import styles from "./index.module.scss"

interface InputAreasProps {
    name: string,
    type?: string
}

function InputArea(props: InputAreasProps) {

    const { name, type = "text" } = props

    return (
        <div className={styles.inputArea}>
            <label htmlFor={name}>{name}</label>
            <input type={type} id={name} placeholder={name} />
        </div>
    )
}

export default InputArea