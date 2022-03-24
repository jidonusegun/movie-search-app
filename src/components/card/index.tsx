import useStyles from './style';

interface Props {
    title?: string;
    image?: string; 
}

export default function Card({title, image}: Props) {
    const styles = useStyles();
    return (
        <div className={styles.container} style={{backgroundImage: `url(${image})`, backgroundColor: 'black'}}>
            <p className={styles.title}>{title}</p>
        </div>
    )
}