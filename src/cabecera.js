import {useState} from "react"

function Cabecera (props) {
    
    let [estado, setEstado] = useState(props.vip)
    let [vip, setVip] = useState("Hacer VIP")
   

    function cambioVip() {
        if (estado == true) {
            setEstado(false)
            setVip("Hacer VIP")
        } else if (estado == false) {
            setEstado(true)
            setVip("Quitar VIP")
        }
    }

    if (estado == true) {
    return (<>
    <img src={props.imagen} width="100"/><h1>Hola {props.nombre}, bienvenido de nuevo.</h1>
    <button onClick={cambioVip}>{vip}</button>
    </>)
    } else {
        return (<>
            <img src={props.imagen} width="100"/><h1>{props.nombre}</h1>
            <button onClick={cambioVip}>{vip}</button>
            </>)
    }

}

export default Cabecera;