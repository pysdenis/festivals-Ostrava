<script>
    const festivals = [
      {
        name: "Beats for love",
        description: "Beats for love je největším hudebním festival v České republice. Nabízí nejlepší elektronickou hudbu na více než deseti pódiích.",
        url: "https://www.beatsforlove.cz/",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Beats_for_Love_%28logo%2C_hlavn%C3%AD_z%C3%A1kladn%C3%AD%29_2019.png"
      },
      {
        name: "Colours of Ostrava",
        description: "Colours of Ostrava je mezinárodní hudební festival s pestrou paletou žánrů, který se koná v průmyslové lokalitě Dolních Vítkovicích.",
        url: "https://www.colours.cz/",
        image: "https://www.colours.cz/getattachment/b0f86b7a-c37f-45f8-8527-cc02744d1ea4/CLRS2023_post.png.aspx?width=500&height=500"
      },
      {
        name: "Soldout festival",
        description: "Soldout festival je hudební festival zaměřený na rap a elektronickou hudbu. Koná se v prostorách areálu Dolní oblast Vítkovice.",
        url: "https://www.smsticket.cz/vstupenky/33357-soldout-festival-2023",
        image: "https://www.smsticket.cz/cdn/events/2023/33357/315-ec766bc5bc8c456c84114c3d9ed67e91.jpg"
      },
      {
        name: "Ostravský Majáles",
        description: "Tradiční majáles byl především oslavou středoškolských a vysokoškolských studentů, která se konala vždy na počátku jara, většinou 1. května. V názvu svátku vnímáme slovo máj – tedy období, které je obvykle spojováno s radostí, s oslavou mládí a krás studentského života.",
        url: "https://ostrava.majales.cz/",
        image: "https://ostrava.majales.cz/static/img/majales-logo-big.png"
      }
    ];
</script>
  
<h2 class="bg-gray-800 text-center text-3xl font-medium pt-8 pb-6 text-slate-200" id="festivaly">Festivaly v Ostravě v roce 2023</h2>
<div class="bg-gray-800 py-2">
  <div class="container mx-auto px-4 md:px-0">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each festivals as festival}
      <div class="bg-slate-100 rounded-lg overflow-hidden shadow-md">
        <div class="p-4">
          <div class="mb-4">
            <img class="w-full h-auto object-cover" src="{festival.image}" alt="{festival.name} logo">
          </div>
          <h3 class="text-xl font-medium mb-2">{festival.name}</h3>
          <p class="text-gray-700 mb-4">{festival.description}</p>
          <a href="{festival.url}" target="_blank" class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full">
            Vstupenky
          </a>
        </div>
      </div>
      {/each}
    </div>
  </div>
</div>