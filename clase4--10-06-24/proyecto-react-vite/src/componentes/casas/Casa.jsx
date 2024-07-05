function Casa(casa){
    return(
        <div className="casa">
            <h2>Estilo de casa</h2>
            <p>La casa es del tipo {casa.nombre}</p>
            <p>Los dueños la describen como "{casa.descripcion}"</p>
            <p>Tiene el valor {casa.precio}</p>
        </div>
    )
}
export default Casa