<script>
    import Background from "../../../static/images/landing.webp?w=1920&h=1080&fit=cover&webp";
</script>

<section id="landing" class="p-rel">
    <img
        src={Background}
        alt=""
        class="p-abs"
        style="height: 100vh;width:100vw;object-fit:cover;"
    />
    <div id="bio" class="w-100 tc p-abs fade-down">
        <div
            class="tl rx2 bg-0008"
            style="max-width:min(600px, 80%);border-left: 3px solid var(--yellow); padding-left: 20px;"
        >
            Addressing private sector inequality by personalized tech mentorship
            for candidates from the underprivileged sections(by caste, income,
            and gender).
        </div>
    </div>
    <div class="p-abs f w-100 tc fade-up" style="bottom: 0;left:0;--delay:6s;">
        <a href="/volunteer" style="background:#222;color:#fff;">
            Volunteer <br />
            <span>Help Us Out</span>
        </a>
        <a href="/candidate" style="background:var(--yellow);color:#000;">
            Candidate <br />
            <span>Level Up Now!</span>
        </a>
        <a class="blur-8" href="/mentor" style="background:#222;color:#fff;">
            Mentor <br />
            <span>Help a Candidate</span>
        </a>
    </div>
</section>

<style lang="scss">
    a {
        display: block;
        padding: 20px 0;
        cursor: pointer;
        width: 33.33%;
        font-size: 2rem;
        font-weight: 600;
        transform: translateY(0);
        transition: all 0.2s ease;
        span {
            font-weight: 200;
            font-size: 0.75em;
        }
        &:hover {
            transform: translateY(-5px);
            opacity: 0.66;
        }
    }
    #bio {
        top: 20%;
        left: 10%;
        width: 100vw;
        --delay: 6s;
        font-size: 2rem;
        color: #fff;
    }

    @media (max-width: 600px) {
        #bio {
            font-size: 1rem;
        }
        a {
            font-size: 1.25rem;
        }
    }
</style>
