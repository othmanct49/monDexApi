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



export async function get_caracterById (id) {

 return   fetch(`${URL_BASE}pokemon/${id}/`) 
      .then(rep =>  {
        if (!rep.ok){
            throw new Error ('not fond ')
            
   
        }
        return rep.json() 
      })
      
      .then( async data => {
        const slot1  = data.types.find(item => item.slot ===1) 
       
       const   type = traduction (slot1.type.name ) 

        

        
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
       
       const   type = traduction (slot1.type.name ) 

        

        
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
////// 20 cracter somme type 
export async function getSommeType ( type){
 const   type_en =   traductionen(type)
  return   fetch( `${URL_BASE}type/${type_en}/`)
    .then ( rep => {
        if (!rep.ok) { throw new Error ('not fund') }
        return rep.json()
    })
    .then ( async data =>  {
        const pokemon = data.pokemon 
        return  await pokemon
    })
    .catch (error => console.log(error))}

//////// get 20 cracter by type 
   export async function get20ByType (array , dubit ){
        const lastIndex = dubit + 20
  const  newArry = array.slice( dubit ,lastIndex )
     const arrayName = newArry.map(item => item.pokemon.name)
      
     let data = [] ;
    
     arrayName.forEach(  name  => {
        const data_caracter =  get_caracter ( name) 
        data.push(data_caracter)
     });
      
    return Promise.all ( data )
    }
// -------------------------------------------------------------
// traduction (translayted by AI )
// -------------------------------------------------------------
   function traduction (type_en){
const typesFr = {     // translate by AI
  normal: "Normal",
  fighting: "Combat",
  flying: "Vol",
  poison: "Poison",
  ground: "Sol",
  rock: "Roche",
  bug: "Insecte",
  ghost: "Spectre",
  steel: "Acier",
  fire: "Feu",
  water: "Eau",
  grass: "Plante",
  electric: "Électrik",
  psychic: "Psy",
  ice: "Glace",
  dragon: "Dragon",
  dark: "Ténèbres",
  fairy: "Fée"
}
return typesFr[type_en]
   }
      function traductionen (type_fr){
        const typesEn = {
  "Normal": "normal",  // translate by AI 
  "Combat": "fighting",
  "Vol": "flying",
  "Poison": "poison",
  "Sol": "ground",
  "Roche": "rock",
  "Insecte": "bug",
  "Spectre": "ghost",
  "Acier": "steel",
  "Feu": "fire",
  "Eau": "water",
  "Plante": "grass",
  "Électrik": "electric",
  "Psy": "psychic",
  "Glace": "ice",
  "Dragon": "dragon",
  "Ténèbres": "dark",
  "Fée": "fairy"
}

return typesEn[type_fr] }

