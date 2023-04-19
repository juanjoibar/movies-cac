
import './App.css';
import { PeliculasGrid } from './PeliculasGrid';

function App() {
  return (
    <div >
    
      <header className="title">Sistema de peliculas  </header>
        <main>
          
          {/* componente grilla de peliculas  */}
          
          <PeliculasGrid/>
         </main>
    
    </div>
  );
}

export default App;
