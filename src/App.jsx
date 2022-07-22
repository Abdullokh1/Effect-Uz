import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'
import Advertisement from './components/Advertisement/Advertisement'
import Footer from './components/Footer/Footer'

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
            <Navbar/>
          </div>
          <div className='col-2'>
            <Aside/>
          </div>
        </div>
      </div>
        <Advertisement/>
        <Footer/>
    </>
  )
}

export default App
