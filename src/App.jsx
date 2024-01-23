
import './App.css'
import AllNews from './Components/AllNews';
import Header from './Components/Header'
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Category from './Components/Category';
import Filters from './Components/Filters';
// import Business from './Components/Business'




function App() {
 

  return (
    <>
      <Header/>
     
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/allnews' element={<AllNews/>}/>
       <Route path='/category' element={<Category/>}/>
       <Route path='/filters' element={<Filters/>}/>
       {/* <Route path='/buisness' element={< Business />}/> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
