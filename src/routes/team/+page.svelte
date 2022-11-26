<script>
    import Layout from "../../layout/joinpages.svelte";
    import Personal from "./card.svelte";

    import Team from "./team.json";
    import Mentors from "./mentors.json";
</script>

<Layout title="The Team">
    <section class="w-100">
        <h2>Barabari Team</h2>
        <p>
            psst: We have roles assigned, but no heirarchy! there is too much
            barabari :)
        </p>
        <article class="w-100 mx-a f fw">
            {#each Team as person}
                <Personal color="purple" {person} />
                <!-- <Personal color="yellow-hl" {person} /> -->
            {/each}
        </article>
    </section>
    <section class="w-100">
        <h2>Barabari Mentors</h2>
        <article class="w-100 mx-a f fw">
            {#each Mentors as person}
                <Personal color="yellow-hl" {person} />
            {/each}
        </article>
    </section>
</Layout>

<style lang="scss">
</style>
