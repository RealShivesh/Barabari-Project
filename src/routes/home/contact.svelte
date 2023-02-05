<script>
    let innerWidth = 300;
</script>

<svelte:window bind:innerWidth />

<section class="f-col j-ct">
    <form class="mx-a h-75 tc p20 p-rel" action="">
        <div id="heart" class="fw3" style="font-size: 2.5rem;">
            <span class="d-b" style="font-size: 2em;">💌</span>
            Have a Query?
        </div>
        <input
            class="rpm-5"
            type="text"
            placeholder="Email"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        />
        <textarea
            class="rpm-5"
            placeholder="Message"
            id="msg"
            cols="auto"
            rows={innerWidth < 600 ? 5 : 10}
        />

        <input class="d-b mx-a rpm-5" type="submit" />

        <p id="postmsg" class="fw3">
            We promise to get back as soon as possible!
        </p>
    </form>
</section>

<style lang="scss">
    form {
        transform: scale(0.8);
        width: 50%;
        font-size: 1rem;
        margin-top: -2rem;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23),
            var(--yellow) 1.5rem 1.5rem 0px;
        input,
        textarea {
            margin: 2rem auto;
            width: 75%;
            position: relative;
            display: block;

            font: 0.8rem;
            border: 1px solid #8884;
            &::before {
                content: "Name";
                width: 100px;
                color: #000;
            }
            &:focus {
                border: 1px solid var(--purple);
            }
        }
        input[type="submit"] {
            background: var(--purple);
            color: #fff;
        }
    }
    #postmsg {
        margin-top: 4rem;
        font-size: 1.5em;
        color: #888a;
    }
    @media (max-width: 991px) {
        form {
            transform: scale(0.9);
            width: 75%;
            font-size: 0.8rem;
        }
    }
    @media (max-width: 600px) {
        #postmsg {
            font-size: 1em;
        }
        form {
            width: 99%;
            font-size: 0.8rem;
        }
        #heart {
            font-size: 1rem !important;
        }
        input,
        textarea {
            margin: 0.8rem auto !important;
            width: 90% !important;
        }
    }
</style>
