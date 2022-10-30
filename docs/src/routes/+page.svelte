<script>
    let //
        innerHeight = 0,
        innerWidth = 0;
    import Meta from "../components/meta.svelte";

    import Landing from "./home/landing.svelte";
    import Joinus from "./home/joinus.svelte";

    $: getAngle = () =>
        Math.round((Math.atan(innerHeight / innerWidth) * 1800) / Math.PI) / 10;
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<svelte:head>
    <Meta title="Home" />
</svelte:head>

<Landing {getAngle} />
<Joinus {getAngle} />

<!-- Looking for everything you need to make it big in the tech? The
            Barabari Project is your one-stop solution! ❤️ -->
<style lang="scss">
    :global(section) {
        width: 100vw;
        min-height: calc(100vh - 4rem);
        padding: 2rem 0;
    }
</style>
