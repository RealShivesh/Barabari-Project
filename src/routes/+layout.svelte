<script>
    import Nav from "../layout/nav.svelte";
</script>

<main class="app">
    <Nav />
    <style>
        section {
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            width: 100vw;
            min-height: 100vh;
        }
    </style>

    <div id="content" style="z-index: 0;">
        <slot />
    </div>

    <hr class="w-50 o-50" />
    <footer class="p10 w-100" style="background: var(--yellow);font-size:0.8em">
        <div class="w-100 tc">
            <h3>The Barabari Project</h3>
            <h4><i>Universal Access To Quality Jobs</i></h4>
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
        </div>
    </footer>
</main>

<style>
    #content {
        z-index: 1;
        scroll-behavior: smooth;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
</style>
