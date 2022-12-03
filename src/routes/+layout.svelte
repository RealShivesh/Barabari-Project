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
        .arrow {
            transform: translateX(-7px) scale(1);
            animation: 1.5s wobble ease infinite;
            background: #fff;
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

    <hr class="w-50 o-50" />
    <!-- <footer class="p10 w-100" style="background: var(--yellow);font-size:0.8em">
        <div class="w-100 tc">
            <h3>The Barabari Project</h3>
            <h4><i>Universal Access To Quality Jobs</i></h4>
        </div>
        <div class="f j-ar fw">
            <ul>
                <li><a href="/candidate">Candidate</a></li>
                <li><a href="/volunteer">Volunteer</a></li>
                <li><a href="/mentor">Mentor</a></li>
            </ul>
            <ul>
                <li><a href="/team">Team</a></li>
                <li>Links2</li>
                <li>Links3</li>
            </ul>
        </div>
    </footer> -->
</main>

<style>
    #content {
        z-index: 1;
        scroll-behavior: smooth;
    }
    /* ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        padding: 5px;
    } */

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
