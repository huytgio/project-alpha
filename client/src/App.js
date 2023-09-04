import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Orgin from './Components/Layout/Orgin';
import Auth from './views/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Orgin />} />
        <Route path="/login" element={<Auth authRoute="login" />} />
        <Route path="/register" element={<Auth authRoute="register" />} />
      </Routes>
    </Router>
  );
}

export default App;
