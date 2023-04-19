
import './App.css';
import { PeliculasGrid } from './PeliculasGrid';

function App() {
  return (
    <div >
    
      <header className="title">
        <div className='container'>Sistema de peliculas </div>
         </header>
        <main>
          
          {/* componente grilla de peliculas  */}
          
          <PeliculasGrid/>
         </main>
    
    </div>
  );
}

export default App;
