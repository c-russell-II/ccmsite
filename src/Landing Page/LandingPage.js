import { useNavigate } from "react-router-dom"
import modInfo from "../Utilities/ModInfo"
import ModSummary from "../Mod Summary/ModSummary"
import styles from './styles.module.css'

const LandingPage = (props) => {
    const navigate = useNavigate();

    const handleClick= (e) => {
        e.preventDefault();
        navigate('/download');
    }

    return (
        <>
            <h1 className={styles.title}>Starcraft II Custom Campaign Manager</h1>
            <img src={require('../Assets/joeyray.jpg')} alt="Joey Ray's Bar - click here to download the manager." onClick={handleClick}
                width="95%"
                className={styles.heroImage}
            />
            <h2 className={styles.sectionHeader}>Currently Available Mods</h2>
            <section className={styles.summarySection}>
            {modInfo.map((e,i) => <ModSummary mod={e} index={i} key={i}/>)}
            </section>
        </>
    )
}

export default LandingPage;