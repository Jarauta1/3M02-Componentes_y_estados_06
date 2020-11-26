import {useState} from "react"

function Main (props) {
    const mostrarLibros = props.libros.map(libros => {
        let [stock, setStock] = useState(libros.stock)

        function comprar() {
            if (stock != 1 && stock != "No quedan copias") {
            setStock(stock-1)
            } else if (stock == 1) {
                setStock("No quedan copias")
            }
        }

        return (<>
        <h1>{libros.titulo}</h1>
        <h2>Autor: {libros.autor}</h2>
        <h4>Editorial: {libros.editorial}</h4>
        <p>{libros.descripcion}</p>
        <img src={libros.img} width="100"/>
        <h3>Stock: {stock}</h3>
        <button onClick={comprar}>Comprar</button>
        </>)
    })
   return mostrarLibros;

}

export default Main;