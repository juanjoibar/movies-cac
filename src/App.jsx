
import './App.css';
import{BrowserRouter,Route,Routes, Link} from 'react-router-dom'
import { LandinPage } from './pages/LandinPage';
import { PeliculaDetalle } from './pages/PeliculaDetalle';
function App() {
  return (
    <BrowserRouter>
    <div >
    
    <header className='header'>
      <Link to="/">
      <h1 className='title'>Peliculas</h1>
      </Link>
    </header>
    <Routes>
      <Route path='/' element= {<LandinPage/>}/>
      <Route path='/pelicula' element= "otra ruta"/>
      <Route path='/pelicula/:peliculaid' element= {<PeliculaDetalle/>}/>
    </Routes>
  
    <footer className='footer'>

    </footer>
  </div>
    </BrowserRouter>
    
  );
}

export default App;
