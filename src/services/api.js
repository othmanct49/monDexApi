 const URL_BASE = "https://pokeapi.co/api/v2/"

  export async function get_20_caracter ( depart ){
     return fetch (`${URL_BASE}/pokemon?limit=20&offset=${depart}`)
     .then (rep => {
        if (!rep.ok){
            throw new Error ('not fond')

        }
        return rep.json()
     })
     .then (data => {
        const caracter = data.results.map(item => get_caracter(item.name))
        return  Promise.all(caracter)
     })
     .catch  (error => console.error(error))
  }

















export async function  get_caracter ( name) {
   
 return  fetch(`${URL_BASE}pokemon/${name.toLowerCase()}`) 
      .then(rep =>  {
        if (!rep.ok){
            throw new Error ('not fond ')
            
   
        }
        return rep.json() 
      })
      
      .then(data => {
         const data_objet = {
        id : data.id , 
        name : data.name ,
        image : data.sprites.front_default,
        type : data.types.map(item => item.type.name) ,
        status: {
            hp : data.stats.find(item => item.stat.name === "hp").base_stat ,
            attack :data.stats.find (item => item.stat.name === "attack").base_stat   ,
            defenens : data.stats.find( item => item.stat.name === "defense").base_stat 
        }  
       

    }
     return data_objet 

      })
      .catch (error => console.error( error))


}
// console.log( await get_caracter("Pidgeotto"))
  console.log ( await get_20_caracter(0))