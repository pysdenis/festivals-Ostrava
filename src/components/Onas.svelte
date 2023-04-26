<script>
    export let contacts = [
      {
        label: "Adresa",
        value: "Dolní Vítkovice, Ostrava"
      },
      {
        label: "Telefon",
        value: "+420 123 456 789"
      },
      {
        label: "E-mail",
        value: "info@festivaly-ostrava.cz"
      }
    ];
  </script>
  
  <div class="bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="lg:text-center">
        <h2 class="text-base text-slate-200 font-semibold tracking-wide uppercase">O nás</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-200 sm:text-4xl">
          Festivaly a koncerty v Ostravě
        </p>
        <p class="mt-4 max-w-2xl text-xl text-slate-300 lg:mx-auto">
          Jsme organizace, která se specializuje na propagaci, marketing a organizaci festivalů a koncertů po Ostravě a okolí. Snažíme se přinášet kvalitní hudební zážitky a podporovat místní hudební scénu.
        </p>
      </div>
  
      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          {#each contacts as contact}
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-slate-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div class="ml-3">
                <dt class="text-lg leading-6 font-medium text-slate-100">{contact.label}</dt>
                <dd class="mt-2 text-base text-slate-300">{contact.value}</dd>
              </div>
            </div>
          {/each}
        </dl>
      </div>
    </div>
    <iframe title="mapa" style="border:none" src="https://frame.mapy.cz/s/dazenemunu" class="my-10 w-full " height="300" frameborder="0"></iframe>
  </div>
  