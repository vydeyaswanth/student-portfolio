import styles from './styles.module.css'
const data=[{
    icon:'',
    title:'Lorem Ipsum',
    description:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
},{
    icon:'',
    title:'Lorem Ipsum',
    description:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
},{
    icon:'',
    title:'Lorem Ipsum',
    description:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
},{
    icon:'',
    title:'Lorem Ipsum',
    description:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
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