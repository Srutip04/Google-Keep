import logo from './logo.svg';
import Header from './components/header/header';
import Note from './components/note/note';
import Footer from './components/footer/footer';
import notes from './Notes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map((noteItem) => {
        return (
          <Note 
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}

          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
