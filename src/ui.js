import {getfavLs} from './storage.js'
///// affichez dans grid :
export function Affichez(creatures, dom  ) {
   const LocS = getfavLs()

  grid.innerHTML=''
  creatures.forEach(cart => {
      if (LocS.some(item => item.id == cart.id) ){


    dom.insertAdjacentHTML('beforeend', `  <article   class="select_card  flex flex-col gap-3 rounded-card bg-white  hover:-translate-y-4 hover:shadow-lg transition-all duration-300  p-3 pb-4">
          
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
          <img src="${cart.image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 
              <button  data-remfav="${cart.id}" class=" absolute bg-transparent border-0 right-1 top-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#EA3323"><path d="M12,21l-1.45-1.3q-2.53-2.27-4.18-3.92q-1.65-1.65-2.63-2.96Q2.78,11.5 2.39,10.4T2,8.15Q2,5.8 3.58,4.22T7.5,2.65q1.3,0 2.48,0.55T12,4.75q0.85-1 2.03-1.55T16.5,2.65q2.35,0 3.93,1.57T22,8.15q0,1.15-0.39,2.25t-1.36,2.41q-0.97,1.31-2.63,2.96q-1.65,1.65-4.17,3.92L12,21Z"/></svg></button>


            <span class="find_cart absolute left-3 top-2 font-mono text-sm text-muted">${cart.id}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${cart.name}</h3>
            <span class="fend_type rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${cart.type.join(" / ")}</span>
          </div>
          <p class="text-sm text-muted">${cart.level} ·${Number(cart.stats.hp) + Number(cart.stats.attack) + Number(cart.stats.defence)} </p>
          <button id="ajouter" type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article> ` )

} else {
  dom.insertAdjacentHTML('beforeend', `  <article   class="select_card  flex flex-col gap-3 rounded-card bg-white  hover:-translate-y-4 hover:shadow-lg transition-all duration-300  p-3 pb-4">
          
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
          <img src="${cart.image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 
              <button  data-fav="${cart.id}" class=" absolute bg-transparent border-0 right-1 top-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#EA3323"><path d="M12,21l-1.45-1.3q-2.53-2.27-4.18-3.92q-1.65-1.65-2.63-2.96Q2.78,11.5 2.39,10.4T2,8.15Q2,5.8 3.58,4.22T7.5,2.65q1.3,0 2.48,0.55T12,4.75q0.85-1 2.03-1.55T16.5,2.65q2.35,0 3.93,1.57T22,8.15q0,1.15-0.39,2.25t-1.36,2.41q-0.97,1.31-2.63,2.96q-1.65,1.65-4.17,3.92L12,21Zm0-2.7q2.4-2.15 3.95-3.69t2.45-2.67t1.25-2.03Q20,9.02 20,8.15q0-1.5-1-2.5t-2.5-1q-1.17,0-2.17,0.66q-1,0.66-1.38,1.69h-1.9Q10.68,5.97 9.68,5.31T7.5,4.65q-1.5,0-2.5,1T4,8.15Q4,9.02 4.35,9.91T5.6,11.94t2.45,2.67T12,18.3Zm0-6.83Z"/></svg></button>


            <span class="find_cart absolute left-3 top-2 font-mono text-sm text-muted">${cart.id}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${cart.name}</h3>
            <span class="fend_type rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${cart.type.join(" / ")}</span>
          </div>
          <p class="text-sm text-muted">${cart.level} ·${Number(cart.stats.hp) + Number(cart.stats.attack) + Number(cart.stats.defence)} </p>
          <button id="ajouter" type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article> ` )

}

});
}
// Affichez details 
export function Affichez_details(details,  creatures, ajout_list) {

  details.innerHTML = `<div class="flex items-center justify-between">
            <span class="font-mono text-sm text-muted">${creatures.id} · Détail</span>
            <button  type="button" aria-label="Fermer le détail" class="close_bot btn-outline w-11 px-0">✕</button>
          </div>
          <div class="flex h-48 items-center justify-center rounded-2xl bg-brand-light">
            <img src="${creatures.image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 
          </div> 
          <div class="flex items-center justify-between">
            <h2 class="font-display text-3xl font-extrabold">${creatures.name}</h2>
            <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold">${creatures.type.join(" / ")}</span>
          </div>
          <p class="text-gray-700">${creatures.description}</p>
          <div class="flex flex-col gap-2 text-sm">
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2">
            <span class="font-bold">PV</span>
            <div class="h-3  w-full  rounded-full bg-ground">
              <span class="block h-3  rounded-full bg-brand" style="width:${creatures.stats.hp}%" ></span>
            </div>
            <span class="text-right font-mono">${creatures.stats.hp}</span>
            </div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold">Attaque</span><span class="h-3 rounded-full bg-ground"><span class="block h-3  rounded-full bg-brand" style="width:${creatures.stats.attack}% " ></span></span><span class="text-right font-mono">${creatures.stats.attack} </span></div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold">Défense</span><span class="h-3 rounded-full bg-ground"><span class="block h-3  rounded-full bg-brand"style="width:${creatures.stats.defence}% " ></span></span><span class="text-right font-mono">${creatures.stats.defence}</span></div>
          </div>
          <button id="ajouter" data-id="${creatures.id}" ${ajout_list.some(element => element.id == creatures.id) ? 'disabled' : ''} type="button" class="btn-primary">Ajouter à l'équipe</button>`
}
////// affechez felter 
export  async function affichez_filter( caracter20Filter ) {
   const LocS = getfavLs()
  caracter20Filter.forEach( cart => {
       if ( LocS.some(item => item.id == cart.id)){

   grid.insertAdjacentHTML('beforeend', `  <article   class="select_card  flex flex-col gap-3 rounded-card bg-white  hover:-translate-y-4 hover:shadow-lg transition-all duration-300  p-3 pb-4">
          
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
          <img src="${cart.image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 
          <button  data-remfav="${cart.id}" class=" absolute bg-transparent border-0 right-1 top-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#EA3323"><path d="M12,21l-1.45-1.3q-2.53-2.27-4.18-3.92q-1.65-1.65-2.63-2.96Q2.78,11.5 2.39,10.4T2,8.15Q2,5.8 3.58,4.22T7.5,2.65q1.3,0 2.48,0.55T12,4.75q0.85-1 2.03-1.55T16.5,2.65q2.35,0 3.93,1.57T22,8.15q0,1.15-0.39,2.25t-1.36,2.41q-0.97,1.31-2.63,2.96q-1.65,1.65-4.17,3.92L12,21Z"/></svg></button>
            <span class="find_cart absolute left-3 top-2 font-mono text-sm text-muted">${cart.id}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${cart.name}</h3>
            <span class="fend_type rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${cart.type.join(" / ")}</span>
          </div>
          <p class="text-sm text-muted">${cart.level} ·${cart.stats.hp + cart.stats.attack + cart.stats.defence} </p>
          <button id="ajouter" type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article> ` )}
        else {
             grid.insertAdjacentHTML('beforeend', `  <article   class="select_card  flex flex-col gap-3 rounded-card bg-white  hover:-translate-y-4 hover:shadow-lg transition-all duration-300  p-3 pb-4">
          
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
          <img src="${cart.image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 
          <button  data-fav="${cart.id}" class=" absolute bg-transparent border-0 right-1 top-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#EA3323"><path d="M12,21l-1.45-1.3q-2.53-2.27-4.18-3.92q-1.65-1.65-2.63-2.96Q2.78,11.5 2.39,10.4T2,8.15Q2,5.8 3.58,4.22T7.5,2.65q1.3,0 2.48,0.55T12,4.75q0.85-1 2.03-1.55T16.5,2.65q2.35,0 3.93,1.57T22,8.15q0,1.15-0.39,2.25t-1.36,2.41q-0.97,1.31-2.63,2.96q-1.65,1.65-4.17,3.92L12,21Zm0-2.7q2.4-2.15 3.95-3.69t2.45-2.67t1.25-2.03Q20,9.02 20,8.15q0-1.5-1-2.5t-2.5-1q-1.17,0-2.17,0.66q-1,0.66-1.38,1.69h-1.9Q10.68,5.97 9.68,5.31T7.5,4.65q-1.5,0-2.5,1T4,8.15Q4,9.02 4.35,9.91T5.6,11.94t2.45,2.67T12,18.3Zm0-6.83Z"/></svg></button>
            <span class="find_cart absolute left-3 top-2 font-mono text-sm text-muted">${cart.id}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${cart.name}</h3>
            <span class="fend_type rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${cart.type.join(" / ")}</span>
          </div>
          <p class="text-sm text-muted">${cart.level} ·${cart.stats.hp + cart.stats.attack + cart.stats.defence} </p>
          <button id="ajouter" type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article> ` )
        }
      
      
      })
}
// affichage serch 
export function serchaffichag (card_recherche){
   const LocS = getfavLs()
  grid.innerHTML = ''

  card_recherche.forEach(cart => {
  if ( LocS.some(item => item.id == cart.id)){
    grid.insertAdjacentHTML('beforeend', `  <article   class="select_card   flex flex-col gap-3 rounded-card bg-white  hover:-translate-y-4 hover:shadow-lg transition-all duration-300  p-3 pb-4">
          
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
          <img src="${cart.image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 
                       <button  data-remfav="${cart.id}" class=" absolute bg-transparent border-0 right-1 top-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#EA3323"><path d="M12,21l-1.45-1.3q-2.53-2.27-4.18-3.92q-1.65-1.65-2.63-2.96Q2.78,11.5 2.39,10.4T2,8.15Q2,5.8 3.58,4.22T7.5,2.65q1.3,0 2.48,0.55T12,4.75q0.85-1 2.03-1.55T16.5,2.65q2.35,0 3.93,1.57T22,8.15q0,1.15-0.39,2.25t-1.36,2.41q-0.97,1.31-2.63,2.96q-1.65,1.65-4.17,3.92L12,21Z"/></svg></button>

          <span class="find_cart absolute left-3 top-2 font-mono text-sm text-muted">${cart.id}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${cart.name}</h3>
            <span class="fend_type rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${cart.type.join(" / ")}</span>
          </div>
          <p class="text-sm text-muted">${cart.level} ·${cart.stats.hp + cart.stats.attack + cart.stats.defence} </p>
          <button id="ajouter" type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article> ` )} 
        else {
          grid.insertAdjacentHTML('beforeend', `  <article   class="select_card   flex flex-col gap-3 rounded-card bg-white  hover:-translate-y-4 hover:shadow-lg transition-all duration-300  p-3 pb-4">
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
         
          <img src="${cart.image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 
           <button  data-fav="${cart.id}" class=" absolute bg-transparent border-0 right-1 top-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#EA3323"><path d="M12,21l-1.45-1.3q-2.53-2.27-4.18-3.92q-1.65-1.65-2.63-2.96Q2.78,11.5 2.39,10.4T2,8.15Q2,5.8 3.58,4.22T7.5,2.65q1.3,0 2.48,0.55T12,4.75q0.85-1 2.03-1.55T16.5,2.65q2.35,0 3.93,1.57T22,8.15q0,1.15-0.39,2.25t-1.36,2.41q-0.97,1.31-2.63,2.96q-1.65,1.65-4.17,3.92L12,21Zm0-2.7q2.4-2.15 3.95-3.69t2.45-2.67t1.25-2.03Q20,9.02 20,8.15q0-1.5-1-2.5t-2.5-1q-1.17,0-2.17,0.66q-1,0.66-1.38,1.69h-1.9Q10.68,5.97 9.68,5.31T7.5,4.65q-1.5,0-2.5,1T4,8.15Q4,9.02 4.35,9.91T5.6,11.94t2.45,2.67T12,18.3Zm0-6.83Z"/></svg></button>

            <span class="find_cart absolute left-3 top-2 font-mono text-sm text-muted">${cart.id}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${cart.name}</h3>
            <span class="fend_type rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${cart.type.join(" / ")}</span>
          </div>
          <p class="text-sm text-muted">${cart.level} ·${cart.stats.hp + cart.stats.attack + cart.stats.defence} </p>
          <button id="ajouter" type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article> ` )
        }


  })
}
export function videcart (){
  grid.innerHTML = ''
  for (let i = 0 ; i < 8 ; i ++){
    grid.insertAdjacentHTML('beforeend', ` <article
  aria-hidden="true"
  class="flex flex-col gap-3 rounded-card bg-white p-3 pb-4 motion-safe:animate-pulse"
>
  <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
    <div class="absolute left-3 top-2 h-4 w-10 rounded bg-slate-200"></div>
    <div class="h-24 w-[240px] rounded-full bg-slate-200"></div>
  </div>

  <div class="flex items-center justify-between gap-2">
    <div class="h-6 w-1/2 rounded bg-slate-200"></div>
    <div class="h-7 w-16 rounded-full bg-brand-light"></div>
  </div>

  <div class="h-5 w-24 rounded bg-slate-200"></div>
  <div class="h-10 w-full rounded-xl bg-slate-100"></div>
</article>` )
  }
}
export function not_fond (input ){
  grid.innerHTML  = `<p> Aucune créature trouvée pour ${input} <p>`
}
// ===================================
//       affichez fav
// ==================================
export function affechezFav(  fav_aj){
     const LocS = getfavLs()
     console.log(LocS)
     fav_aj.innerHTML = ''
   LocS.forEach(element => {
            fav_aj.insertAdjacentHTML('beforeend' , `<div class="relative w-[120px]   h-[70px] flex items-center bg-brand-light rounded-[20px]">
               <img src="${element.image}" title="${element.name}" width="70" class="  hover:-translate-y-2 hover:scale-120 mx-auto  transition-transform duration-300" >
            </div>`)

          })

}

export function saveFAV (){


}