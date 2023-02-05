<script>
    import { page } from "$app/stores";

    import Nav from "../layout/nav.svelte";
    import Landing from "./landing.svelte";

    const social = Object.freeze([
        {
            name: "GMail",
            icon: "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/envelope.svg",
            href: "mailto:thebarabariproject@gmail.com",
        },
        {
            name: "Instagram",
            icon: "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/square-instagram.svg",
            href: "https://www.instagram.com/thebarabariproject/",
        },
        {
            name: "Twitter",
            icon: "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/square-twitter.svg",
            href: "https://twitter.com/BarabariProject",
        },
        {
            name: "LinkedIn",
            icon: "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/linkedin.svg",
            href: "https://www.linkedin.com/company/the-barabari-project/",
        },
    ]);
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
        <div class="p-abs hero fade-right" style="background: #222;">
            <Landing />
        </div>
    {/if}
    <div id="content" style="z-index: 0;">
        <slot />
    </div>

    <footer
        class="p10 w-100 tc p5"
        style="background: var(--yellow);font-size:0.8em"
    >
        <div class="mx-a" style="max-width: 300px;">
            <div class="fw4" style="font-size:2rem;">The Barabari Project</div>
            <div class="p10" style="font-size:1.1em">
                <i>Universal Access To Quality Jobs</i>
            </div>
            <div class="f j-ar">
                {#each social as soc}
                    <a href={soc.href} class="p5">
                        <img
                            class="rx5 icon"
                            height="36px"
                            width="36px"
                            src={soc.icon}
                            alt={soc.name}
                        />
                    </a>
                {/each}
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
    .icon {
        object-fit: contain;
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
        animation-delay: 1.5s;
    }
</style>
