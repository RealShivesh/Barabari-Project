<script>
    import Layout from "../../layout/joinpages.svelte";
    import Card from "../../components/card.svelte";
</script>

<Layout title="Get Mentorship!">
    <div slot="desc">
        The Barabari Project is a non-profit working to provide quality training
        and mentorship to candidates from low-income categories, rural
        backgrounds, underprivileged caste sections, and underrepresented gender
        backgrounds.
        <br /><br />
        If you want to get mentorship, training and referrals from working professionals
        from top tech companies, fill in the form below
    </div>
    <Card slot="body">
        <div class="f-col j-bw" style="font-size: 2rem;">
            <div>Take the first step to your future!</div>
            <div class="f j-bw">
                <div style="max-width: 66%;">&nbsp;</div>
                <a
                    href="https://docs.google.com/forms/d/1My36LieG8RNe5816RYZ594Yur8mgCmV6t_ntYA6MrVU/edit"
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
