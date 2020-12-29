import './App.css';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
function App() {
  return (
    <div className='App'>
      <header>
        <Container className='mt-5'>
          <div className='header'>
            <p className=''>Welcome to App Platform</p>
          </div>
        </Container>
      </header>
      <main>
        <h1 className=''>Guest Book</h1>
        <p>Body</p>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
