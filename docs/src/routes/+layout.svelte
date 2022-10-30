<script>
    import Nav from "../components/nav.svelte";
</script>

<main class="app">
    <Nav />

    <style>
        section {
            width: 100vw;
            min-height: calc(100vh - 4rem);
            padding: 2rem 0;
        }
    </style>

    <div id="content">
        <slot />
    </div>

    <footer class="p10" style="background: var(--yellow);">
        <div class="w-100 tc">
            <h2>The Barabari Project</h2>
            <h3><i>Universal Access To Quality Jobs</i></h3>
        </div>
        <div class="f j-ar fw">
            <ul>
                <li>Links1</li>
                <li>Links2</li>
                <li>Links3</li>
            </ul>
            <ul>
                <li>Links1</li>
                <li>Links2</li>
                <li>Links3</li>
            </ul>
            <ul>
                <li>Links1</li>
                <li>Links2</li>
                <li>Links3</li>
            </ul>
        </div>
    </footer>
</main>

<style>
    #content {
        z-index: 1;
        scroll-behavior: smooth;
    }
    footer {
        width: calc(100% - 20px);
    }
</style>
