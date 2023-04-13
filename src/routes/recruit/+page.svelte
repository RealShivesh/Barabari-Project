<script>
    import Meta from "../../components/meta.svelte";
    import Layout from "../../layout/joinpages.svelte";
    import Background from "../../../static/images/hero/candidate.jpg?w=1080&h=610&fit=cover&webp";

    const roles = ["SDE (Java)", "Web Developers (React)", "Data Analysts"];
</script>

<svelte:head>
    <Meta title="Get Free Mentorship" />
</svelte:head>

<Layout title="Recruit from Us!">
    <div slot="desc">
        <span class="desktop-only">
            We, at Barabari, pair with brilliant and tenacious individuals to
            offer them <b>1-to-1 mentoring</b> and extensive training to help
            them live their lives with dignity and contribute to the workforce.
            <br /><br />
        </span>
        Starting from scratch, we provide specialised 1-to-1 mentoring to candidates
        over a period of <b>6-8 months</b> to help them gain specialisation in their
        chosen field.
    </div>

    <div
        class="hero f-col j-ct p-rel h-100"
        slot="max"
        style="overflow: hidden;"
    >
        <div class="f-col p20 tc mx-a w-100 bg-ccc">
            <div class="fw7">Roles Offered</div>
            {#each roles as role}
                <hr class="w-33 o-25" />
                <div>{role}</div>
            {/each}
        </div>

        <img
            src={Background}
            alt="candidate"
            class="p-abs w-100 h-100"
            style="z-index:-1000;filter:blur(5px);"
        />
        <a
            href="https://forms.gle/H3HGYX1BfFvq2Bhs9
        "
            target="_blank"
            rel="noreferrer"
            class="blur-16 bg-fffa fw4 CTA tc m20 p20 p-rel f j-ar"
        >
            <div style="align-self:center;">Apply Here!</div>
            <svg viewBox="0 0 32 32" height="48">
                <path d="M11 29 24 16 11 3" />
            </svg>
        </a>
        <a
            href="https://docs.google.com/document/d/1HFsNm-zfWFN7buRz3cFbjES9o-u3RjI5oc4l89E0UL8/
        "
            target="_blank"
            rel="noreferrer"
            class="blur-16 bg-fffa fw4 CTA tc m20 p20 p-rel f j-ar"
        >
            <div style="align-self:center;">Read More!</div>
            <svg viewBox="0 0 32 32" height="48">
                <path d="M11 29 24 16 11 3" />
            </svg>
        </a>
    </div>
</Layout>

<style lang="scss">
    .hero {
        height: 50vh;
    }
    @media (max-width: 768px) {
        .hero {
            height: 90vh;
        }
    }
    svg {
        width: 32px;
        height: 32px;
        fill: none;
        stroke: currentcolor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    .CTA {
        width: 33.33%;
        font-size: 2.25rem;
        line-height: 1em;
    }
    @media (max-width: 768px) {
        .CTA {
            width: 75%;
        }
    }
    a {
        left: 10%;
        text-decoration: none;
        color: #000;
        transition: 0.2s box-shadow ease-in-out;
        &:hover {
            // light soft white box shadow
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
        }
    }
</style>
