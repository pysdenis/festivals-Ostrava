<script>
  import { onMount } from "svelte";
  import Splide from "@splidejs/splide";

  let options = {
    type: "loop",
    autoplay: true,
    interval: 18000,
    perPage: 1,
    perMove: 1,
    rewind: true,
    speed: 2000,
    pauseOnHover: true,
    pagination: false,
    arrows: false,
    drag: false
  };

  let images = [
    "img/carousel/1.jpg",
    "img/carousel/2.jpg",
    "img/carousel/3.jpg",
    "img/carousel/4.jpg",
    "img/carousel/5.jpg"
  ];

  let splide;

  onMount(() => {
    splide = new Splide("#carousel", options);
    splide.mount();
  });
</script>

<div id="carousel" class="splide">
  <div class="splide__track">
    <ul class="splide__list">
      {#each images as image}
        <li class="splide__slide">
          <img class="w-full opacity-90" style="object-fit: cover;" src={image} alt="">
        </li>
      {/each}
    </ul>
  </div>
</div>
