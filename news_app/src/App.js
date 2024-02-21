import { useContext } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import NewsFeed from './components/newsFeed/NewsFeed';
import Topbar from './components/topbar/Topbar';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { NewsContext } from './context/NewsContext'

import NewsDetails from './components/newsDetails/NewsDetails';
import Contact from './pages/contact/Contact';
function App() {
  const newsContext = useContext(NewsContext);
  const {loggedIn} = newsContext;
  return (
    <div className='app'>
   
      <BrowserRouter>
      <Topbar/>
      <Routes>
      
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<NewsFeed />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/newsDetails/:id' element={<NewsDetails />}/>
      </Routes>
   
      
      </BrowserRouter>  
    </div>
  );
}

export default App;
