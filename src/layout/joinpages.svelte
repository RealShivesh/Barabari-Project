<script>
    export let //
        title = "Title!";
</script>

<div class="w-100">
    <!-- <div class="w-100 tc p-rel" style="background: var(--purple-grad);"> -->
    <div class="w-100 tc p-rel" style="background: #222;">
        <p class="w-100 mx-a">
            <slot name="desc" />
        </p>
    </div>
    <h1 class="w-100 m0 p20" style="background:var(--yellow)">{title}</h1>
    <div class="limit mx-a">
        <slot name="body" />
    </div>
    <div class="mx-a">
        <slot name="max" />
    </div>
</div>

<style>
    .limit {
        max-width: 1000px;
        overflow: hidden;
    }
    p {
        line-height: 2em;
        font-size: 1.2rem;
        color: #fff;
        max-width: 1000px;
        padding: 5rem 0 4rem 0;
    }
</style>
