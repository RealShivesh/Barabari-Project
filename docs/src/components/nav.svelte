<nav class="p-fix w-100 o-1 blur">
    <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
            <div class="nav-title">The Barabari Project</div>
        </div>
        <div class="nav-btn p-abs">
            <label for="nav-check">
                <span />
                <span />
                <span />
            </label>
        </div>

        <div class="nav-links">
            <a href="">Get Mentorship</a>
            <a href="">Be a Mentor</a>
            <a href="">Join Us!</a>
            <a href="">Meet the Team</a>
        </div>
    </div>
</nav>

<!-- wrapper -->
<style>
    @keyframes slideIn {
        0% {
            transform: translateY(-50px);
        }
        100% {
            transform: translateY(0);
        }
    }
    nav {
        /* animation: 0.4s slideIn 5s ease-in-out forwards; */
        animation: 0.4s slideIn 1s ease-in-out forwards;
        transform: translateY(-50px);
        --sz: 8px;
        --bg: #fff8;
        top: 0;
        z-index: 10;
    }
    .nav {
        display: block;
        height: 0;
        width: 100%;
        will-change: transform;
        color: black;

        background-color: rgba(255, 255, 255, 0.5);
        -webkit-backdrop-filter: blur(2em);
        backdrop-filter: blur(2em);
    }

    .nav > .nav-header {
        display: inline;
    }

    .nav > .nav-header > .nav-title {
        display: inline-block;
        font-size: 22px;
        padding: 10px 10px 10px 10px;
    }

    .nav > .nav-btn {
        display: none;
    }

    .nav > .nav-links {
        display: inline;
        float: right;
        font-size: 18px;
    }

    .nav > .nav-links > a {
        display: inline-block;
        padding: 13px 10px 13px 10px;
        text-decoration: none;
    }

    .nav > .nav-links > a:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }

    .nav > #nav-check {
        display: none;
    }

    @media (max-width: 600px) {
        .nav > .nav-btn {
            display: inline-block;
            position: absolute;
            right: 0px;
            top: 0px;
        }
        .nav > .nav-btn > label {
            display: inline-block;
            width: 50px;
            height: 50px;
            padding: 13px;
        }

        .nav > .nav-btn > label > span {
            display: block;
            width: 25px;
            height: 7px;
            border-top: 2px solid black;
        }
        .nav > .nav-links {
            position: absolute;
            display: block;
            width: 100%;
            background: var(--yellow);
            height: 0px;
            transition: all 0.3s ease-in;
            overflow-y: hidden;
            top: 50px;
            left: 0px;
        }
        .nav > .nav-links > a {
            display: block;
            width: 100%;
        }
        .nav > #nav-check:not(:checked) ~ .nav-links {
            height: 0px;
        }
        .nav > #nav-check:checked ~ .nav-links {
            height: calc(100vh - 50px);
            overflow-y: auto;
        }
    }
</style>
