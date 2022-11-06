<script>
    import Section from "../../layout/section.svelte";
    import Button from "../../components/button.svelte";
</script>

<Section
    main={{
        style: "",
        className: `f-col j-bw slash`,
    }}
    slash={{ color: "purple", offset: 0 }}
>
    <div id="abt" class="tr" style="padding: 10px 20px 0 0">
        Quality tech based mentorship via personalised modules to candidates
        from underrepresented backgrounds 👨🏻‍🏫
    </div>
    <div class="p5 tl" id="join">
        <div class="tc">
            <div class="fw3 m2" id="joinus">JOIN US ❤️</div>
            <div>
                <Button size="lg" type="secondary">Volunteer</Button>
                <Button size="lg" type="primary">Candidate</Button><br />
                <Button size="lg" type="action">Mentor</Button>
            </div>
        </div>
        <div class="heightControl">&nbsp;</div>
    </div>
</Section>

<style>
    #abt {
        padding: 2rem 2rem 0 0;
        max-width: 50%;
        margin-left: auto;
        color: #fff;
        font-size: 3rem;
    }
    #join {
        max-width: 50%;
        color: var(--purple);
    }
    #joinus {
        font-size: 4.75rem;
    }
    .heightControl {
        height: 200px;
    }
    @media (max-width: 1000px) {
        #abt {
            font-size: 2rem;
        }
        #joinus {
            font-size: 3rem;
        }
        .heightControl {
            height: 100px;
        }
    }
    @media (max-width: 600px) {
        .heightControl {
            height: 20px;
        }
        #joinus {
            font-size: 1.75rem;
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
