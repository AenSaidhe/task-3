import styles from './output.module.css'
export default function Output ({ num1, num2, operand, handleResult, result }) {
    handleResult()
    return (
        <div className={ styles.output }>
            <p>{ num1 } { operand } { num2 }</p>
            <p>{ result }</p>
        </div>
    )
}