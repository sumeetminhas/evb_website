import './App.css';
import { ConfirmAge } from "./components/ConfirmAge";
import { Routes, Route } from "react-router-dom";
import { Homepage } from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={< ConfirmAge />} />
        <Route path="/home" element={Homepage}/>
      </Routes>

    </div>
  );
}

export default App;
