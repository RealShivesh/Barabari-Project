<script>
    export let type = "purple";
</script>

<div class="p10 rx10 card p-rel {type}">
    <slot />
</div>

<style>
    .card {
        margin: 10px auto;
        max-width: 600px;
        min-width: 200px;
        min-height: 100px;
    }
    .purple {
        background: var(--purple-grad);
        color: #fff;
    }
    .yellow {
        background: var(--yellow);
    }
</style>
