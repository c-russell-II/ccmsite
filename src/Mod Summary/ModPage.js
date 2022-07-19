import { useParams } from "react-router";
import modInfo from "../Utilities/ModInfo";


const ModPage = (props) => {
    const {index} = useParams();
    const mod = modInfo[index];
    return (
        <div className="modPageContainer">
            <main>
                <h1>
                    {mod.name}<br/>
                    <sub>
                        by - {mod.author}
                    </sub>
                </h1><br/>
                <p>{mod.description}</p>
            </main>
        </div>
    )
}

export default ModPage;