<script>
    import "../../app.css";    
    import Navbar from "../../components/Navbar.svelte";
    import Header from "../../components/Header.svelte";
    import MainCarousel from "../../components/MainCarousel.svelte";
    import Festivaly from "../../components/Festivaly.svelte";
	import Koncerty from "../../components/Koncerty.svelte";
</script>
<body>
    
    <Navbar />

    <Header />
    
    <MainCarousel />
 

    <Festivaly />

    <Koncerty />

</body>

<style lang="postcss">
    body {
        animation: fadeInPage ease 2s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    
    @keyframes fadeInPage {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>