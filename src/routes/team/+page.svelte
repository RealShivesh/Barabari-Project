<script>
    import Layout from "../../layout/joinpages.svelte";
    import Personal from "./card.svelte";
    let people = Object.freeze([
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Generic-person.svg/480px-Generic-person.svg.png",
            name: "Harhar G Mahadev",
            desc: "Founder",
            caps: "Resident Dictator & Owner of means of productions",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Generic-person.svg/480px-Generic-person.svg.png",
            name: "Mrs, Anjali",
            desc: "Ops & Des",
            caps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestias!",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Generic-person.svg/480px-Generic-person.svg.png",
            name: "Mrs, Vishnupriya",
            desc: "Ops & Des",
            caps: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, molestias!",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Generic-person.svg/480px-Generic-person.svg.png",
            name: "Manav",
            desc: "Exists",
            caps: "Tech Support, I can fix your wifi",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Generic-person.svg/480px-Generic-person.svg.png",
            name: "Unnamed Superhero",
            desc: "Does Super Work",
            caps: "Superhero is a trademarked word by Marvel & DC :_)",
        },
    ]);
</script>

<Layout title="The Team">
    <section class="w-100">
        <h2>Barabari Team</h2>
        <p>
            psst: We have roles assigned, but no heirarchy! there is too much
            barabari :)
        </p>
        <article class="w-100 mx-a f fw">
            {#each people as person}
                <Personal {person} />
            {/each}
        </article>
    </section>
    <section class="w-100">
        <h2>Barabari Mentors</h2>
    </section>
</Layout>

<style lang="scss">
</style>
