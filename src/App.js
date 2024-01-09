
import './App.css';
import Card from './components/Card';
import Desc from './components/Desc';
import Desc2 from './components/Desc2';
import Footer from './components/Footer';

import Header from './components/Header';
import HeadingRow from './components/HeadingRow';
import Images from './components/Images';

function App() {
  return (
    <div className="App">
      <Header/>
      <Images/><br></br>
      <Desc/><br></br>
      <Card/><br></br>
      <Desc2/>
      <HeadingRow/>
      <Footer/>

    </div>
  );
}

export default App;
