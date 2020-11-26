import libreria from "./libreria"
import Cabecera from "./cabecera"
import Main from "./main"
import Footer from "./footer"

function App() {
   
    return (<>
    <Cabecera nombre={libreria.usuario.nombre} imagen={libreria.usuario.imagen} vip={libreria.usuario.vip}/>
    <Main libros={libreria.libros}/>
    <Footer aleatorio={libreria.libros}/>
    </>)
 
}

export default App;
