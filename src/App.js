import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from './Components/Home';
import CreateProfile from './Pages/CreateProfile';
import Profile from './Pages/Profile';
import EventDetails from './Pages/EventDetails';
import ShowAllEvents from './Pages/ShowAllEvents';
import UpdateProfile from './Pages/UpdateProfile';
import FOF from './Pages/FOF';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<ShowAllEvents />} />
          <Route path="/tickets/new" element={<CreateProfile />} />
          <Route path="/tickets/:id" element={<Profile />} />
          <Route path="/tickets/:id/edit" element={<UpdateProfile />} />
          <Route path="/tickets/:id" element={<EventDetails />} />
          <Route path="*" element={<FOF />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
