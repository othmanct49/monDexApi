import {get_20_caracter , get_descrip ,get_caracter  , getSommeType , get20ByType } from './services/api.js'
import { Affichez  , affichez_filter} from './ui.js';
export let numberPlus = 0 ;
 let  numberPlusfiltre =0

export let  creatures  = await get_20_caracter (numberPlus) ;
export let creaturesf = []
console.log(creatures)
export async function  pluscaracter (  grid  ){

    numberPlus +=20
    creatures.push(...(await get_20_caracter(numberPlus)))
    console.log(creatures)

     grid.innerHTML =''
 

     
     Affichez(  creatures , grid )
    
} 
export function suprimernumberPlusfiltre (){
    numberPlusfiltre = 0
}



