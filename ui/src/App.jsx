import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./pages/LandingPage";
import ProfileForm from "./pages/ProfileForm";
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/register" element={<ProfileForm />}></Route>
        {/* <Route path="/register/upload" element={<ProfileForm />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/my-tuspass" element={<ProfileForm />}></Route>
        <Route path="/:id" element={<Profile />}></Route>
        {/* mozda samo modal za register i login? */}
      </Routes>
    </Router>
  );
};

export default App;