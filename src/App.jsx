import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState, Suspense, lazy } from 'react';

// Lazy loading components
const Home = lazy(() => import("./pages/home.jsx"));
const SignUp = lazy(() => import("./signUp/SignUp.jsx"));
const LoginForm = lazy(() => import("./signUp/login.jsx"));
const Dashboard = lazy(() => import("./signUp/dashboard.jsx"));
const PhoneVerify = lazy(() => import("./signUp/verification.jsx"));
const History = lazy(() => import("./pages/history.jsx"));
const MapWithTracking = lazy(() => import("./pages/map.jsx"));

function App() {
  const [history, setHistory] = useState([]);

  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/verification' element={<PhoneVerify />} />
            <Route path="/history" element={<History />} />
            <Route path="/map" element={<MapWithTracking />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
