<script>
    import Section from "../../layout/section.svelte";
    import Button from "../../components/button.svelte";
</script>

<Section
    main={{
        style: "",
        className: `f-col j-bw slash`,
    }}
    slash={{ color: "purple" }}
>
    <div id="abt" class="tr">
        <p class="tc">
            Quality tech-based mentorship via personalised modules to candidates
            from underrepresented backgrounds 👨🏻‍🏫
        </p>
    </div>
    <div class="p20 tl" id="join">
        <div class="tc">
            <div class="fw3 m10" id="joinus">JOIN US ❤️</div>
            <div>
                <Button size="lg" type="secondary">Volunteer</Button>
                <Button size="lg" type="primary">Candidate</Button><br />
                <Button size="lg" type="action">Mentor</Button>
            </div>
        </div>
    </div>
</Section>

<style>
    #abt {
        padding: 2rem 2rem 0 0;
        max-width: 50%;
        margin-left: auto;
        color: #fff;
        font-size: 2rem;
    }
    #join {
        max-width: 50%;
        color: var(--purple);
    }
    #joinus {
        font-size: 4.75rem;
    }
    @media (max-width: 600px) {
        #joinus {
            font-size: 2rem;
        }
        #abt {
            padding: 0;
            padding-left: 5px;
            max-width: 75%;
            font-size: 1.5rem;
        }
        #join {
            max-width: 50%;
        }
    }
</style>
