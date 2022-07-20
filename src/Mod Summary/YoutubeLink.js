import styles from './styles.module.css'


const YoutubeLink = (props) => {
    const {creator, link, thumb, mod} = props;

    return (
        <div className={styles.youtubeContainer}>
        <a href={link}>
            <img src={thumb} alt={`Thumbnail for video by ${creator}`} className={styles.youtubeThumb}/><br/>
            {creator} playing {mod}
        </a>
        </div>
    )
}

export default YoutubeLink;