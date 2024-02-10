import Fila from "./Fila"

const Tablero = (props) => {

    return <>
        <Fila casillas={props.listaCasillas[0]} 
            mostrarOnClick={props.mostrarOnClick} 
            numFila={0}/>
        <Fila casillas={props.listaCasillas[1]}
            mostrarOnClick={props.mostrarOnClick}
            numFila={1} />
    </>
}

export default Tablero