import styles from './styles.module.css'
const data=[{
    icon:'',
    title:'Lorem Ipsum',
    description:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
},{
    icon:'',
    title:'Sed ut perspiciatis',
    description:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
},{
    icon:'',
    title:'Magni Dolores',
    description:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
},{
    icon:'',
    title:'Nemo Enim',
    description:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
}]
const Card=()=>{
    return <div className={styles.container}>
        <div className={styles.main}>
            {data.map((item) => {
                return <div key={item.title} className={styles.card}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.description}>{item.description}</div>
                </div>
            })}
        </div>
    </div>
};
export default Card;