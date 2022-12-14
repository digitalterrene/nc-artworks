
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar1 from './components/Navbar1';
import Sidebar1 from './components/Sidebar1';
import { useStateContext } from './contexts/ContextProvider';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';



function App() {
  const { activeMenu } = useStateContext();




  return (
    <div className='h-full'>
      <BrowserRouter>
        <div className=' w-full bg-cover h-48 lg:h-72 '
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url("https://cdn.pixabay.com/photo/2018/02/04/09/09/brushes-3129361__340.jpg")`
          }}>
          <Navbar1 />
          {
            activeMenu ? (
              <div  className="w-72 fixed sidebar
                  dark:bg-secondary-dark-bg bg-white">
                <Sidebar1 />
              </div>
            ) : (
              <div className='w-0 dark:bg-secondary-dark-bg'><Sidebar1 /></div>
            )
          }

        </div>
        <div div className={
          `dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full
                         ${activeMenu ? 'md:ml-72' : 'flex-2 '}`

        }>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
