// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
          <div>
            <NavLink to="/" style={{ color: '#fff' }}>
              Home
            </NavLink>
            <NavLink to="/otherpage" style={{ color: '#fff' }}>
              Other Page
            </NavLink>
          </div>
        </header>
        <Routes>
          <Route exact path="/" element={<Fib />} />
          <Route path="/otherpage" element={<OtherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
