
import './App.css';
import { PeliculasGrid } from './Components/PeliculasGrid';
import{BrowserRouter,Route,Routes, Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div >
    
    <header>
      <Link to="/">
      <h1 className='title'>Peliculas</h1>
      </Link>
    </header>
    <Routes>
      <Route path='/' element= {<PeliculasGrid/>}/>
      <Route path='/pelicula' element= "otra ruta"/>
      <Route path='/pelicula/:peliculaId' element= "detalle de pelicula"/>
      
    </Routes>
  
    <footer className='footer'>

    </footer>
  </div>
    </BrowserRouter>
    
  );
}

export default App;
