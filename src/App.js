import './App.css';
import { ConfirmAge } from "./components/ConfirmAge";
import { Routes, Route } from "react-router-dom";
import { Homepage } from './components/Homepage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={< ConfirmAge />} />
        <Route path="/home" element={<Homepage />}/>
      </Routes>


    </div>
  );
}

export default App;
