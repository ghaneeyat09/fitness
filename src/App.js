import LandPage from './components/LandPage';
import './App.css';
import Signup from './components/Signup';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Routes>
            <Route path="/" element={<LandPage/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="login" element={<Login/>} />
            <Route path="dashboard" element={<Dashboard/>} />
       </Routes> 

    </div>
  );
}

export default App;
