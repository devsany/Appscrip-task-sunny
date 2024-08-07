import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Router,Route, Routes} from 'react-router-dom';
import Shop from './component/Shop';
import Skill from './component/Skill';
import Stories from './component/Stories';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/navbar/Navbar';
import Header from './component/Header.jsx/Header';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
       <Header/>
        <Navbar/>
        
          <Routes>
            <Route path='/' exact element={<Shop/>}/>
            <Route path='/skill' element={<Skill/>}/>
            <Route path='/storie' element={<Stories/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
