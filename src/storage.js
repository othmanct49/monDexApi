import {get_20_caracter , get_descrip ,get_caracter } from './services/api.js'
import { Affichez } from './ui.js';
export let numberPlus = 0 ;

export let  creatures  = await get_20_caracter (numberPlus) ;
export async function  pluscaracter ( grid  ){
    numberPlus +=20
    creatures.push(...(await get_20_caracter(numberPlus)))
     grid.innerHTML =''
     Affichez( creatures , grid )
} 



