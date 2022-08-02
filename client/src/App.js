import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home/Index';
import Register from './components/pages/Home/Register/Register';
import Login from './components/pages/Home/Login/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}
