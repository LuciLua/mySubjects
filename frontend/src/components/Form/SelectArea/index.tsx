import styles from "./index.module.scss"

interface SelectAreaProps {
    name: string,
    options: Array<any>,
    onChangeAddValue?: any,
    value?: string
}

function SelectArea(props: SelectAreaProps) {

    const { options, onChangeAddValue, name } = props
    
    return (
        <div className={styles.selectArea}>
            <label htmlFor="options">Date</label>
            <select name="options" onChange={onChangeAddValue} id={name} className={styles.selectArea}>
                {options.map(o => {
                    return (
                        <option key={o} value={o}>{o}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default SelectArea