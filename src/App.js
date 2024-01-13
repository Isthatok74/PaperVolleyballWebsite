import './App.css';
import Footer from './Footer';
import NavigationBar from './NavigationBar';
import ContentHome from './ContentHome';

function App() {

  return (
    <div className="App">

       <header className="App-header">
        <NavigationBar/>
      </header>

      <main className="App-main">
        <ContentHome/>
      </main>

      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
