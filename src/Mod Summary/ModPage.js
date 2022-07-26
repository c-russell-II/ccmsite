import { useParams } from "react-router";
import { Link } from "react-router-dom";
import modInfo from "../Utilities/ModInfo";
import styles from './styles.module.css'
import YoutubeLink from "./YoutubeLink";


const ModPage = (props) => {
    const {index} = useParams();
    const mod = modInfo[index];
    return (
        <>
            <h1 className={styles.modPageHeader}>
                {mod.name}<br/>
            </h1>
            <h2 className={styles.byLine}>by - {mod.author}</h2>
            <img 
                src={require(`../Assets/${mod.thumbnailLink}`)}
                alt="Hero Banner for the mod."
                className={styles.heroImage}
            />
            <Link to="download">Click Here to download {mod.name} now!</Link>
            <br/>
            <p className={styles.fullDescription}>{mod.description}</p>
            <h3 className={styles.linkHeader}>Youtubers who have made videos on this mod:</h3>
            { mod.links.youtube.length > 0 ?
            <section className={styles.youtubeSection}>
                {mod.links.youtube.map((e, i) => {
                    return <YoutubeLink {...e} key={i} mod={mod.name}/>
                })}
            </section> : <p>Oops, haven't added any youtube videos, or something went wrong!</p>}
        </>
    )
}

export default ModPage;