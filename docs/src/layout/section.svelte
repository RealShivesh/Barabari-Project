<script>
    export let //
        main = {
            className: "",
            style: "",
        },
        container = {
            className: "",
            style: "",
        },
        slash = {
            color: "purple",
            offset: false,
        };

    let //
        innerHeight = 0,
        innerWidth = 0;

    $: getStyle = () => {
        // If(slash) calculate angle
        const getAngle = Math.abs(
            (slash.offset ? 180 : 0) -
                Math.round(
                    (Math.atan(innerHeight / innerWidth) * 1800) / Math.PI
                ) /
                    10
        );
        // Main styles
        let style = "";
        if (main.style) style += main.style + ";";
        if (slash)
            style += `--angle:${getAngle}deg;--color:var(--${slash.color});`;

        return style;
    };
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<section class={container.className || ""} style={container.style || ""}>
    <div
        class:slash
        class="cont w-100 h-100 {main.className || ''}"
        style={getStyle()}
    >
        <slot />
    </div>
</section>

<style>
    .cont {
        width: 100%;
        min-height: 100vh;
        padding: 2rem 0;
    }
    section {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100vw;
        min-height: 100vh;
    }
</style>
