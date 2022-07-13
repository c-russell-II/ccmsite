import { Link } from 'react-router-dom';
import './App.css';
import ModSummary from './Mod Summary/ModSummary';
import modInfo from './ModInfo';

function App() {
  return (
    <>
      <h1>Sc2 Custom Campaign Manager Website, Unstyled Edition</h1>
      <Link to="/download">Download now (Primary link, until Styled edition adds hero banner &c)</Link>
      <section>
        <h2>Currently Available Mods:</h2>
        {modInfo.map((e,i) => <ModSummary mod={e} index={i} key={i}/>)}
      </section>
    </>
  );
}

export default App;
