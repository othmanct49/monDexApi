import {get_20_caracter , get_descrip ,get_caracter  , getSommeType , get20ByType } from './services/api.js'
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
export async function plusfeltre20 (grid ) {
      numberPlusfiltre +=20 
        const arraySommeType = await getSommeType(filterBotton)
        creaturesf.push(...(await get20ByType(arraySommeType , numberPlusfiltre )))
          grid.innerHTML =''
          Affichez(  creaturesf , grid )
}
 
