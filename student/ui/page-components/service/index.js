import styles from './styles.module.css'
import Card from "./Card";
const Service=()=>{
    return  <div className={styles.container}>
    <div style={{ padding: '32px'}}/>
    <div className={styles.nav}>
        <h2 className={styles.head}>Services</h2>
        <div>Home / Services</div>
    </div> 
    <Card/>
    </div>
   
};
export default Service;