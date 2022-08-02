import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home/Index';
import Register from './components/pages/Home/Register/Register';
import Login from './components/pages/Home/Login/Login';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Dashboard/Profile/Profile';
import Admit from './components/pages/Dashboard/Admit/Admit';
import Actives from './components/pages/Dashboard/Actives/Actives';
import Policy from './components/pages/Dashboard/Policy/Policy';
import Teachers from './components/pages/Dashboard/Teachers/Teachers';
import Classes from './components/pages/Dashboard/Classes/Classes';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<Profile />} />
          <Route path="admit" element={<Admit />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="classes/:classNum" element={<Classes />} />
          <Route path="actives" element={<Actives />} />
          <Route path="policy" element={<Policy />} />
        </Route>
      </Routes>
    </Router>
  );
}
