<script>
    export let type = "purple";

    const typr = (typ) => {
        if (typ === "purple") return "--purple-grad";
        if (typ === "yellow") return "--yellow";
    };
</script>

<div class="rx10 card p10" style={`background: var(${typr(type)});`}>
    <slot />
</div>

<style>
    .card {
        min-width: 200px;
        min-height: 100px;
    }
</style>
