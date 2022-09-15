import './App.css';
import LogIn from './pages/Login';
import { Route, Routes } from "react-router-dom";
import Events from './pages/Event';
import Presence from './component/Presence';

function App() {
  return(
    <Routes>
      <Route path="/" element={<LogIn/>} />
      <Route path="/presence" element={<Presence/>} />
      <Route path="/home" element={<Events/>} />
      <Route path="/events" element={<Events/>} />
    </Routes>
  );
}

export default App;
