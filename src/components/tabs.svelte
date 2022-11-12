<div class="tabs">
    <div class="tab">
        <input type="radio" name="tabgroup" id="tab-1" checked />
        <label for="tab-1">Label One</label>
        <div class="content">
            <p>Tab One Content</p>
        </div>
    </div>

    <div class="tab">
        <input type="radio" name="tabgroup" id="tab-2" />
        <label for="tab-2">Label Two</label>
        <div class="content">
            <p>Tab Two Content</p>
        </div>
    </div>

    <div class="tab">
        <input type="radio" name="tabgroup" id="tab-3" />
        <label for="tab-3">Label Three</label>
        <div class="content">
            <p>Tab Three Content</p>
        </div>
    </div>
</div>

<style lang="scss">
    .tabs {
        position: relative;
        // set height to be even for all tab groups
        min-height: 200px;
    }

    .tab {
        float: left;
    }

    .tab label {
        // set label height
        top: 1em;
    }

    // Visually hide radio buttons
    .tab [type="radio"] {
        position: absolute;
        height: 0;
        width: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);

        &:focus + label {
            outline: 2px dotted black;
        }
    }

    .content {
        position: absolute;
        top: 1em;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
    }

    [type="radio"]:checked ~ label {
        z-index: 2;
    }

    [type="radio"]:checked ~ label ~ .content {
        z-index: 1;
        opacity: 1;
    }
</style>
