<template>
    <div class="hero">
        <div class="hero-content">
            <h1 class="hero-title headline-xl text-transform-uppercase">
                <span>My <b>voice</b></span>
                <span>is the sound </span>
                <span>of <b>your</b> brand.</span>
            </h1>

            <div class="hero-player">
                
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
                
                <div class="play-btn-text">
                    <p class="hidden-md-down">Leading voice talent of Denmark</p>
                    <p class="hidden-md-up">Listen to sample</p>
                    <Flag DK text="DK | Audio" />
                </div>

            </div>
        </div>


        <svg class="pointer-events-none" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.2" cx="500" cy="500" r="500" fill="#9A8C99" />
        </svg>
        
        <img class="pointer-events-none" src="/image/hero-image.png" alt="Hero Image" />
    </div>
</template>

<script>
import Flag from './Flag.vue';

export default {
    name: 'Hero',
    components: {  
        Flag,        
    },

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



<style>
.hero {
    position: relative;
    display: flex;
    height: 100dvh;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 10vw;
    background-color: var(--color-light-orange);
    overflow: hidden;
    
    @media (min-width: 800px) {
        
        align-items: center;
    }

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
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1016px;
    gap: 40px;
    z-index: 2;
    margin-bottom: 48px;

    @media (min-width: 800px) {
        margin-bottom: 0;
    }
}

.hero-title {
    text-transform: uppercase;
}

.hero > .hero-content > h1 > span {
    display: block;
    color: var(--color-dark-blue);
}

.hero>.hero-content>h1>span>b {
    font-weight: 900;
}

.hero-player {
    display: flex; 
    font-size: 16px; 
    text-transform: uppercase; 
    gap: 16px;
    
    @media (min-width: 800px) {
        font-size: 32px; 
    }
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

.play-btn-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    /* white-space: nowrap; */

    @media (min-width: 800px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        column-gap: 16px;
        row-gap: 0px;
        flex-wrap: wrap;
    }

}

</style>