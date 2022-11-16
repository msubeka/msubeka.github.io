import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Experiences from './pages/experiences';


  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element ={<Home/>}></Route>
        <Route path='/about' element ={<About/>}></Route>
        <Route path='/experiences' element ={<Experiences/>}></Route>
        {/* <Route path='/annual' element ={<AnnualReport/>}></Route>
        <Route path='/teams' element ={<Teams/>}></Route>
        <Route path='/blogs' element ={<Blogs/>}></Route>
        <Route path='/sign-up' element ={<SignUp/>}></Route> */}
    </Routes>
    </Router>
  );
}
  
export default App;