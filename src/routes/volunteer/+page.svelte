<script>
    import Layout from "../../layout/joinpages.svelte";
    import Card from "../../components/card.svelte";
</script>

<Layout title="Work with us!">
    <div slot="desc">
        The Barabari Project is a non-profit working to provide quality training
        and mentorship to candidates from low-income categories, rural
        backgrounds, underprivileged caste sections, and underrepresented gender
        backgrounds.
        <br /><br />
        Volunteer with us in various roles from all the different teams like the
        <b> content team, operations team, recruitment team and many more.</b> you'll
        find more details in the form below
    </div>
    <Card slot="body">
        <div class="f-col j-bw" style="font-size: 2rem;">
            <div>Join the Effort!</div>
            <div class="f j-bw">
                <div style="max-width: 66%;font-size: 1.5rem;margin-top:10px;">
                    We can use all the help we get. Help us out!
                </div>
                <a
                    href="https://docs.google.com/forms/d/1ZCiqDPf5POObE-fUfGKOXAX75YYZuXWwcJTyxiOdkyU/"
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
