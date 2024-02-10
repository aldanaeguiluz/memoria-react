const Casilla = (props) => {

    const casillaOnClick=()=>{
        props.mostrarOnClick(props.numFila, props.numColum)
    }

    return <div className="col">
        <button className="btn btn-light" 
                type="button"
                dangerouslySetInnerHTML={
                    props.data.mostrandoSimbolo===true ? {__html:props.data.simbolo} : {__html:"UL"}
                } 
                onClick={casillaOnClick}
                >
            {
                /*props.data.mostrandoSimbolo==true ? props.data.simbolo:"UL"*/
            }
        </button>
    </div>
}

export default Casilla