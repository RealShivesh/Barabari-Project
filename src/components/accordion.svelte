<div class="togglebox">
    <input id="toggle1" type="radio" name="toggle" />
    <label for="toggle1">Label 1</label>
    <section id="content1">
        <p>Content for the first accordion</p>
    </section>

    <input id="toggle2" type="radio" name="toggle" />
    <label for="toggle2">Label 2</label>
    <section id="content2">
        <p>Content for the second accordion</p>
    </section>

    <input id="toggle3" type="radio" name="toggle" />
    <label for="toggle3">Label 3</label>
    <section id="content3">
        <p>Content for the third accordion</p>
    </section>
</div>

<style lang="scss">
    // Visually hide radio buttons
    input[type="radio"] {
        position: absolute;
        opacity: 0;

        &:focus + label {
            color: black;
            background-color: wheat;
        }
    }

    // Style label/entry for accordion
    label {
        position: relative;
        display: block;
        cursor: pointer;
    }

    // Style accordion content
    section {
        height: 0;
        transition: 0.3s all;
        overflow: hidden;
    }

    // Open content when clicking label
    #toggle1:checked ~ #content1,
    #toggle2:checked ~ #content2,
    #toggle3:checked ~ #content3,
    #toggle4:checked ~ #content4 {
        // set height for transition duration to work
        // (also can set to auto without transition)
        height: 200px;
    }
</style>
