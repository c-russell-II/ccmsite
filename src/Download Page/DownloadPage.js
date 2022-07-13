import React from "react";

const DownloadPage = (props) => {

    return (
        <main>
            <h1>Download starting dialogue, placeholder</h1>
            <h2>Download override dialogue, placeholder</h2>
            <ol>
                <li>Extract files to a convenient location.</li>
                <img src={require("../Assets/extract.png")} alt="Showing extract folder steps"/>
                <li>Run "SC2 Custom Campaign Manager.exe" - if prompted to update, please use the Updater to do so now.</li>
                <img src={require("../Assets/run.png")} alt="Showing the named file"/>
                <li>If asked to find "Starcraft II.exe" do so - click the gear icon by the play button for Starcraft 2, then press "Show in explorer" and open the SC2 folder.</li>
                <img src={require("../Assets/bnet.png")} alt="Showing the described icons to click on the Bnet launcher"/>
            </ol>
            <h3>Installing campaigns</h3>
            <h4>Click here to find campaigns to download</h4>
            <ol>
                <li>After downloading, open the campaign manager.</li>
                <li>Drag the <strong>zipped</strong> file into the Campaign Manager.</li>
                <img src={require("../Assets/campaigndrag.png")} alt="showing where to drop campaign folder in mod manager."/>
                <li>Click yes to set the new campaign as active.</li>
                <img src={require("../Assets/importsuccess.png")} alt="showing dialogue box for successful import and setting campaign to active."/>
                <li>Alternatively, to select a previously imported campaign: select your new choice from the campaign's dropdown menu.</li>
                <img src={require("../Assets/ccmdropdown.png")} alt="showing dropdown menu for Legacy of the Void"/>
                <li>Finally, click "set to active campaign."</li>
            </ol>
        </main>
    )
}

export default DownloadPage;