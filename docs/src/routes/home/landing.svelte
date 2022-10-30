<script>
    export let getAngle;
</script>

<section
    class="hero w-100 h-100 fade tc p-rel slash"
    style="--color:var(--yellow);--angle:{180 - getAngle() + 'deg'};"
>
    <div id="hi" class="fade-up">
        <span>Hi! <span style="font-size: 0.8em;">👋</span></span>
    </div>
    <div id="weare" class="fade-up o-0" style="--delay: 2s;">
        <span>We are</span>
    </div>
    <img
        id="logo"
        class="fade o-0 p-abs"
        src="/icons/barabari.png"
        alt="logo"
    />
</section>

<style>
    #logo {
        --delay: 4s;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -60%);
        height: 50vh;
        border-radius: 300px;
    }
    #hi,
    #weare {
        text-shadow: #ffffff 3px 3px 0px, rgba(128, 128, 0, 0.2) 6px 6px 0px;
        padding-left: 20px;
        font-size: 128px;
        text-align: left;
        width: auto;
    }
    @media (max-width: 600px) {
        #hi,
        #weare {
            font-size: 64px;
        }
    }
</style>
