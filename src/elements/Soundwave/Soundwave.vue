<template>
    <div 
        class="soundwave-container" 
        :class="{ 
            'menu-open': isMenuOpen,
            'is-docked': isDocked,
            'is-initial': !isDocked
        }"
    >
        <div class="soundwave-wrapper" :class="{ 'has-prompt': showPrompt && !hasInteracted }">
            <canvas 
                ref="soundwaveCanvas" 
                :width="size" 
                :height="size"
                class="soundwave-canvas"
                @click="handleClick"
            ></canvas>
            <div v-if="showPrompt && !hasInteracted" class="soundwave-prompt">
                <span class="prompt-arrow">↑</span>
                <span class="prompt-text">Click to hear my voice</span>
            </div>
        </div>
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
        },
        autoplay: {
            type: Boolean,
            default: false
        },
        showPrompt: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            running: false,
            amplitude: 0,
            targetAmplitude: 0,
            animationId: null,
            ctx: null,
            hasInteracted: false,
            isDocked: false
        };
    },

    mounted() {
        this.ctx = this.$refs.soundwaveCanvas.getContext('2d');
        this.draw();
        
        // Listen for audio end event
        this.$refs.audioPlayer.addEventListener('ended', this.onAudioEnded);
        
        // Check if we should autoplay (only works if user has interacted with the page before)
        if (this.autoplay) {
            // Small delay to ensure page is ready
            setTimeout(() => this.play(), 500);
        }
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

        async play() {
            if (this.running) return;
            
            this.running = true;
            this.targetAmplitude = 40;
            this.hasInteracted = true;
            
            const audio = this.$refs.audioPlayer;
            try {
                await audio.play();
            } catch (err) {
                // Autoplay blocked, reset state
                console.log("Autoplay blocked:", err);
                this.running = false;
                this.targetAmplitude = 0;
            }
        },

        handleClick() {
            this.hasInteracted = true;
            
            // If not docked yet, animate to corner
            if (!this.isDocked) {
                this.isDocked = true;
            }
            
            this.togglePlay();
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
    z-index: 9999;
    display: inline-block;
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Initial position - below hero text, centered */
.soundwave-container.is-initial {
    left: 50%;
    top: 75vh;
    transform: translateX(-50%);
}

/* Docked position - bottom right corner */
.soundwave-container.is-docked {
    right: 45px;
    bottom: 30px;
    left: auto;
    top: auto;
    transform: none;
}

.soundwave-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.soundwave-wrapper.has-prompt .soundwave-canvas {
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(42, 42, 42, 0.3);
    }
    50% {
        transform: scale(1.05);
        box-shadow: 0 0 0 15px rgba(42, 42, 42, 0);
    }
}

.soundwave-canvas {
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease, stroke 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
    color: #333;
    stroke: currentColor;
}

.soundwave-canvas:hover {
    transform: scale(1.05);
    animation: none;
}

.soundwave-canvas:active {
    transform: scale(0.95);
}

.soundwave-prompt {
    position: absolute;
    top: 100%;
    margin-top: 10px;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    animation: promptFade 2s ease-in-out infinite;
}

/* When docked, prompt goes to the left */
.is-docked .soundwave-prompt {
    position: absolute;
    top: auto;
    right: 100%;
    margin-top: 0;
    margin-right: 15px;
    flex-direction: row;
    gap: 8px;
}

.is-docked .soundwave-prompt .prompt-arrow {
    content: '→';
}

@keyframes promptFade {
    0%, 100% {
        opacity: 0.6;
    }
    50% {
        opacity: 1;
    }
}

.prompt-text {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: #333;
}

.prompt-arrow {
    font-size: 16px;
    animation: arrowBounce 1s ease-in-out infinite;
}

/* Arrow bounces up when initial */
.is-initial .prompt-arrow {
    animation: arrowBounceUp 1s ease-in-out infinite;
}

@keyframes arrowBounceUp {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

@keyframes arrowBounce {
    0%, 100% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(5px);
    }
}

.soundwave-container.menu-open .soundwave-canvas {
    color: #F6F6F6;
}

.soundwave-container.menu-open .prompt-text,
.soundwave-container.menu-open .prompt-arrow {
    color: #F6F6F6;
}
</style>
