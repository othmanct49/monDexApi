import {get_20_caracter , get_descrip ,get_caracter  , getSommeType , get20ByType , get_caracterById } from './services/api.js'
import { Affichez  , affichez_filter} from './ui.js';
import { creatures } from './main.js'
export let numberPlus = 0 ;

 let  numberPlusfiltre =0

export let creaturesf = []

export async function  pluscaracter (  grid  ){

    numberPlus +=20
    creatures.push(...(await get_20_caracter(numberPlus)))


     grid.innerHTML =''
 

     
     Affichez(  creatures , grid )
    
} 
export function suprimernumberPlusfiltre (){
    numberPlusfiltre = 0
}
export async function plusfeltre20 (grid  , filterBotton) {
      numberPlusfiltre +=20 
        const arraySommeType = await getSommeType(filterBotton)
        creaturesf.push(...(await get20ByType(arraySommeType , numberPlusfiltre )))
          grid.innerHTML =''
        affichez_filter(  creaturesf   )
}
export async function addFavLS ( id ){
    console.log(id)
    const data = await get_caracterById(id)
    console.log(data)
    const favList = JSON.parse(localStorage.getItem('fav')) || []
      favList.push (data)
      localStorage.setItem('fav' , JSON.stringify(favList))
}
export  function removeFavLS (id){
    const favList = JSON.parse(localStorage.getItem('fav'))
    const find_index = favList.findIndex( item => item.id == id )
     if (find_index === -1) {return}
    favList.splice(find_index , 1)
    localStorage.setItem('fav' ,JSON.stringify(favList))
} 
export function getfavLs(){
    const listFav =  JSON.parse(localStorage.getItem('fav')) || [] 
    return listFav 
}
