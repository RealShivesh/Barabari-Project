<script>
    export let title = "Title!";
</script>

<div class="w-100">
    <div class="w-100 tc p-rel" style="background: var(--purple-grad);">
        <p class="w-100 mx-a">
            The Barabari Project is a non-profit working to provide quality
            training and mentorship to candidates from low-income categories,
            rural backgrounds, underprivileged caste sections, and
            underrepresented gender backgrounds. We want to become a gateway for
            candidates who lack access to these opportunities, to up-skill
            themselves, get well paying jobs, and become self-sufficient to take
            ownership of their careers.
        </p>
    </div>
    <h1 class="w-100 m0 p20" style="background:var(--yellow)">
        Get Mentorship!
    </h1>

    <div class="limit mx-a">
        <slot />
    </div>
</div>

<style>
    .limit {
        max-width: 1000px;
    }
    p {
        line-height: 2em;
        font-size: 1.2rem;
        color: #fff;
        max-width: 1000px;
        padding: 6rem 0 4rem 0;
    }
</style>
