import React from "react";
import styles from './styles.module.css'

const DownloadPage = (props) => {

    return (
        <main className={styles.downloadContainer}>
            <h1>Download starting dialogue, placeholder</h1>
            <h2>Download override dialogue, placeholder</h2>
            <ol className={styles.listContainer}>
                <li className={styles.listItem}>Extract files to a convenient location.</li>
                <img src={require("../Assets/extract.png")} className={styles.downloadImage} height="1116" width="728" alt="Showing extract folder steps"/>
                <li className={styles.listItem}>Run "SC2 Custom Campaign Manager.exe" - if prompted to update, please use the Updater to do so now.</li>
                <img src={require("../Assets/run.png")} alt="Showing the named file" className={styles.downloadImage}/>
                <li className={styles.listItem}>If asked to find "Starcraft II.exe" do so - click the gear icon by the play button for Starcraft 2, then press "Show in explorer" and open the SC2 folder.</li>
                <img src={require("../Assets/bnet.png")} alt="Showing the described icons to click on the Bnet launcher" className={styles.downloadImage}/>
            </ol>
        </main>
    )
}

export default DownloadPage;