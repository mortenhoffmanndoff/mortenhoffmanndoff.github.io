<template>
    <div class="hero">
        <div class="hero-content">
            <h1>
                <span>My <b>voice</b></span>
                <span>is the sound </span>
                <span>of <b>your</b> brand.</span>
            </h1>

            <button class="play-btn" aria-label="Play audio" @click="toggleAudio">
                <svg v-if="!isPlaying" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="#cabbb8" />
                    <polygon points="24,20.5 42,30 24,39.5" fill="#fff" />
                </svg>
                <svg v-else width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="#cabbb8" />
                    <rect x="21" y="21" width="18" height="18" rx="3" fill="#fff" />
                </svg>
            </button>
        </div>

        <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.2" cx="500" cy="500" r="500" fill="#9A8C99" />
        </svg>
        <img src="../assets/hero-image.png" alt="Hero Image" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPlaying: false,
            audio: null
        }
    },
    methods: {
        toggleAudio() {
            if (!this.isPlaying) {
                this.audio.currentTime = 0; // Starter forfra ved play
                this.audio.play();
                this.isPlaying = true;
            } else {
                this.audio.pause();
                this.isPlaying = false;
            }
        },
        onEnded() {
            this.isPlaying = false;
            this.audio.currentTime = 0;
        },
        onPause() {
            this.isPlaying = false;
        }
    },
    mounted() {
        // Brug absolut sti til /public/audio/click.mp3
        this.audio = new Audio('/audio/intro.wav');
        this.audio.preload = 'auto';
        this.audio.addEventListener('ended', this.onEnded);
        this.audio.addEventListener('pause', this.onPause);
    },
    beforeUnmount() {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.audio.removeEventListener('ended', this.onEnded);
            this.audio.removeEventListener('pause', this.onPause);
        }
    }
}
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

.hero>img {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: 40vw;
    height: auto;
    max-width: 100%;
}

.hero>.hero-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1016px;
}

.hero>.hero-content>h1>span {
    color: var(--color-dark-blue);
    font-size: clamp(40px, 7.5vw, 120px);
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -3.6px;
    text-transform: uppercase;
}

.hero>.hero-content>h1>span>b {
    font-weight: 900;
}

.hero>svg {
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

.play-btn {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: transform 0.15s;
}

.play-btn:active {
    transform: scale(0.98);
}
</style>