
import styles from './styles.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router';
const NAV = ['Home', 'About', 'Service', 'Team', 'Portfolio', 'Blog', 'Contact Us']
const NavBar = () => {
    const [active, setActive] = useState('Home')
    const { push } = useRouter()
    const onHandle = (item) => {
        setActive(item)
        push(item.toLowerCase())
    }
    return <div className={styles.container}>
        <h3>Student</h3>
        <div className={styles.nev}>
            {NAV.map((item) => {
                return <div key={item} onClick={() => onHandle(item)} className={item === active ? styles.active : styles.text}>{item}</div>
            })}
        </div>
    </div>
};
export default NavBar