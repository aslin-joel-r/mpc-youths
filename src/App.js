import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Events } from './components/Events';
import { Home } from './components/Home';
import { Mission } from './components/Mission';
import Navbar from './components/Navbar';
import { PointDetails } from './components/PointDetails';
import { Points } from './components/Points';

function App() {
  
  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route path="/mpc-youths" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/mpc-youths/missions" element={<Mission />} />
          <Route path="/mpc-youths/points" element={<Points />} />
           <Route path="/mpc-youths/events" element={<Events />} />
           <Route path="/mpc-youths/point-details" element={<PointDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
