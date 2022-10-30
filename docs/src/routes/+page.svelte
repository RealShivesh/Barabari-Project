<script>
    let //
        innerHeight = 0,
        innerWidth = 0;
    import Meta from "../components/meta.svelte";
    import Button from "../components/button.svelte";

    const getAngle = (iw, ih) =>
        Math.round((Math.atan(ih / iw) * 1800) / Math.PI) / 10;
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<svelte:head>
    <Meta title="Home" />
</svelte:head>

<section
    class="hero w-100 h-100 fade tc p-rel"
    style="
background: linear-gradient({180 -
        getAngle(innerWidth, innerHeight) +
        'deg'}, #fff 0%, #fff 49.9%, var(--yellow) 50%, var(--yellow) 100%);
"
>
    <div id="hi" class="fade-up">
        <span>Hi! <span style="font-size: 0.8em;">👋</span></span>
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
    class="f-col j-bw"
    style="
background: linear-gradient({getAngle(innerWidth, innerHeight) +
        'deg'}, #fff 0%, #fff 49.9%, var(--purple) 50%, var(--purple) 100%);
"
>
    <div id="abt" class="tr">
        <p class="tc">
            Quality tech-based mentorship via personalised modules to candidates
            from underrepresented backgrounds 👨🏻‍🏫
        </p>
    </div>
    <div class="p20 tl" id="join">
        <div class="tc">
            <div class="fw3 m10" style="font-size: 4rem;">JOIN US ❤️</div>
            <div>
                <Button size="lg" type="primary">Candidate</Button>
                <Button size="lg" type="secondary">Volunteer</Button>
                <Button size="lg" type="action">Mentor</Button>
            </div>
        </div>
    </div>
</section>

<!-- Looking for everything you need to make it big in the tech? The
            Barabari Project is your one-stop solution! ❤️ -->
<style lang="scss">
    #logo {
        --delay: 4s;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    section {
        width: 100vw;
        min-height: calc(100vh - 4rem);
        padding: 2rem 0;
    }
    img {
        height: 50vh;
        border-radius: 300px;
    }
    #hi,
    #weare {
        text-shadow: #ffffff 3px 3px 0px, rgba(128, 128, 0, 0.2) 6px 6px 0px;
        padding-left: 20px;
        font-size: 128px;
        text-align: left;
        width: auto;
    }
    #abt {
        padding: 2rem 2rem 0 0;
        max-width: 50%;
        margin-left: auto;
        color: #fff;
        font-size: 2rem;
    }
    #join {
        max-width: 50%;
        color: var(--purple);
    }
    @media (max-width: 600px) {
        #hi,
        #weare {
            font-size: 64px;
        }
    }
</style>
