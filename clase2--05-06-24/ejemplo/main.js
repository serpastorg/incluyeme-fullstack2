document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('agregarMascota').addEventListener('click',agregarMascota)
})
function agregarMascota(){
    const nombreMascota=document.getElementById('nuevaMascota').value.trim()
    if(nombreMascota==""){
        alert('Por favor, ingrese un nombre válido')
        return;
    }
    const nuevaMascota=document.createElement('li')
    nuevaMascota.textContent=nombreMascota
    nuevaMascota.classList.add('mascota')
    

// Botón para eliminar la mascota
    const btnEliminar=document.createElement('button')
    btnEliminar.textContent='Eliminar'
    btnEliminar.onclick=function(){
        eliminarmascota(nuevaMascota)
    }
    nuevaMascota.appendChild(btnEliminar)
    //document.getElementById('listaMascotas').appendChild(btnEliminar)
    document.getElementById('listaMascotas').appendChild(nuevaMascota)
}
function eliminarmascota(mascota){
    mascota.remove()
}