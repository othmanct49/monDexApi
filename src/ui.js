

export function Affichez(creatures , dom ) {
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
          <p class="text-sm text-muted">${cart.level} ·${Number(cart.stats.hp) + Number(cart.stats.attack) +Number( cart.stats.defence)} </p>
          <button id="ajouter" type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article> ` )

  });
}
