<script>
    let //
        innerHeight = 0,
        innerWidth = 0;
    import Meta from "../components/meta.svelte";

    const getAngle = (iw, ih) =>
        180 - Math.round((Math.atan(ih / iw) * 1800) / Math.PI) / 10;
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<svelte:head>
    <Meta title="Home" />
</svelte:head>

<section
    class="hero w-100 h-100 fade tc p-rel"
    style="
background: linear-gradient({getAngle(innerWidth, innerHeight) +
        'deg'}, #fff 0%, #fff 49.9%, var(--yellow) 50%, var(--yellow) 100%);
"
>
    <div id="hi" class="fade-up" style="margin-top: 2rem;">
        <span>Hi!</span>
    </div>
    <div id="weare" class="fade-up o-0" style="--delay: 2s;">
        <span>We are</span>
    </div>
    <img
        id="logo"
        class="fade o-0 p-abs"
        src="/icons/barabari.png"
        alt="logo"
    />
</section>
<section
    class="fw j-bw"
    style="
background: linear-gradient({getAngle(innerWidth, innerHeight) +
        'deg'}, #fff 0%, #fff 49.9%, var(--purple) 50%, var(--purple) 100%);
"
>
    <div id="left-2">LHS</div>
    <div id="right-2">RHS</div>
</section>

<style lang="scss">
    #logo {
        --delay: 4s;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    section {
        width: 100vw;
        min-height: 100vh;
    }
    img {
        height: 50vh;
        border-radius: 300px;
    }
    #hi,
    #weare {
        padding-left: 10px;
        font-size: 128px;
        text-align: left;
        width: auto;
    }
    @media (max-width: 600px) {
        #hi,
        #weare {
            font-size: 64px;
        }
    }
</style>
