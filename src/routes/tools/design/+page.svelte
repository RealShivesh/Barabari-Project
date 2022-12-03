<script>
    let //
        headline = "Project",
        downloader,
        svg;

    const handleClick = () => {
        const svgBlob = new Blob([svg.outerHTML], {
            type: "image/svg+xml;charset=utf-8",
        });
        const svgUrl = URL.createObjectURL(svgBlob);

        downloader.href = svgUrl;
        downloader.download = `${+new Date()}.svg`;
        downloader.click();
    };
</script>

<article class="w-100">
    <div class="mx-a p20" style="max-width: min(600px, 100%);">
        <p>&nbsp;<br /><br /></p>
        <h4 style="margin: 10px 2px">Main Text:</h4>
        <textarea
            type="text"
            class="rx10 p10 w-100"
            placeholder="Add Headline!"
            bind:value={headline}
        />
        <p />
        <div class="w-100 f j-bw">
            <div>&nbsp;</div>
            <button class="rx10 f j-ct" on:click|preventDefault={handleClick}>
                <img
                    height="22px"
                    width="22px"
                    src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/cloud-arrow-down.svg"
                    alt="Download"
                    style="filter: invert(100%);margin-right:10px;"
                />
                <span style="line-height: 22px;"> Download </span>
            </button>
        </div>
        <p />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            stroke-linecap="round"
            stroke-linejoin="round"
            bind:this={svg}
            class="w-100"
        >
            <rect x="0" y="0" width="100%" height="100%" fill="#9a4cec" />
            <rect x="5%" y="5%" width="90%" height="90%" fill="#fec431" />
            <text x="200" y="380" font-size="54" font-weight="300">बराबरी</text>
            <text x="100" y="240" font-size="108" font-weight="300">
                {headline}
            </text>
        </svg>
    </div>
    <!-- IMP DONT REMOVE DOWNLOADER LINK <NEEDED FOR FIREFOX> -->
    <a class="o-0" bind:this={downloader} href="/#">&nbsp;</a>

    <!-- --yellow-hl: #fec431;
			--yellow: #fadf0b;
			--purple: #9a4cec;
			--blue: #5345d8;
			--indigo: #4c2884;
			--purple-grad: linear-gradient(to right, var(--blue), var(--purple)); -->
</article>

<style lang="scss">
    :global(#content) {
        background: #888;
    }
    textarea {
        border: 1px solid #888;
        background: #ccc;
        &:focus {
            border: 1px solid #000;
        }
    }
    button {
        background: linear-gradient(to right, var(--blue), var(--purple));
        color: #fff;
        padding: 10px 10px;
        width: calc(30% - 5px);
        max-height: 44px;
    }
    svg {
        border: 1px solid black;
    }
    img {
        object-fit: contain;
    }
</style>
