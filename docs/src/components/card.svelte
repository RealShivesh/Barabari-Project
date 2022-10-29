<script>
    export let type = "purple";

    const typr = (typ) => {
        if (typ === "purple") return "--purple-grad";
        if (typ === "yellow") return "--yellow";
    };
</script>

<div class="rx10 card" style={`background: var(${typr(type)});`}>
    <slot />
</div>

<style>
    .card {
    }
</style>
