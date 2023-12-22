<script>
    const concerts = [
      {
        name: "MC Gey",
        description: "Rapper MC Gey vystoupí v rámci svého turné Tour na dobrou noc 2023 v ostravském klubu Barrák 27. 4. 2023.",
        url: "https://goout.net/cs/mc-gey/szitaav/"
      },
      {
        name: "Labello: Flexbus Tour",
        description: "Labello vyráží na Flexbus Tour po českých městech. Jednou ze zastávek bude i ostravský klub Barrák.",
        url: "https://goout.net/cs/labello-flexbus-tour/szedicv/"
      },
      {
        name: "Wohnout",
        description: "Kapela Wohnout se po několika letech vrací na festival Barrák music hrad. Česká rocková kapela vystoupí na Slezskoostravském hradě 30. června.",
        url: "https://goout.net/cs/wohnout/sznxnjv/"
      },
      {
        name: "Luisa + Nia",
        description: "Slovenské raperky Luisa a Nia dorazí poprvé do Ostravy. Vystoupí 12. května v ostravském klubu Barrák.",
        url: "https://goout.net/cs/luisa+nia/szssgiv/"
      },
      {
        name: "Renne Dang + support: Moje droga",
        description: "Renne Dang přijede do Nového Jičína. V Klubu Všesmír vystoupí 28. dubna. Jako support se představí 28. dubna.",
        url: "https://goout.net/cs/renne-dang+support-moje-droga/sznosmv/"
      }
    ];
</script>


<h2 class="bg-gray-800 text-center text-3xl font-medium pt-8 text-slate-200" id="koncerty">Koncerty v Ostravě v roce 2023</h2>
<div class="bg-gray-800 py-2 h-1/3 flex items-center flex-col">
  <div class="my-7 px-5 w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
    {#each concerts as concert}
      <div class="bg-slate-100 rounded-lg overflow-hidden shadow-md mb-4">
        <div class="p-4">
            <h3 class="text-xl font-medium mb-2">{concert.name}</h3>
            <p class="text-gray-700 mb-4">{concert.description}</p>
            <a href="{concert.url}" target="_blank" class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full">
            Vstupenky
            </a>
        </div>
      </div>
    {/each}
  </div>
</div>

