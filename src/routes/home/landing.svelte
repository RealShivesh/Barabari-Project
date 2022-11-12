<script>
</script>

<section id="landing" class="p-rel">
    <div id="bio" class="w-100 tc p-abs fade-down">
        <div
            class="tl rx2"
            style="max-width:min(600px, 80%);border-left: 3px solid var(--yellow); padding-left: 20px;background: #0008;"
        >
            Addressing private sector inequality by personalized tech mentorship
            for candidates from the underprivileged(by caste, income, and
            gender).
        </div>
    </div>
    <div class="p-abs f w-100 tc fade-up" style="bottom: 0;left:0;--delay:6s;">
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
            font-size: 0.75em;
        }
        &:hover {
            opacity: 0.8;
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
