import Casa from "./Casa"
import casas from "./Descripcion"
function ListaCasas(){
    return(
        <div>
            {
                casas.map((casa,index)=>(
                    <Casa 
                    key={index}
                    nombre={casa.nombre}
                    descripcion={casa.descripcion}
                    precio={casa.precio}/>
                )

                )
            }   
        </div>
    )
}
export default ListaCasas