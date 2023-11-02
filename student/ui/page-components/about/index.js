import styles from './styles.module.css'
import Card from './Card';
import ScoreCard from './ScoreCard';
import SkillsCard from './SkillsCard';
const About=()=>{
    return <div className={styles.container}>
        <div style={{ padding: '32px'}}/>
        <div className={styles.nav}>
            <h2 className={styles.head}>About Us</h2>
            <div>Home / About Us</div>
        </div>
        <Card/>
        <ScoreCard/>
        <SkillsCard/>
    </div>
};
export default About;