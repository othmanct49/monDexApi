 const URL_BASE = "https://pokeapi.co/api/v2/"

  export async function get_20_caracter ( depart ){
     return  await fetch (`${URL_BASE}pokemon?limit=20&offset=${depart}`)
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
   
 return   fetch(`${URL_BASE}pokemon/${name.toLowerCase()}`) 
      .then(rep =>  {
        if (!rep.ok){
            throw new Error ('not fond ')
            
   
        }
        return rep.json() 
      })
      
      .then( async data => {
        const slot1  = data.types.find(item => item.slot ===1) 
       
       const   type = slot1.type.name  

        

        
       const desc =  await get_descrip(data.id)
        
         const data_objet = {
        id : data.id , 
        name : data.name ,
        image : data.sprites.front_default,
        type :  type ,
        level : "base" ,
        stats: {
            hp : data.stats.find(item => item.stat.name === "hp").base_stat ,
            attack :data.stats.find (item => item.stat.name === "attack").base_stat   ,
            defence : data.stats.find( item => item.stat.name === "defense").base_stat 
        }  ,
        description: desc
       

    }
     return data_objet 

      })
      .catch (error => console.error( error))


}
export async function get_descrip(id) { 
     const description =  await fetch ( `${URL_BASE}/pokemon-species/${id}/`)
          .then(repons => {
            if (!repons){
                throw new Error ("description not fund ")
            } 
            return repons.json()
          })
          .then (descrip => {
         const   des = descrip.flavor_text_entries.find(item => item.language.name === "en").flavor_text
               
          return des.replace(/\s+/g ," ")

          } )
          .catch (error => console.error(error))
        return description
    
}
