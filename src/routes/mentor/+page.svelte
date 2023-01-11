<script>
    import Layout from "../../layout/joinpages.svelte";
    import Card from "../../components/card.svelte";
</script>

<Layout title="Help Out!">
    <div slot="desc">
        The Barabari Project is a non-profit working to provide quality training
        and mentorship to candidates from low-income categories, rural
        backgrounds, underprivileged caste sections, and underrepresented gender
        backgrounds.
        <br /><br />
        Come join us as a
        <b> mentor, doubt solver or technical content curator</b> and positively
        impact the lives of thousands of underprivileged candidates. Find all details
        in the form below
    </div>
    <Card slot="body">
        <div class="f-col j-bw" style="font-size: 2rem;">
            <div>Be a mentor</div>
            <div class="f j-bw">
                <div style="max-width: 66%;">&nbsp;</div>
                <a
                    href="https://docs.google.com/forms/d/1utKmc4y1SJWNH0rzQSlTBcItT6IBiHkeb6Ivz5u3mKo/edit
                "
                    target="_blank"
                    rel="noreferrer"
                    class="rx10 arrow"
                >
                    &rarr;
                </a>
            </div>
        </div>
    </Card>
</Layout>
