<script>
    let stats = Object.freeze([
        { name: "Placed Candidates", count: "18" },
        { name: "Placed Candidates", count: "18" },
        { name: "Placed Candidates", count: "18" },
        { name: "Placed Candidates", count: "18" },
        { name: "Placed Candidates", count: "18" },
        { name: "Placed Candidates", count: "18" },
    ]);
</script>

<section class="p20">
    <div class="f mx-a j-ar fw" style="max-width: 1000px;">
        {#each stats as stat}
            <div class="f-col tc stat m10">
                <div class="ctr fw5">{stat.count}</div>
                <div class="name">{stat.name}</div>
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        background: var(--yellow);
        max-height: unset !important;
    }
    .stat {
        padding: 30px 0;
        width: 250px;
        .ctr {
            font-size: 3.5rem;
        }
        .name {
            text-transform: uppercase;
        }
    }
</style>
