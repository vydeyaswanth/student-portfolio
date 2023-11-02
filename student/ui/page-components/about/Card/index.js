import styles from './styles.module.css'
const Card=()=>{
    return <div className={styles.container}>
        <div>
            <img src='https://bootstrapmade.com/demo/templates/Moderna/assets/img/about.jpg' width={620} alt=''/>
        </div>
        <div className={styles.text_box}>
            <h3 className={styles.title}>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className={styles.sub_heading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className={styles.ui}>
           <div className={styles.li}>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
           <div className={styles.li}>Duis aute irure dolor in reprehenderit in voluptate velit.</div>
           <div className={styles.li}>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</div>
        </div>
           <div>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        </div>
    </div>
};
export default Card;