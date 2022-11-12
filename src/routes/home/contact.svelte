<script>
    let innerWidth = 300;
    import India from "./india.svelte";
</script>

<svelte:window bind:innerWidth />

<section class="f fw">
    <div class="lhs p-rel">
        <div
            id="teacher"
            class="p-abs tr rx2"
            style="font-size: 1.25rem;top:10%;right:5%;background:#0002;z-index:10;max-width:min(400px, 90%);border-right: 3px solid var(--purple);padding-right:10px;"
        >
            Quality tech based mentorship via personalised modules to candidates
            from underrepresented backgrounds
        </div>
        <India />
    </div>
    <div class="rhs f-col j-ct">
        <form class="w-75 mx-a h-75 tc p20 p-rel" action="">
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
    </div>
</section>

<style lang="scss">
    form {
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
    .lhs,
    .rhs {
        flex: 1;
        height: 100vh;
        min-width: 300px;
    }
    #postmsg {
        margin-top: 4rem;
        font-size: 1.5em;
        color: #888a;
    }
    @media (max-width: 600px) {
        #postmsg {
            font-size: 1em;
        }
        form {
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
