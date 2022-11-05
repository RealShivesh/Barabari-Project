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

    <div id="content">
        <slot />
    </div>

    <footer class="p10 w-100" style="background: var(--yellow);">
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
    ul {
        list-style-type: none;
    }
</style>
