import logo from './logo.svg';
import Header from './components/header/header';
import Note from './components/note/note';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
