import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'
import Advertisement from './components/Advertisement/Advertisement'
import Footer from './components/Footer/Footer'
import { Routes, Route } from "react-router-dom";
import News from './components/Navbar/News/News'


function App() {

  return (
    <>
      <div className="container">
        <Header/>
        <div className='d-flex justify-content-between'>
          <div className='col-2'>
            <Sidebar/>
          </div>
          <div className='col-7'>
            <Routes>
              <Route path='/' element={<Navbar/>}/>
              <Route path='/News' element={<News/>}/>
            </Routes>
          </div>
          <div className='col-2'>
            <Aside/>
          </div>
        </div>
        <Advertisement/>
        <Footer/>
      </div>
    </>
  )
}

export default App
