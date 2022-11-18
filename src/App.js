
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useStateContext } from './contexts/ContextProvider';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';



function App() {
  const{toggleSidebar, toggleNavbar, setToggleNavbar, setToggleSidebar} = useStateContext()
  const [deviceWidth, setDeviceWidth] = useState(1200)

  // const ToggleSidebarAndNavbar = ()=>{
  //   if(window.innerWidth >= 730){
  //     setToggleNavbar(!toggleNavbar)
  //     setToggleSidebar(!toggleSidebar)
  //   }
  // }

  // // useEffect(()=>{
  // //   ToggleSidebarAndNavbar()
  // // },[ toggleNavbar, toggleSidebar])


  useEffect(() => {
    const handleResize = () => setDeviceWidth
      (window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize();
    if(deviceWidth >= 730){
      setToggleNavbar(!toggleNavbar)
      setToggleSidebar(!toggleSidebar)
    }
    if(deviceWidth )

    return () => window.removeEventListener
      ('resize', handleResize)

  }, [deviceWidth,toggleSidebar,
    toggleNavbar])


  return (
    <div className='h-full'>
      <BrowserRouter>
        <div className=' w-full bg-cover h-72 '
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url("https://cdn.pixabay.com/photo/2018/02/04/09/09/brushes-3129361__340.jpg")`
          }}>
          {toggleNavbar && <Navbar />}
         {toggleSidebar && <Sidebar/>}

        </div>
        <div style={{}}>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
