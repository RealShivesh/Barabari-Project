<div id="slider">
    <div id="slide-holder">
        <div class="slide">content1</div>
        <div class="slide">content2</div>
        <div class="slide">content3</div>
    </div>
</div>

<style lang="scss">
    #slider {
        width: $slide-width;
        height: $slide-height;
        overflow: hidden;
    }

    .slide {
        width: $slide-width;
        height: $slide-height;
        float: left;
        position: relative;
    }

    #slide-holder {
        // wide enough to fit all the slides
        width: 400%;
        position: relative;
        left: 0;
        will-change: transform;
        animation: scroller 10s infinite;
    }

    // need a step for each slide
    @keyframes scroller {
        0% {
            transform: translateX(0);
        }
        33% {
            transform: translateX(-$slide-width);
        }
        66% {
            transform: translateX(-$slide-width * 2);
        }
        100% {
            transform: translateX(0);
        }
    }
</style>
