

<header class="header sticky top-0 bg-neutral-800 bg-opacity-80 shadow-md flex items-center justify-between px-8 py-02">
    <h1 class="w-3/12 logo">
        <a href="/home">
          <img class="h-6" src="img/ostravaLogo.png" alt="Logo Ostrava">
        </a>
    </h1>

    <nav class="nav font-semibold text-lg">
        <ul class="flex items-center">
            <li class="text-slate-200 p-4 border-b-2 border-cyan-500 border-opacity-0 hover:border-opacity-100 hover:text-cyan-500 duration-200 cursor-pointer">
              <a href="/home#festivaly">
                Festivaly
            </a>
            </li>
            <li class="text-slate-200 p-4 border-b-2 border-cyan-500 border-opacity-0 hover:border-opacity-100 hover:text-cyan-500 duration-200 cursor-pointer">
              <a href="/home#koncerty">
                Koncerty
            </a>
            </li>
            <li class="text-slate-200 p-4 border-b-2 border-cyan-500 border-opacity-0 hover:border-opacity-100 hover:text-cyan-500 duration-200 cursor-pointer">
              <a href="/contact">
                Kontakt
            </a>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        z-index: 100;
    }

    @media (max-width: 768px) {
        header {
            padding-left: 1.5%;
            padding-right: 1.5%;
        }
        .logo {
            width: auto;
        }
    }
</style>