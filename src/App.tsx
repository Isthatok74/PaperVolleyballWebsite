import './App.css';
import { HashRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import RouteNames from './routes';

import NavBar from './pkg/navBar/NavBar';
import Footer from './Footer';

import ContentHome from './ContentHome';
import ContentAbout from './ContentAbout';
import ContentDonate from './ContentDonate';

function App() : JSX.Element {

  return (
    <Router>
    <div className="App">

       <header className="App-header">
        <NavBar/>
      </header>

      <main className="App-main">
        <Routes>
            <Route path={RouteNames.ABOUT} element={<ContentAbout/>} />
            <Route path={RouteNames.DONATE} element={<ContentDonate/>} />
            <Route path={RouteNames.HOME} element={<ContentHome/>} />
            <Route path="*" element={<Navigate to={RouteNames.HOME}/>} /> 
        </Routes>
      </main>

      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
    </Router>
  );
}

export default App;