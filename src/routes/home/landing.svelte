<script>
    import Button from "../../components/button.svelte";
</script>

<section id="landing" class="p-rel">
    <div id="bio" class="p10 tr p-abs" style="bottom:5px;right:5px;">
        <div class="fw3 m10" id="joinus">
            Addressing private sector inequality by personalized tech mentorship
            for candidates from the underprivileged(by caste, income, and
            gender).
        </div>
    </div>
    <div class="p-abs f w-100 tc" style="bottom: 0;left:0;">
        <a href="/volunteer" style="background:var(--yellow);color:#000;">
            Volunteer <br />
            <span>Help Us Out</span>
        </a>
        <a href="/candidate" style="background:var(--purple);color:#fff;">
            Candidate <br />
            <span>Level Up Now!</span>
        </a>
        <a class="blur" href="/mentor" style="background:#0008;color:#fff;">
            Mentor <br />
            <span>Be a mentor</span>
        </a>
    </div>
</section>

<style lang="scss">
    #landing {
        background-image: url(/images/landing.webp);
    }
    a {
        display: block;
        padding: 20px 0;
        cursor: pointer;
        width: 33.33%;
        font-size: 2rem;
        font-weight: 600;
        transition: opacity 0.2s ease;
        span {
            font-weight: 200;
            font-size: 1.5rem;
        }
        &:hover {
            opacity: 0.8;
        }
    }

    @media (max-width: 600px) {
        #bio {
            max-width: 75%;
        }
    }
</style>
