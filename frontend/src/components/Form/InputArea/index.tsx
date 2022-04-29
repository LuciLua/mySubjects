import styles from "./index.module.scss"

interface InputAreasProps {
    name: string,
    type?: string,
    onChangeAddValue?: any,
    value?: string,
    list?:string
}

function InputArea(props: InputAreasProps) {

    const { name, type = "text", onChangeAddValue, value, list } = props

    return (
        <div className={styles.inputArea}>
            <label htmlFor={name}>{name}</label>
            <input type={type} id={name} placeholder={name} onChange={onChangeAddValue} value={value} list={list}/>
        </div>
    )
}

export default InputArea