<script>
</script>

<div class="w-100 h-100 fade tc p-rel" style="color:var(--purple)">
    <div id="hi" class="fade-up">
        <span>Hi! <span id="wave">👋</span></span>,
        <span id="weare" class="fade-up o-0" style="--delay: 2s;">we are</span>
    </div>
    <img
        id="logo"
        class="fade o-0 p-abs"
        src="/icons/barabari.png"
        alt="logo"
    />
</div>

<style>
    @keyframes wave {
        0% {
            transform: rotate(0deg);
        }
        10% {
            transform: rotate(14deg);
        }
        20% {
            transform: rotate(-8deg);
        }
        30% {
            transform: rotate(14deg);
        }
        40% {
            transform: rotate(-4deg);
        }
        50% {
            transform: rotate(10deg);
        }
        60% {
            transform: rotate(0deg);
        } /* Reset for the last half to pause */
        100% {
            transform: rotate(0deg);
        }
    }
    #wave {
        display: inline-block;
        font-size: 0.8em;
        animation: 2.5s wave infinite;
        transform-origin: 70% 70%;
    }
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
        color: #888;
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
        #bio {
            max-width: 75%;
        }
    }
</style>
