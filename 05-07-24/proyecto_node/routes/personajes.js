const axios=require('axios')
const salida={
    personajes:async(req,res)=>{
        try{
            const response=await axios.get('https://rickandmortyapi.com/api/character')
            const characters=response.data
            //console.log(characters.results)
            res.render('personajes',{characters:characters.results})
        }
        catch(error){
            console.error('Error al obtener personajes',error)  
            res.status(400).send('Error al obtener personajes')
        }
    },
    personaje:async(req,res)=>{
        try{
            const direccion='https://rickandmortyapi.com/api/character?name='+req.query.name
            console.log(direccion)
            const response=await axios.get(direccion)
            const character=response.data.results
            res.render('personajes',{characters:character})
        }
        catch(error){
            console.error('Error al obtener personajes',error)  
            res.status(400).send('Error al obtener personajes')
        }
    }
}

module.exports=salida