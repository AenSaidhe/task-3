import styles from './numbers.module.css'
export default function Operands ({ oper, handleOperand }) {
    return (
        <div className={styles['numbers-container']}>
            {
                oper.map(item => (
                    <button onClick={() => handleOperand(item)} key={item} className={styles['numbers-container__number']} >{ item }</button>
                ))
            }
        </div>
    )
}