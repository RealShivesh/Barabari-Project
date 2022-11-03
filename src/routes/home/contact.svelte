<script>
    import Button from "../../components/button.svelte";
    import India from "./india.svelte";
</script>

<section class="flex">
    <div class="lhs h-100" style="margin: auto 0;">
        <India />
    </div>
    <div class="rhs">RHS</div>
</section>

<style lang="scss">
    #india {
        height: 80%;
        width: auto;
        border: 1px solid green;
    }
    .flex {
        display: flex;
        .lhs,
        .rhs {
            flex: 1;
        }
    }
    @media (max-width: 600px) {
        .flex {
            display: block;
        }
    }
</style>
