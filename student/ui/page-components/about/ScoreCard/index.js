import styles from './styles.module.css'
const ScoreCard=()=>{
    return <div className={styles.container}>
        <div>
            <div className={styles.count}>567</div>
        <p>Clients</p>
        </div>
        <div>
            <div className={styles.count}>877</div>
        <p>Projects</p>
        </div>
        <div>
            <div className={styles.count}>998</div>
        <p>Hours Of Support</p>
        </div>
        <div>
            <div className={styles.count}>67890</div>
        <p>Hard WSorker</p>
        </div>
    </div>
};
export default ScoreCard;