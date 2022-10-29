<script>
    import Meta from "../components/meta.svelte";
</script>

<svelte:head>
    <Meta title="Home" />
</svelte:head>

<section class="hero w-100 h-100 fade tc">
    <div id="hi" class="fade-up">Hi!</div>
    <div id="weare" class="fade-up o-0" style="--delay: 2s;">We are</div>
    <img
        class="fade o-0"
        style="--delay: 4s;"
        src="/icons/barabari.png"
        alt="logo"
    />
</section>
<section class="fw j-bw" style="background: #fff;">
    <div id="left-2">LHS</div>
    <div id="right-2">RHS</div>
</section>

<style lang="scss">
    section {
        height: 100vh;
        width: 100vw;
        &:first-of-type {
            height: calc(100vh - 40px);
        }
    }
    img {
        height: 50vh;
    }
    #hi,
    #weare {
        padding-left: 10px;
        font-size: 128px;
        text-align: left;
        /* animation: 0.4s fade 10s backwards; */
    }
</style>
