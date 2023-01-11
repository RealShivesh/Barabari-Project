<script>
    import { page } from "$app/stores";

    import Nav from "../layout/nav.svelte";
    import Landing from "./landing.svelte";
</script>

<main class="app p-rel">
    <Nav />
    <style>
        section {
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            width: 100vw;
            min-height: 100vh;
        }
        section:not(:first-of-type) {
            overflow: hidden;
        }
        .arrow {
            transform: translateX(-7px) scale(1);
            animation: 1.5s wobble ease infinite;
            background: #fff;
            max-height: 1.42em;
            position: absolute;
            right: 5px;
            bottom: 10px;
            color: var(--purple);
            padding: 2px 12px;
            border: 1px solid #fff;
            cursor: pointer;
            transition: transform 0.15s ease-in-out;
        }
        .arrow:hover {
            transform: translateX(-7px) scale(1.1);
            border: 1px solid var(--purple);
            color: var(--purple);
        }
        @media (prefers-reduced-motion) {
            .arrow {
                animation: none;
            }
        }
    </style>

    {#if $page.url.pathname === "/"}
        <div class="p-abs hero fade-right" style="background: var(--purple);">
            <Landing />
        </div>
    {/if}
    <div id="content" style="z-index: 0;">
        <slot />
    </div>

    <hr class="w-50 o-25" />
    <footer
        class="p10 w-100 tc p5"
        style="background: var(--yellow);font-size:0.8em"
    >
        <div class="w-100 f j-ct">
            <img
                class="p0 m10"
                height="48px"
                src="/icons/barabari.svg"
                alt="logo"
            />
            <div class="p5" style="font-size:1.1em">
                <div class="fw7 p5">thebarabariproject@gmail.com</div>
                <div class="p5"><i>Universal Access To Quality Jobs</i></div>
            </div>
        </div>
    </footer>
</main>

<style>
    #content {
        z-index: 1;
        scroll-behavior: smooth;
    }

    @keyframes hero {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        99% {
            transform: translateX(50px);
            opacity: 0;
        }
        100% {
            transform: translateX(50px);
            opacity: 0;
            display: none;
        }
    }
    .hero {
        pointer-events: none;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        z-index: 1;

        opacity: 1;
        animation: 0.5s hero ease forwards;
        animation-delay: 4.1s;
    }
</style>
