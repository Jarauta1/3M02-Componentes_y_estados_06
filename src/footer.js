function Footer(props) {

    let indice = parseInt(Math.random()*(3-0))+0
   
return (<>
<h1>El libro de oferta:</h1>
<img src={props.aleatorio[indice].img} width="75"/>
<h2>{props.aleatorio[indice].titulo}</h2>
</>)
}

export default Footer;