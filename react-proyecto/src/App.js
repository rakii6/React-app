
import './App.css';
import girl from './images/girl.jpg'
import Header from './components/header';
import Buttons from './components/Buttons';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <div className='Image'>
      <img src={girl}/>
    </div>
      <Header/>
      <Buttons/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
