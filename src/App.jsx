import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'
import Advertisement from './components/Advertisement/Advertisement'
import Footer from './components/Footer/Footer'
import { Routes, Route } from "react-router-dom";
import News from './components/Navbar/News/News'
import { useEffect, useState } from 'react'
import API from './API/API'
import AboutNews from './components/Navbar/AboutNews/AboutNews'


function App() {
  let [config, setConfig] = useState([])
  let [newsAll, setNewsAll] = useState([])
  let [provence, setProvence] = useState([])
  let [newsEnd, setNewsEnd] = useState([])


  
  const useAuth = async () =>{
    try{
      const config = await API.config();
      const newsAll = await API.newsAll();
      const provence = await API.provence();
      const newsEnd = await API.newsEnd(3)
      setConfig(config.data)
      setNewsAll(newsAll.data)
      setProvence(provence.data)
      setNewsEnd(newsEnd.data)

    }catch(err){
      console.error(err);
      return;
    }
  }

  useEffect(() =>{
    useAuth()
  },[])



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
              <Route path='/AboutNews/:id' element={<AboutNews/>}/>

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
