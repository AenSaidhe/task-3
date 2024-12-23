import styles from './numbers.module.css';

export default function Numbers ({ setNum1, nums }) {
    return (
        <div className={styles["numbers-container"]}>
            {
                nums.map(num => (
                    <button onClick={() => setNum1( num) } key={num} className={styles['numbers-container__number']}>{num}</button>
                ))
            }
        </div>
    )
}