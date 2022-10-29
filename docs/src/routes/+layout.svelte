<script>
    import Nav from "../components/nav.svelte";
</script>

<main class="app">
    <Nav />
    <div style="position: relative;top:-10px;z-index:1;">
        <slot />
    </div>

    <footer class="p10 F" style="background: var(--yellow);">
        <p>
            visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
        </p>
    </footer>
</main>

<style>
    footer {
        width: calc(100% - 20px);
    }
</style>
