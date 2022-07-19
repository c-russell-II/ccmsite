import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Outlet';
import DownloadPage from './Download Page/DownloadPage';
import ModPage from './Mod Summary/ModPage';
import LandingPage from './Landing Page/LandingPage';

function App() {
  return (
    <Routes>
    `  <Route path="/" element={<Layout/>}>
        <Route index element={<LandingPage/>}/>
        <Route path="download" element={<DownloadPage/>}/>
        <Route path="/mod/:index/:modLink" element={<ModPage/>}/>
      </Route>`
  </Routes>
  );
}

export default App;
