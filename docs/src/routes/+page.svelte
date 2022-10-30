<script>
    let //
        innerHeight = 0,
        innerWidth = 0;
    import Meta from "../components/meta.svelte";

    import Landing from "./home/landing.svelte";
    import Joinus from "./home/joinus.svelte";
    import Social from "./home/contact.svelte";

    $: getAngle = () =>
        Math.round((Math.atan(innerHeight / innerWidth) * 1800) / Math.PI) / 10;
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<svelte:head>
    <Meta title="Home" />
</svelte:head>

<Landing {getAngle} />
<Joinus {getAngle} />
<Social />

<!-- Looking for everything you need to make it big in the tech? The
            Barabari Project is your one-stop solution! ❤️ -->
<style lang="scss">
</style>
