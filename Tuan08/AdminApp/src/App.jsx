import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Team from './pages/Team';
import Analytics from './pages/Analytics';
import Messages from './pages/Messages';
import Integrations from './pages/Integrations';


function App() {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="menu">
          <Menu />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/project" element={<Project />} />
            <Route path="/team" element={<Team />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;