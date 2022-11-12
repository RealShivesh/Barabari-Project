<div id="slider">
    <!-- Slide Images -->
    <img id="slide-1" src="img1.jpg" alt="img description" />
    <img id="slide-2" src="img2.jpg" alt="img description" />
    <img id="slide-3" src="img3.jpg" alt="img description" />
    <img id="slide-4" src="img4.jpg" alt="img description" />

    <!-- Navigation for the slides -->
    <ul>
        <li><a href="#slide-1" aria-label="Image 1">1</a></li>
        <li><a href="#slide-2" aria-label="Image 2">2</a></li>
        <li><a href="#slide-3" aria-label="Image 3">3</a></li>
        <li><a href="#slide-4" aria-label="Image 4">4</a></li>
    </ul>
</div>

<style lang="scss">
    #slider {
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 300px;
            height: 200px;

            &:target {
                transition: all 0.5s ease-in-out;
            }

            &:not(:target),
            &:target ~ img#slide-4 {
                position: relative;
                opacity: 0;
            }

            // set initially visible
            &#slide-4 {
                position: absolute;
                opacity: 1;
            }
        }
    }
</style>
