import styles from './styles.module.css';

const DownloadMod = (props) => {

    return (
        <>
            <h1>Download starting dialogue</h1>
            <p>Download Override Dialogue</p>
            <h3 className={styles.downloadHeader}>Installing & Playing campaigns</h3>
            <ol className={styles.listContainer}>
                <li className={styles.listItem}>After downloading, open the campaign manager.</li>
                <li className={styles.listItem}>Drag the <strong>zipped</strong> file into the Campaign Manager.</li>
                <img className={styles.downloadImage} src={require("../Assets/campaigndrag.png")} alt="showing where to drop campaign folder in mod manager."/>
                <li className={styles.listItem}>Click yes to set the new campaign as active.</li>
                <img className={styles.downloadImage} src={require("../Assets/importsuccess.png")} alt="showing dialogue box for successful import and setting campaign to active."/>
                <li className={styles.listItem}>Alternatively, to select a previously imported campaign: select your new choice from the campaign's dropdown menu.</li>
                <img className={styles.downloadImage} src={require("../Assets/ccmdropdown.png")} alt="showing dropdown menu for Legacy of the Void"/>
                <li className={styles.listItem}>Finally, click "set to active campaign."</li>
            </ol>
        </>
    )
}

export default DownloadMod;