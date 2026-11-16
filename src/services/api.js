 import {messageEreur} from '../ui.js' 
 import {grid} from '../main.js'
 const URL_BASE = "https://pokeapi.co/api/v2/"

  export async function get_20_caracter ( depart ){
     return  await fetch (`${URL_BASE}pokemon?limit=20&offset=${depart}`)
     .then (rep => {
        if (!rep.ok){
            throw new Error ('Impossible de charger les données')

        }
        return rep.json()
        
     })
     .then (data => {
        const caracter = data.results.map(item => get_caracter(item.name))
        return  Promise.all(caracter)
     })
    //  .catch  (error => console.error(error))
     .catch ( error => {messageEreur( "Impossible de charger les données. Vérifiez votre connexion." , grid)
        console.log (error)
       } )
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
      //   const slot1  = data.types.find(item => item.slot ===1) 
       
      //  const   type = traduction (slot1.type.name ) 

        

        
       const desc =  await get_descrip(data.species.url)
        
         const data_objet = {
        id : id , 
        name : data.name ,
        image : data.sprites.front_default,
        type :  await Promise.all (data.types.map(item => item.type.name)) ,
        level : "base" ,
        stats: {
            hp : data.stats.find(item => item.stat.name === "hp").base_stat ,
            attack :data.stats.find (item => item.stat.name === "attack").base_stat   ,
            defence : data.stats.find( item => item.stat.name === "defense").base_stat 
        }  ,
        description: desc
       

    }
     return  data_objet 

      })
      .catch (error => {messageEreur( "Impossible de charger les données. Vérifiez votre connexion." , grid)
        console.log (error)
       })
    
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


        

        
       const desc =  await get_descrip(data.species.url)
        
         const data_objet = {
        id : data.id , 
        name : data.name ,
        image : data.sprites.front_default,
        type : await Promise.all (data.types.map(item => item.type.name)) ,
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
export async function get_descrip(url) { 
     const description =  await fetch ( `${url}`)
          .then(repons => {
            if (!repons){
                throw new Error ("description not fund ")
            } 
            return repons.json()
          })
          .then (descrip => {
         const   des = descrip.flavor_text_entries.find(item => item.language.name === "fr").flavor_text
               
          return des.replace(/\s+/g ," ")

          } )
          .catch (error => {messageEreur( "Impossible de charger les données. Vérifiez votre connexion." , grid)
        console.log (error)
       })
        return description
    
}
////// 20 cracter somme type 
export async function getSommeType ( type){
 const   type_en =   traductionen(type)
  return  await  fetch( `${URL_BASE}type/${type_en}/`)
    .then ( rep => {
        if (!rep.ok) { throw new Error ('not fund') }
        return rep.json()
    })
    .then ( async data =>  {
        const pokemon = data.pokemon 
        return  Promise.all( pokemon)
    })
    .catch (error => {messageEreur( "Impossible de charger les données. Vérifiez votre connexion." , grid)
        console.log (error)
       })}

//////// get 20 cracter by type 
   export async function get20ByType (array , dubit ){
        const lastIndex = dubit + 20
  const  newArry = await array.slice( dubit ,lastIndex )
     const arrayName = newArry.map(item => item.pokemon.name)
      
     let data = [] ;
    
     arrayName.forEach(  name  => {
        const data_caracter =  get_caracter ( name) 
        data.push(data_caracter)
     });
      
    return Promise.all ( data )
    }
    //==============================================
    ///////          rocherch 
    //==========================================
  export async function rocherch(input ) {
      return await fetch (`${URL_BASE}/pokemon?limit=1351&offset=0`)
          .then ( rep => {
            if (!rep.ok){
              throw new  Error (' check netweork and try agin')
            } 
            return rep.json()
          } )
          .then ( data => {
         const   filterData =  data.results.filter(item => item.name.includes(input) )
     
              
              return Promise.all(filterData)
          } )
          .then(data => {
        
                   const  newData = data.map(item => item.name).slice(0 , 20)
                   
                   return Promise.all(newData)
          })
      
       .catch ( error => {messageEreur( "Impossible de charger les données. Vérifiez votre connexion." , grid)
        console.log (error)
       } )

    }
    /////////// roucherch felter 
       export async function rocherchfelter (input , filter_botton_cliced  ) {
          const sommeType = await getSommeType ( filter_botton_cliced )
             console.log (sommeType)
             const serch =   sommeType.filter(item => item.pokemon.name.includes(input))
             console.log(serch)
            
             const caracter = serch.map( async cart =>  await get_caracter( cart.pokemon.name )) 

             return Promise.all(caracter)
          }
    

// -------------------------------------------------------------
// traduction (translayted by AI )
// -------------------------------------------------------------
 export  function traduction (type_en){
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
    export  function traductionen (type_fr){
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

