import { Route, Routes } from "react-router-dom";
import docGetter from "./components/docGetter";
import "./App.css";
import Home from "./Pages/home/home.jsx"; 
import CS from "./Pages/cs/cs"; 
import MECH from "./Pages/MECH/mech.jsx";
import EEE from "./Pages/EEE/EEE";
import EC from "./Pages/EC/ec.jsx";
import CIVIL from "./Pages/CIVIL/civil.jsx";
import DocumentUploader from "./Pages/contribute/contribute";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cs" element={<CS />} />
        <Route exact path="/eee" element={<EEE />} />
        <Route exact path="/mech" element={<MECH />} />
        <Route exact path="/ec" element={<EC />} />
        <Route exact path="/civil" element={<CIVIL />} />
        <Route exact path="/contribute" element={<DocumentUploader />} />
      </Routes>
    </div> 
  );
}

export default App;
