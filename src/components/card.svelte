<script>
    export let type = "purple";
</script>

<div class="rpm-10 card {type}">
    <slot />
</div>

<style>
    .card {
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
