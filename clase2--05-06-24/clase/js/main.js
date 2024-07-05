let boton=document.getElementById('btn1')
boton.addEventListener('click',function(event){
    alert('Hiciste click en el boton')
})
let contenedor = document.getElementById('contenedor')
contenedor.addEventListener('click',function(event){
    event.stopPropagation()
    if(event.target.tagName==="BUTTON"){
        alert('Click en boton en el contenedor')
    }
})
let nelemento=document.createElement('div')
nelemento.textContent="Nuevo contenido"
contenedor.appendChild(nelemento)