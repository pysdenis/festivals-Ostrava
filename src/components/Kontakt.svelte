<script>
  import { onMount } from 'svelte';
  import mapboxgl from 'mapbox-gl';
  
  const address = 'Dolní vítkovice ostrava';
  const lat = 49.817073;
  const lon = 18.277947;
  
  let map;
  onMount(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoicHlzZGVuaXMiLCJhIjoiY2xnd2kxOGVrMGU4ZjNkcGw0aWwzcmdtcSJ9.uc48zfG8ZR4mCBRz7QAnsA';
    map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lon, lat],
      zoom: 14
    });
    new mapboxgl.Marker()
      .setLngLat([lon, lat])
      .addTo(map);
  });
</script>

<div class="p-8 bg-gray-800 text-slate-200" id="kontakt">
  <h1 class="text-3xl mb-4 text-center font-medium">
    O nás
  </h1>
    <p class="mb-4 text-center px-28">
      Vítejte v naší společnosti, která se specializuje na marketingovou podporu koncertů a festivalů. Jsme tým nadšených a zkušených profesionálů, kteří se zaměřují na tvorbu a realizaci úspěšných kampaní pro kulturní akce. S více než desetiletou zkušeností v oboru marketingu jsme vybudovali reputaci spolehlivého a kreativního partnera pro organizátory koncertů, festivalů a dalších kulturních akcí. V naší práci se zaměřujeme na vytváření strategií, které pomáhají našim klientům zvýšit povědomí o jejich akcích, získat nové fanoušky a posílit vztahy se stávajícími zákazníky. Pomáháme našim klientům vytvořit silné značky, které dokážou oslovit širokou cílovou skupinu lidí, a poskytujeme jim nástroje, které potřebují k úspěšnému marketingu svých kulturních akcí.
    </p>
    <p class="mb-4 text-center px-28">
      Naše služby zahrnují širokou škálu marketingových aktivit, včetně tvorby reklamních kampaní, sociálního média, SEO, PPC, emailového marketingu, tvorby obsahu a mnoho dalšího. Jsme schopni přizpůsobit se potřebám každého klienta a navrhnout marketingovou strategii, která bude nejúčinnější pro jejich konkrétní kulturní akci. Naše cílem je pomoci našim klientům dosáhnout úspěchu v oblasti marketingu a poskytnout jim podporu, kterou potřebují k tomu, aby mohli uspět v oblasti kulturních akcí. Pokud hledáte spolehlivého a kreativního partnera pro marketing vaší kulturní akce, kontaktujte nás a rádi vám pomůžeme.
    </p>
    <h2 class="text-3xl mb-4 text-center font-medium">
      Kontakt
    </h2>
    <div class="flex items-center px-28">
      <ul class="pl-4 mb-4">
        <li>Email: example@example.com</li>
        <li>Telefon: +420 123 456 789</li>
        <li>Adresa: {address}</li>
      </ul>
      <div id="map" class="ml-28 h-96 w-full"></div>
    </div>
</div>
