<script>
    import { onMount } from "svelte";

    let checked;
    let location = "/";

    onMount(() => (location = window.location.pathname));

    const navItems = [
        {
            name: "Get Mentorship",
            href: "/candidate",
        },
        {
            name: "Be a Mentor",
            href: "/mentor",
        },
        {
            name: "Volunteer!",
            href: "/volunteer",
        },
    ];

    const navHandler = () => {
        checked = !checked;
        setTimeout(() => (location = window.location.pathname), 200);
    };
</script>

<nav class="p-stx mx-a w-100 p-rel">
    <div class="nav wait">
        <input type="checkbox" id="nav-check" bind:checked />
        <div class="nav-header">
            <a href="/" class="nav-title d-b" on:click={navHandler}>
                <img
                    class="p-rel"
                    src="/favicon.png"
                    height="22px"
                    width="22px"
                    alt=""
                    style="top:3px;"
                />
                The Barabari Project
            </a>
        </div>
        <div class="nav-btn p-abs">
            <label for="nav-check">
                <span />
                <span />
                <span />
            </label>
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="nav-links" on:click={navHandler}>
            {#each navItems as nav}
                <a class:active={nav.href === location} href={nav.href}>
                    {nav.name}
                </a>
            {/each}
        </div>
    </div>
</nav>

<!-- wrapper -->
<style lang="scss">
    @keyframes slideIn {
        0% {
            transform: translateY(-50px);
        }
        100% {
            transform: translateY(0);
        }
    }
    nav {
        animation: 0.4s slideIn 1s ease-in-out forwards;
        transform: translateY(-50px);
        z-index: 10;
        max-width: min(1200px, 100%);
    }
    @media (min-width: 600px) {
        nav {
            padding: 0 10px;
        }
    }
    .nav {
        display: block;
        height: 0;
        width: 100%;
        will-change: transform;
        color: #fff;
        font-weight: 400;

        & .nav-header {
            display: inline;
            & .nav-title {
                display: inline-block;
                font-size: 22px;
                padding: 10px 10px 10px 10px;
            }
        }
    }
    .active {
        background: #fff6;
    }

    .nav > .nav-btn {
        display: none;
    }

    .nav > .nav-links {
        display: inline;
        float: right;
        font-size: 18px;
    }

    .nav > .nav-links > a {
        transition: background 0.3s ease-in-out;
        font-size: 1.2rem;
        display: inline-block;
        padding: 13px 10px 13px 10px;
        text-decoration: none;
    }

    .nav > .nav-links > a:hover {
        background: #fff6;
    }

    .nav > #nav-check {
        display: none;
    }

    @media (max-width: 600px) {
        .nav > .nav-btn {
            display: inline-block;
            position: absolute;
            right: 0px;
            top: 0px;
        }
        .nav > .nav-btn > label {
            display: inline-block;
            width: 50px;
            height: 50px;
            padding: 13px;
        }

        .nav > .nav-btn > label > span {
            display: block;
            width: 25px;
            height: 7px;
            border-top: 2px solid white;
        }
        .nav > .nav-links {
            position: absolute;
            display: block;
            width: 100%;
            background: #222;
            height: 0px;
            transition: all 0.3s ease-in;
            overflow-y: hidden;
            top: 50px;
            left: 0px;
        }
        .nav > .nav-links > a {
            display: block;
            width: 100%;
        }
        .nav > #nav-check:not(:checked) ~ .nav-links {
            height: 0px;
        }
        .nav > #nav-check:checked ~ .nav-links {
            height: calc(100vh - 50px);
            overflow-y: auto;
        }
    }
</style>
