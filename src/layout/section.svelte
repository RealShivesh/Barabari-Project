<script>
    export let //
        main = {
            className: "",
            style: "",
        },
        container = {
            className: "",
            style: "",
        };
</script>

<section class={container.className || ""} style={container.style || ""}>
    <div
        class="cont w-100 h-100 p-rel {main.className || ''}"
        style={main.style || ""}
    >
        <slot />
    </div>
</section>

<style>
    .cont {
        width: 100%;
        min-height: 100vh;
        padding: 2rem 0;
    }
</style>
