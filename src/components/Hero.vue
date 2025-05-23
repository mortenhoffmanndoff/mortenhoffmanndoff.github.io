<template>
    <div class="hero">
        <div class="hero-content">
            <h1>
                <span>My <b>voice</b></span>
                <span>is the sound </span>
                <span>of <b>your</b> brand.</span>
            </h1>
        </div>
        <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.2" cx="500" cy="500" r="500" fill="#9A8C99"/>
        </svg>
        <img src="../assets/hero-image.png" alt="Hero Image" />
    </div>
</template>

<script>
</script>

<style scoped>

.hero {
    position: relative;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: space-between;
    padding: 0 15vw;
    background-color: var(--color-light-orange);
    overflow: hidden;
}

.hero > img {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: 40vw;
    height: auto;
    max-width: 100%;
}

.hero > .hero-content {
    display: flex;
    width: 100%;
    max-width: 1016px;
}

.hero > .hero-content > h1 > span {
    color: var(--color-dark-blue);
    font-size: clamp(40px, 7.5vw, 120px);
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -3.6px;
    text-transform: uppercase;
}

.hero > .hero-content > h1 > span > b {
    font-weight: 900;
}

.hero > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-35%, -50%);
    
    aspect-ratio: 1/1;
    max-width: 1000px;
    max-height: 100vh;
    width: 100%;
    height: 100%;
    z-index: 1;

    animation: fade-in 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

</style>