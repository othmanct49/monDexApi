// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.


// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
 
import { creatures } from './data.js'
let grid = document.getElementById('grid')
  ;



function Affichez() {
  creatures.forEach(cart => {



    grid.insertAdjacentHTML('beforeend', `  <article   class="select_card  flex flex-col gap-3 rounded-card bg-white  hover:-translate-y-4 hover:shadow-lg transition-all duration-300  p-3 pb-4">
          
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
          <img src="${cart.image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 

            <span class="find_cart absolute left-3 top-2 font-mono text-sm text-muted">${cart.id}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${cart.name}</h3>
            <span class="fend_type rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${cart.type}</span>
          </div>
          <p class="text-sm text-muted">${cart.level} ·${Number(cart.stats.hp) + Number(cart.stats.attack) +Number( cart.stats.defence)} </p>
          <button id="ajouter" type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article> ` )

  });
}
Affichez();












// -------------------------------------------------------------


// -------------------------------------------------------------
// 2. DÉTAIL
// const cart= document.querySelectorAll('.select');
// cart.addEventlistener("click"; get_cart ) ;
let details = document.getElementById('detail')
grid.addEventListener('click', (event) => {
  let clicked = event.target.closest('.select_card')
  if (clicked) {
    const card_select = clicked.querySelector('.find_cart')
    const id_card_select = card_select.innerHTML
    console.log(id_card_select)
    const index_card_select = creatures.findIndex(element => element.id == id_card_select)




    details.innerHTML = `<div class="flex items-center justify-between">
            <span class="font-mono text-sm text-muted">${creatures[index_card_select].id} · Détail</span>
            <button  type="button" aria-label="Fermer le détail" class="close_bot btn-outline w-11 px-0">✕</button>
          </div>
          <div class="flex h-48 items-center justify-center rounded-2xl bg-brand-light">
            <img src="${creatures[index_card_select].image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 
          </div> 
          <div class="flex items-center justify-between">
            <h2 class="font-display text-3xl font-extrabold">${creatures[index_card_select].name}</h2>
            <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold">${creatures[index_card_select].type}</span>
          </div>
          <p class="text-gray-700">${creatures[index_card_select].description}<</p>
          <div class="flex flex-col gap-2 text-sm">
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2">
            <span class="font-bold">PV</span>
            <div class="h-3  w-full  rounded-full bg-ground">
              <span class="block h-3  rounded-full bg-brand" style="width:${creatures[index_card_select].stats.hp}%" ></span>
            </div>
            <span class="text-right font-mono">${creatures[index_card_select].stats.hp}</span>
            </div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold">Attaque</span><span class="h-3 rounded-full bg-ground"><span class="block h-3  rounded-full bg-brand" style="width:${creatures[index_card_select].stats.attack}% " ></span></span><span class="text-right font-mono">${creatures[index_card_select].stats.attack} </span></div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold">Défense</span><span class="h-3 rounded-full bg-ground"><span class="block h-3  rounded-full bg-brand"style="width:${creatures[index_card_select].stats.defence}% " ></span></span><span class="text-right font-mono">${creatures[index_card_select].stats.defence}</span></div>
          </div>
          <button id="ajouter" data-id="${creatures[index_card_select].id}" ${ajout_list.some(element => element.id == creatures[index_card_select].id) ? 'disabled' : ''} type="button" class="btn-primary">Ajouter à l'équipe</button>` }








}


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

let input = search.addEventListener('input', (event) => {
  let input_search = event.target.value.toLowerCase();
  grid.innerHTML = " "
  let card_recherche = creatures.filter(arg => arg.name.toLowerCase().includes(input_search))

  card_recherche.forEach(cart => {
    grid.insertAdjacentHTML('beforeend', `  <article   class="select_card  flex flex-col gap-3 rounded-card bg-white  hover:-translate-y-4 hover:shadow-lg transition-all duration-300  p-3 pb-4">
          
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
          <img src="${cart.image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 

            <span class="find_cart absolute left-3 top-2 font-mono text-sm text-muted">${cart.id}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${cart.name}</h3>
            <span class="fend_type rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${cart.type}</span>
          </div>
          <p class="text-sm text-muted">${cart.level} ·${cart.stats.hp + cart.stats.attack + cart.stats.defence} </p>
          <button id="ajouter" type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article> ` )


  })
})





// -------------------------------------------------------------


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
const type = document.querySelector('#filters')
const click_type = type.addEventListener('click', (event) => {
  const select_type = event.target.innerHTML.toLowerCase()
  const clickd_button = event.target.closest('button')
  const remove_style_button = type.querySelectorAll('button')
  if (!clickd_button) {
    return;
  }

  grid.innerHTML = "";
  if (select_type != 'tous') {
    let index_cart_by_type = creatures.filter(cart => cart.type.toLowerCase().includes(select_type))
    index_cart_by_type.forEach(cart => {
      grid.insertAdjacentHTML('beforeend', `  <article   class="select_card  flex flex-col gap-3 rounded-card bg-white  hover:-translate-y-4 hover:shadow-lg transition-all duration-300  p-3 pb-4">
          
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
          <img src="${cart.image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 

            <span class="find_cart absolute left-3 top-2 font-mono text-sm text-muted">${cart.id}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${cart.name}</h3>
            <span class="fend_type rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${cart.type}</span>
          </div>
          <p class="text-sm text-muted">${cart.level} ·${cart.stats.hp + cart.stats.attack + cart.stats.defence} </p>
          <button id="ajouter" type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article> ` )
    })

    remove_style_button.forEach(remov => remov.classList.remove('text-white', 'border-ink', 'bg-ink'))
    clickd_button.classList.add('text-white', 'border-ink', 'bg-ink')





  } else {
    Affichez()
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
       const find_id = cart_click.querySelector('.find_cart')
       






       
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
