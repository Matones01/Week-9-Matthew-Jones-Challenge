import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './pages/index'
import About from './pages/about'
import Challenges from './pages/challenges'
function Error(){
  return <h2> 404 Page Not Found</h2>
}

function App() {
  return (
    <div className='app'>
    <Router>
      <div>
        <div className='nav-bar'>
          <nav>
            <ul>
              <li className='nav-link top'>
                <Link to="/home">Home</Link>
              </li>
              <li className='nav-link'>
                <Link to="/challenges">Challenges</Link>
              </li>
              <li className='nav-link bottom'>
                <Link to="/about">About Me</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="*" element={<Error />} /> {/* Catch-all for 404 */}
          </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;