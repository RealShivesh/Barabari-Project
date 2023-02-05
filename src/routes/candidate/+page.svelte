<script>
    import Layout from "../../layout/joinpages.svelte";
</script>

<Layout title="Get Mentorship!">
    <div slot="desc">
        The Barabari Project is a non-profit working to provide quality training
        and mentorship to candidates from low-income categories, rural
        backgrounds, underprivileged caste sections, and underrepresented gender
        backgrounds.
        <br /><br />
        If you want to get <b> mentorship, training and referrals</b> from working
        professionals from top tech companies, fill in the form below
    </div>

    <div class="hero f-col j-ct p-rel h-100" slot="max">
        <style>
        </style>
        <a
            href="https://docs.google.com/forms/d/1utKmc4y1SJWNH0rzQSlTBcItT6IBiHkeb6Ivz5u3mKo/
        "
            target="_blank"
            rel="noreferrer"
            class="blur fw4 w-33 tc m20 p20 p-rel f j-ar"
        >
            <div style="font-size:2.25rem;line-height:1em;align-self:center;">
                Apply Here!
            </div>
            <svg viewBox="0 0 32 32" height="48">
                <path d="M11 29 24 16 11 3" />
            </svg>
        </a>
        <a
            href="https://docs.google.com/document/d/1HFsNm-zfWFN7buRz3cFbjES9o-u3RjI5oc4l89E0UL8/
        "
            target="_blank"
            rel="noreferrer"
            class="blur fw4 w-33 tc m20 p20 p-rel f j-ar"
        >
            <div style="font-size:2.25rem;line-height:1em;align-self:center;">
                Read More!
            </div>
            <svg viewBox="0 0 32 32" height="48">
                <path d="M11 29 24 16 11 3" />
            </svg>
        </a>
    </div>
</Layout>

<style lang="scss">
    .hero {
        background: url("/images/hero/candidate.jpg");
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 50vh;
        object-fit: cover;
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
    a {
        --sz: 16px;
        --bg: #fffa;
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
