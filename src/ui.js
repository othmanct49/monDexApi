
///// affichez dans grid :
export function Affichez(creatures, dom) {
  creatures.forEach(cart => {



    dom.insertAdjacentHTML('beforeend', `  <article   class="select_card  flex flex-col gap-3 rounded-card bg-white  hover:-translate-y-4 hover:shadow-lg transition-all duration-300  p-3 pb-4">
          
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
          <img src="${cart.image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 

            <span class="find_cart absolute left-3 top-2 font-mono text-sm text-muted">${cart.id}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${cart.name}</h3>
            <span class="fend_type rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${cart.type}</span>
          </div>
          <p class="text-sm text-muted">${cart.level} ·${Number(cart.stats.hp) + Number(cart.stats.attack) + Number(cart.stats.defence)} </p>
          <button id="ajouter" type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article> ` )

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
            <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold">${creatures.type}</span>
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
export  async function affichez_filter(cart , grid ) {
 

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
}
