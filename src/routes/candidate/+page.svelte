<script>
    import Layout from "../../layout/joinpages.svelte";
    import Card from "../../components/card.svelte";
</script>

<Layout title="Get Mentorship!">
    <Card>
        <div class="f-col j-bw" style="font-size: 2rem;">
            <div>Take the first step to your future!</div>
            <div class="f j-bw">
                <div style="max-width: 66%;">&nbsp;</div>
                <div class="rx10">&rarr;</div>
            </div>
        </div>
    </Card>
</Layout>

<style>
    @keyframes wobble {
        0% {
            transform: translateX(0%);
        }
        15% {
            transform: translateX(-20%) rotate(-4deg);
        }
        30% {
            transform: translateX(15%) rotate(3deg);
        }
        45% {
            transform: translateX(-10%) rotate(-3deg);
        }
        60% {
            transform: translateX(5%) rotate(2deg);
        }
        75% {
            transform: translateX(-2%) rotate(-1deg);
        }
        100% {
            transform: translateX(0%);
        }
    }
    .rx10 {
        transform: translateX(-7px);
        animation: 1s wobble ease infinite;
        background: #fff;
        color: var(--purple);
        padding: 2px 15px;
    }
    @media (prefers-reduced-motion) {
        .rx10 {
            animation: none;
        }
    }
</style>
