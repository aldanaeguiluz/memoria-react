import { useState } from "react"
import Tablero from "./components/Tablero"

const simbolosDisponibles=["💗", "💌", "🤍"]

const MemoriaPage = () => {

    const [listaCasillas, setListaCasillas]=useState([])
    const [turno, setTurno]= useState(1)
    const [casillaAnterior, setCasillaAnterior] = useState(null)

    const mostrarCasillaOnClick = (row, col) => {
        console.log(`mostrarCasillaOnClick: (${row},${col})`)
        const nuevaListaClon=[...listaCasillas]
        if(nuevaListaClon[row][col].mostrandoSimbolo!=true){
            if(turno==1){
                nuevaListaClon[row][col].mostrandoSimbolo=true
                setCasillaAnterior(nuevaListaClon[row][col])
                setTurno(2)
            }else{
                nuevaListaClon[row][col].mostrandoSimbolo=true
                if(casillaAnterior.simbolo!=nuevaListaClon[row][col].simbolo){
                    casillaAnterior.mostrandoSimbolo=false
                    nuevaListaClon[row][col].mostrandoSimbolo=false
                }
                setTurno(1)
            }
        }

        setListaCasillas(nuevaListaClon)
    }

    for (let i=0; i<2;i++){
        const fila=[]
        for(let j=0;j<3;j++){
            fila.push({
                simbolo: simbolosDisponibles[j],
                mostrandoSimbolo:false
            })
        }
        listaCasillas.push(fila)
    }

    return <div>
        <h1>Juego de memoria</h1>
        <Tablero 
            rows={2} 
            cols={3} 
            listaCasillas={listaCasillas}
            mostrarOnClick={mostrarCasillaOnClick}

        />
    </div>
}

export default MemoriaPage