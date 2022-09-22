import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLogin from "./components/StudentLogin";
import TeacherLogin from "./components/TeacherLogin";

import Home from "./pages/Home/Index";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/teacher" element={<TeacherLogin />} />
          <Route index element={<StudentLogin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
