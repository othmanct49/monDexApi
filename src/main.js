import {   pluscaracter  , numberPlus , suprimernumberPlusfiltre , addFavLS , removeFavLS , plusfeltre20 } from './storage.js'
import { Affichez , Affichez_details , affichez_filter , serchaffichag  , videcart , not_fond , affechezFav  } from './ui.js';
import { getSommeType , get20ByType , get_caracterById  , traductionen , rocherch, rocherchfelter,  get_caracter , get_20_caracter  } from './services/api.js'
// -------------------------------------------------------------
// 1. AFFICHAGE

let details = document.getElementById('detail')
export  let grid = document.getElementById('grid')
const fav_aj = document.getElementById('fav_aj')
const Charger_plus = document.getElementById('Charger_plus')
const effacer = document.getElementById('effacer')
 affechezFav(  fav_aj)

videcart() 
export let  creatures  = await get_20_caracter (numberPlus) ;
Affichez(creatures , grid);

///// charges plus 
let filter_botton_cliced = 'Tous'
  Charger_plus.addEventListener('click' , event => {
    const clicked = event.target.closest('#Charger_plus')
    if (!clicked) {return}
     if (filter_botton_cliced == 'Tous'){
    pluscaracter(grid )}
    else {
      plusfeltre20(grid ,filter_botton_cliced )
      
    }
   

    
  



  })
 /////////// Effacer
  effacer.addEventListener('click' , event =>{
  const clickedEffacer = event.target.closest('#effacer')
  if (!clickedEffacer){return}
     window.location.reload()
 }
 )











// -------------------------------------------------------------


// -------------------------------------------------------------
// 2. DÉTAIL


grid.addEventListener('click', async (event) => {
  let clicked = event.target.closest('.select_card')
  if (clicked) {
    const card_select = clicked.querySelector('.find_cart')
    const id_card_select = card_select.innerHTML
    console.log(id_card_select)
    const data_CS =  await  get_caracterById (id_card_select)
    console.log(data_CS)
    Affichez_details(details , data_CS , ajout_list)

 }}
)
details.addEventListener('click', (event) => {
  let close = event.target.closest('.close_bot')
  if (close) {
    details.innerHTML = `      <p class="font-display font-extrabold mx-auto text-2xl">chose card</p>`
  }
  const ajout_detail = event.target.closest('#ajouter')
  if (ajout_detail) {
    grid.querySelectorAll('.select_card').forEach(card => {
      if (card.querySelector('.find_cart').textContent == ajout_detail.dataset.id) {
        card.querySelector('#ajouter').click()
      }
    })
  }

})



// -------------------------------------------------------------


// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
let search = document.getElementById('search');
  async function serch ( input_search ){
   if (filter_botton_cliced === "Tous"){
  grid.innerHTML = " "
  videcart ()
  
  let liste_recherche = await rocherch( input_search )
    
  let card_recherche = await Promise.all   (liste_recherche.map( cart =>  get_caracter(cart)))
    if (card_recherche.length === 0 ){
    not_fond( input_search )
    return
   }


       serchaffichag(card_recherche)}
       /// serch by type
       else {
         grid.innerHTML = " "
  videcart ()
  
  let card_recherche = await rocherchfelter( input_search , filter_botton_cliced  )
    
  // let card_recherche = await Promise.all   (liste_recherche.map( cart =>  get_caracter(cart)))
    if (card_recherche.length === 0 ){
    not_fond( input_search )
    return
   }


       serchaffichag(card_recherche)
   
   }
      
      
      
      }

let input = search.addEventListener('input', async (event) => {

  let input_search = event.target.value.toLowerCase();

      await serch(input_search)

  

})
          grid.addEventListener('click' , async event => {
          const event_target =event.target.closest('#reessayer')
          if(!event_target){return}
           
           await serch(search.value.toLowerCase() )

         

  
})





// -------------------------------------------------------------

     // 4. FILTRE
// -------------------------------------------------------------



const type = document.querySelector('#filters')
const click_type = type.addEventListener('click', async (event) =>  {
  const select_type = event.target.innerHTML
  const clickd_button = event.target.closest('button')
  const remove_style_button = type.querySelectorAll('button')
  if (!clickd_button) {
    return;
  }
     

    
  grid.innerHTML = "";
   videcart(grid) 
  if (select_type != 'Tous') {
    search.value=''
     filter_botton_cliced =  select_type
     console.log(filter_botton_cliced)
     suprimernumberPlusfiltre()
    // let index_cart_by_type = creatures.filter(cart => cart.type.toLowerCase().includes(select_type))
    let caracterSommeType =  await  getSommeType (select_type)
    console.log( caracterSommeType )
    let depart = 0; 
    let caracter20Filter = await get20ByType (caracterSommeType , depart)
   
    console.log(caracter20Filter)
    grid.innerHTML =''
     
     
      affichez_filter (caracter20Filter  )


    remove_style_button.forEach(remov => remov.classList.remove('text-white', 'border-ink', 'bg-ink'))
    clickd_button.classList.add('text-white', 'border-ink', 'bg-ink')





  } else {
    filter_botton_cliced = 'Tous'
      search.value=''
    Affichez(creatures , grid)

    remove_style_button.forEach(remov => remov.classList.remove('text-white', 'border-ink', 'bg-ink'))
    clickd_button.classList.add('text-white', 'border-ink', 'bg-ink')
  }


})



// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.

let id_check = false;
let name_check = false;
let level_check = false;
let stat1_check = false;
let stat2_check = false;
let stat3_check = false;
let image_check = false;
let description_check = false;



const get_form = document.querySelector('#creature-form');
const listener = get_form.addEventListener('input', (event) => {
  const get_input_value = event.target.value
  const get_input_name = event.target.name
   let arry_id = []; 
  creatures.forEach(idtcheck => {
     arry_id.push(idtcheck.id)
   } )
  
  if (get_input_name == "id" && !arry_id.includes(get_input_value) ) {
    let regix = /^\x23[0-9]{3}$/
      id_check =     regix.test(get_input_value)
     console.log(id_check)
    

  }else if (get_input_name== "name"){
  let regixn = /^[a-zA-Z0-9]+$/ ;
    name_check = regixn.test(get_input_value)
    console.log(name_check)



  }  else if (get_input_name== "level"){
    let regixl = /^[a-zA-Z0-9 ]+$/
     level_check = regixl.test(get_input_value) 
     console.log(level_check)
    
  }else if (get_input_name == "stat1"){
    let regixs1 = /^[0-9]{1,3}$/ 
    stat1_check = regixs1.test(get_input_value)
     console.log(stat1_check)
   } 
  else if (get_input_name == "stat2"){
    let regixs2 = /^[0-9]{1,3}$/ 
     stat2_check = regixs2.test(get_input_value)
      console.log(stat2_check)
   }  else if (get_input_name == "stat3"){
    let regixs3 = /^[0-9]{1,3}$/ 
     stat3_check = regixs3.test(get_input_value)
       console.log(stat3_check)
   }  else if (get_input_name == "image"){
    let regixim =  /^https?:\/\/.+\.png$/ ; 
      image_check = regixim.test(get_input_value)
          console.log(image_check)
    
   }else if (get_input_name == "description"){
    let regixdes =  /^.{10,200}$/  ; 
     description_check = regixdes.test(get_input_value)
       console.log(description_check)
   }
   const checks = { id: id_check, name: name_check, level: level_check, stat1: stat1_check, stat2: stat2_check, stat3: stat3_check, image: image_check, description: description_check }
   const span_erreur = event.target.closest('label').querySelector('.error-message')
   if (checks[get_input_name] == false) {
     span_erreur.textContent = "Format incorrect"
   } else {
     span_erreur.textContent = ""
   }
   const submitbouton = get_form.querySelector("#submit")
   if ( id_check && name_check  && level_check && stat1_check  && stat2_check && stat3_check && description_check  ){
       
        submitbouton.removeAttribute ("disabled")
         }else {
        submitbouton.setAttribute("disabled","")
   }
        })
       const  listenerB =get_form.addEventListener("submit" , (event)=> {
           event.preventDefault();
          const nwe_data = new FormData (get_form) ; 
          const data_add = {
            id:nwe_data.get("id"), 
            name:nwe_data.get("name"),
            type:nwe_data.get("type"),
            level:nwe_data.get("level"),
            stats:{hp:nwe_data.get("stat1"), attack:nwe_data.get("stat2"),defence:nwe_data.get("stat3")},
            image:nwe_data.get("image"),
            description:nwe_data.get("description")

          }
          creatures.push(data_add)
          grid.innerHTML =""
          Affichez()
          let id_check = false;
         name_check = false;
          level_check = false;
         stat1_check = false;
         stat2_check = false;
         stat3_check = false;
         image_check = false;
         description_check = false;
         get_form.reset( );

          
        })
 ////////////---------------------------------------------
    
//                 favoriiit 

//////////// ---------------------------------------------

      grid.addEventListener('click' , async event => {
        const clickevent = event.target.closest('[data-fav]')
        if (!clickevent ){
          return 
        }
         const getIdCart = clickevent.dataset.fav
         console.log (getIdCart)
         await addFavLS (getIdCart)
         clickevent.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#EA3323"><path d="M12,21l-1.45-1.3q-2.53-2.27-4.18-3.92q-1.65-1.65-2.63-2.96Q2.78,11.5 2.39,10.4T2,8.15Q2,5.8 3.58,4.22T7.5,2.65q1.3,0 2.48,0.55T12,4.75q0.85-1 2.03-1.55T16.5,2.65q2.35,0 3.93,1.57T22,8.15q0,1.15-0.39,2.25t-1.36,2.41q-0.97,1.31-2.63,2.96q-1.65,1.65-4.17,3.92L12,21Z"/></svg>`
         clickevent.removeAttribute('data-fav')
         clickevent.setAttribute('data-remfav' , `${getIdCart}`)
         affechezFav(  fav_aj)
         })
        grid.addEventListener('click' , async event => {
        const clickeventremov = event.target.closest('[data-remfav]')
        if (!clickeventremov){
          return
        }
        const getIdCartRemov =  clickeventremov.dataset.remfav
          removeFavLS(getIdCartRemov)
          clickeventremov.innerHTML=` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#EA3323"><path d="M12,21l-1.45-1.3q-2.53-2.27-4.18-3.92q-1.65-1.65-2.63-2.96Q2.78,11.5 2.39,10.4T2,8.15Q2,5.8 3.58,4.22T7.5,2.65q1.3,0 2.48,0.55T12,4.75q0.85-1 2.03-1.55T16.5,2.65q2.35,0 3.93,1.57T22,8.15q0,1.15-0.39,2.25t-1.36,2.41q-0.97,1.31-2.63,2.96q-1.65,1.65-4.17,3.92L12,21Zm0-2.7q2.4-2.15 3.95-3.69t2.45-2.67t1.25-2.03Q20,9.02 20,8.15q0-1.5-1-2.5t-2.5-1q-1.17,0-2.17,0.66q-1,0.66-1.38,1.69h-1.9Q10.68,5.97 9.68,5.31T7.5,4.65q-1.5,0-2.5,1T4,8.15Q4,9.02 4.35,9.91T5.6,11.94t2.45,2.67T12,18.3Zm0-6.83Z"/></svg>`
          clickeventremov.removeAttribute('data-remfav')
          clickeventremov.setAttribute('data-fav' , `${getIdCartRemov}`)
          affechezFav(  fav_aj)
        })








// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
       let ajout_list= []
    const ajout_listener = grid.addEventListener('click' , (event)=> {
       const ajout_input = event.target.closest('#ajouter')
       const cart_click = event.target.closest('.select_card')
       const erreur_messag = document.querySelector('#message')
       const get_team_div = document.getElementById('team_aj')
       const find_id = document.querySelector('.find_cart')
       






       
          if (!ajout_input){return}
        const get_id_aj =find_id.textContent
         console.log(get_id_aj)
       const get_index = creatures.findIndex(element => element.id == get_id_aj)
      const   get_image_aj = creatures[get_index].image 
      const get_name_aj = creatures[get_index].name
       let data_object = {
        id:get_id_aj,
        image:get_image_aj,
        name:get_name_aj
       }
       console.log(data_object)
       
        if (ajout_list.length <  6 && !ajout_list.some(element => element.image == get_image_aj) ){
          ajout_list.push(data_object)
          erreur_messag.innerHTML = ''
          const get_count= document.getElementById('team-count')
             get_count.textContent = `${ajout_list.length}`
             const get_count2= document.getElementById('team-count2')
            get_count2.textContent = `${ajout_list.length}`
            ajout_input.setAttribute('disabled', '')
            details.querySelector('#ajouter').setAttribute('disabled', '')
           

            get_team_div.innerHTML =""
          ajout_list.forEach(element => {
             get_team_div.insertAdjacentHTML('beforeend' , `<div class="relative w-[120px]   h-[70px] flex items-center bg-brand-light rounded-[20px]">
               <img src="${element.image}" title="${element.name}" width="70" class="  hover:-translate-y-2 hover:scale-120 mx-auto  transition-transform duration-300" >
               <button type="button" data-id="${element.id}" aria-label="Retirer ${element.name}" class="retirer absolute -right-2 -top-2 h-7 w-7 rounded-full border-2 border-ink bg-white text-xs font-bold focus-visible:outline focus-visible:outline-2">✕</button>
            </div>`)

          })
        } else if (ajout_list.length == 6){
          erreur_messag.innerHTML=''

          erreur_messag.insertAdjacentHTML('beforeend', `         <p class="error-message text-sm font-normal text-red-600 ">team is full</p>`)
        } 


    })

const get_team_div_r = document.getElementById('team_aj')
const retirer_listener = get_team_div_r.addEventListener('click', (event) => {
  const retirer_bouton = event.target.closest('.retirer')
  if (!retirer_bouton) { return }
  const id_retirer = retirer_bouton.dataset.id

  ajout_list = ajout_list.filter(element => element.id != id_retirer)

  document.getElementById('team-count').textContent = `${ajout_list.length}`
  document.getElementById('team-count2').textContent = `${ajout_list.length}`
  document.querySelector('#message').innerHTML = ''

  get_team_div_r.innerHTML = ""
  ajout_list.forEach(element => {
    get_team_div_r.insertAdjacentHTML('beforeend', `<div class="relative w-[120px]   h-[70px] flex items-center bg-brand-light rounded-[20px]">
               <img src="${element.image}" title="${element.name}" width="70" class="  hover:-translate-y-2 hover:scale-120 mx-auto  transition-transform duration-300" >
               <button type="button" data-id="${element.id}" aria-label="Retirer ${element.name}" class="retirer absolute -right-2 -top-2 h-7 w-7 rounded-full border-2 border-ink bg-white text-xs font-bold focus-visible:outline focus-visible:outline-2">✕</button>
            </div>`)
  })

  grid.querySelectorAll('.select_card').forEach(card => {
    if (card.querySelector('.find_cart').textContent == id_retirer) {
      card.querySelector('#ajouter').removeAttribute('disabled')
    }
  })

  const bouton_detail = details.querySelector('#ajouter')
  if (bouton_detail && bouton_detail.dataset.id == id_retirer) {
    bouton_detail.removeAttribute('disabled')
  }
})




// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------

