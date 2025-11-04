<template>
    <div class="soundwave-container" :class="{ 'menu-open': isMenuOpen }">
        <canvas 
            ref="soundwaveCanvas" 
            :width="size" 
            :height="size"
            class="soundwave-canvas"
            @click="togglePlay"
        ></canvas>
        <audio ref="audioPlayer" :src="audioSrc"></audio>
    </div>
</template>

<script>
export default {
    name: 'Soundwave',
    inject: ['isMenuOpen'],
    
    props: {
        audioSrc: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 100
        }
    },

    data() {
        return {
            running: false,
            amplitude: 0,
            targetAmplitude: 0,
            animationId: null,
            ctx: null
        };
    },

    mounted() {
        this.ctx = this.$refs.soundwaveCanvas.getContext('2d');
        this.draw();
        
        // Listen for audio end event
        this.$refs.audioPlayer.addEventListener('ended', this.onAudioEnded);
    },

    beforeUnmount() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        // Clean up event listener
        this.$refs.audioPlayer.removeEventListener('ended', this.onAudioEnded);
    },

    methods: {
        draw() {
            const canvas = this.$refs.soundwaveCanvas;
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Get computed color from canvas element
            const computedStyle = window.getComputedStyle(canvas);
            const color = computedStyle.color || '#333';
            this.ctx.strokeStyle = color;
            this.ctx.beginPath();

            // Smooth amplitude easing
            this.amplitude += (this.targetAmplitude - this.amplitude) * 0.1;

            // Current wave amplitude (never goes to 0, minimum is 3)
            const currentAmplitude = Math.max(this.amplitude, 3);

            // Add padding from edges
            const padding = 10;
            const drawWidth = canvas.width - (padding * 2);

            // Draw moving sine wave (slower tempo, wider gaps, with padding)
            for (let x = 0; x < drawWidth; x++) {
                const y = canvas.height/2 + Math.sin((x + Date.now()/25) * 0.12) * currentAmplitude;
                const xPos = x + padding;
                if (x === 0) this.ctx.moveTo(xPos, y);
                else this.ctx.lineTo(xPos, y);
            }

            this.ctx.stroke();
            this.animationId = requestAnimationFrame(this.draw);
        },

        async togglePlay() {
            this.running = !this.running;
            this.targetAmplitude = this.running ? 40 : 0;

            const audio = this.$refs.audioPlayer;

            if (this.running) {
                try {
                    await audio.play();
                } catch (err) {
                    console.log("Autoplay blocked, user must click:", err);
                }
            } else {
                audio.pause();
                audio.currentTime = 0;
            }
        },

        onAudioEnded() {
            // Reset to mute animation when audio ends
            this.running = false;
            this.targetAmplitude = 0;
        }
    }
}
</script>

<style scoped>
.soundwave-container {
    position: fixed;
    right: 45px;
    bottom: 30px;
    z-index: 9999;
    display: inline-block;
}

.soundwave-canvas {
    /* border: 1px solid black; */
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease, stroke 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
    color: #333;
    stroke: currentColor;
}

.soundwave-canvas:hover {
    transform: scale(1.05);
}

.soundwave-canvas:active {
    transform: scale(0.95);
}

.soundwave-container.menu-open .soundwave-canvas {
    color: #F6F6F6;
}
</style>
