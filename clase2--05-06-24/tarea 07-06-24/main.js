document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('agregarelemento').addEventListener('click',agregarelem)
})
function agregarelem(){
    const elem=document.getElementById('nuevoelemento').value.trim()
    if(elem==""){
        alert('Nombre inválido. Ingrese un nombre válido')
        return
    }
    const nuevoel=document.createElement('li')
    nuevoel.textContent=elem
    nuevoel.classList.add('compra')
    
    const eliminar=document.createElement('button')
    eliminar.textContent='X'
    eliminar.classList.add('X')
    eliminar.onclick=function(){
        elimelem(nuevoel)
    }
    nuevoel.appendChild(eliminar)
    document.getElementById('listaelementos').appendChild(nuevoel)
}
function elimelem(elemento){
    elemento.remove()
}