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
            <!-- Language Flags -->
            <div class="language-flags">
                <button 
                    class="flag-button" 
                    :class="{ active: selectedLanguage === 'DK' }"
                    @click.stop="selectLanguage('DK')"
                    title="Dansk"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(0 .5)"><circle fill="#F0F0F0" cx="12" cy="11.5" r="12"/><path fill="#D80027" d="M9.4,9.9h14.5C23.1,4,18.1-0.5,12-0.5c-0.9,0-1.8,0.1-2.6,0.3V9.9L9.4,9.9z M6.3,9.9V1C3,2.8,0.6,6.1,0.1,9.9H6.3L6.3,9.9z M6.3,13.1H0.1c0.5,3.9,2.9,7.2,6.2,9V13.1L6.3,13.1z M9.4,13.1v10.1c0.8,0.2,1.7,0.3,2.6,0.3c6.1,0,11.1-4.5,11.9-10.4H9.4L9.4,13.1z"/></g></svg>
                </button>
                <button 
                    class="flag-button" 
                    :class="{ active: selectedLanguage === 'UK' }"
                    @click.stop="selectLanguage('UK')"
                    title="English"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(0 .5)"><circle fill="#F0F0F0" cx="12" cy="11.5" r="12"/><path fill="#0052B4" d="M2.5,4.2C1.5,5.4,0.8,6.8,0.4,8.4h6.2L2.5,4.2z M23.6,8.4c-0.4-1.5-1.1-2.9-2.1-4.2l-4.2,4.2H23.6z M0.4,14.6c0.4,1.5,1.1,2.9,2.1,4.2l4.2-4.2H0.4L0.4,14.6z M19.3,2c-1.2-0.9-2.6-1.7-4.2-2.1v6.2L19.3,2z M4.7,21c1.2,0.9,2.6,1.7,4.2,2.1v-6.2L4.7,21z M8.9-0.1C7.3,0.3,5.9,1,4.7,2l4.2,4.2V-0.1z M15.1,23.1c1.5-0.4,2.9-1.1,4.2-2.1l-4.2-4.2V23.1z M17.3,14.6l4.2,4.2c0.9-1.2,1.7-2.6,2.1-4.2H17.3z"/><g><path fill="#D80027" d="M23.9,9.9H13.6h0V-0.4c-0.5-0.1-1-0.1-1.6-0.1c-0.5,0-1.1,0-1.6,0.1V9.9v0H0.1C0,10.4,0,11,0,11.5c0,0.5,0,1.1,0.1,1.6h10.3h0v10.3c0.5,0.1,1,0.1,1.6,0.1c0.5,0,1.1,0,1.6-0.1V13.1v0h10.3c0.1-0.5,0.1-1,0.1-1.6C24,11,24,10.4,23.9,9.9z"/><path fill="#D80027" d="M15.1,14.6L15.1,14.6l5.4,5.4c0.2-0.2,0.5-0.5,0.7-0.8l-4.6-4.6H15.1L15.1,14.6z M8.9,14.6L8.9,14.6L3.5,20c0.2,0.2,0.5,0.5,0.8,0.7l4.6-4.6V14.6z M8.9,8.4L8.9,8.4L3.5,3C3.3,3.3,3,3.5,2.8,3.8l4.6,4.6H8.9L8.9,8.4z M15.1,8.4L15.1,8.4L20.5,3c-0.2-0.2-0.5-0.5-0.8-0.7l-4.6,4.6V8.4L15.1,8.4z"/></g></g></svg>
                </button>
            </div>
            <div v-if="showPrompt && !hasInteracted" class="soundwave-prompt">
                <span class="prompt-arrow">↑</span>
                <span class="prompt-text">Click to hear my voice</span>
            </div>
        </div>
        <audio ref="audioPlayerDK" :src="audioSrc" preload="auto"></audio>
        <audio ref="audioPlayerEN" :src="audioSrcEn" preload="auto"></audio>
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
        audioSrcEn: {
            type: String,
            default: ''
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
            isDocked: false,
            selectedLanguage: 'DK'
        };
    },

    computed: {
        activeAudio() {
            return this.selectedLanguage === 'DK' ? this.$refs.audioPlayerDK : this.$refs.audioPlayerEN;
        },
        inactiveAudio() {
            return this.selectedLanguage === 'DK' ? this.$refs.audioPlayerEN : this.$refs.audioPlayerDK;
        }
    },

    mounted() {
        this.ctx = this.$refs.soundwaveCanvas.getContext('2d');
        this.draw();
        
        // Listen for audio end event on both players
        this.$refs.audioPlayerDK.addEventListener('ended', this.onAudioEnded);
        this.$refs.audioPlayerEN.addEventListener('ended', this.onAudioEnded);
        
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
        // Clean up event listeners
        this.$refs.audioPlayerDK.removeEventListener('ended', this.onAudioEnded);
        this.$refs.audioPlayerEN.removeEventListener('ended', this.onAudioEnded);
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
            
            const audio = this.activeAudio;
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
                this.animateToDocked();
            }
            
            this.togglePlay();
        },

        async togglePlay() {
            this.running = !this.running;
            this.targetAmplitude = this.running ? 40 : 0;

            const audio = this.activeAudio;

            if (this.running) {
                try {
                    await audio.play();
                } catch (err) {
                    console.log("Autoplay blocked, user must click:", err);
                }
            } else {
                audio.pause();
            }
        },

        onAudioEnded() {
            // Reset to mute animation when audio ends
            this.running = false;
            this.targetAmplitude = 0;
        },

        selectLanguage(lang) {
            // Stop both players
            this.$refs.audioPlayerDK.pause();
            this.$refs.audioPlayerDK.currentTime = 0;
            this.$refs.audioPlayerEN.pause();
            this.$refs.audioPlayerEN.currentTime = 0;
            this.running = false;
            this.targetAmplitude = 0;
            
            this.selectedLanguage = lang;

            this.hasInteracted = true;
            if (!this.isDocked) {
                this.animateToDocked();
            }
            
            // Start playback immediately — both files are already preloaded
            this.$nextTick(() => {
                this.play();
            });
        },

        animateToDocked() {
            const container = this.$el;
            // Capture current position
            const rect = container.getBoundingClientRect();
            const startX = rect.left;
            const startY = rect.top;
            
            // Calculate target docked position — adjust for mobile
            const isMobile = window.innerWidth <= 480;
            const isTablet = window.innerWidth <= 1023;
            const rightOffset = isMobile ? 12 : isTablet ? 20 : 45;
            const bottomOffset = isMobile ? 12 : isTablet ? 20 : 30;
            const targetX = window.innerWidth - rightOffset - rect.width;
            const targetY = window.innerHeight - bottomOffset - rect.height;
            
            // Fix position at current spot using left/top
            container.style.transition = 'none';
            container.style.left = startX + 'px';
            container.style.top = startY + 'px';
            container.style.right = 'auto';
            container.style.bottom = 'auto';
            container.style.transform = 'none';
            
            // Force reflow
            container.offsetHeight;
            
            // Animate to target
            container.style.transition = 'left 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
            container.style.left = targetX + 'px';
            container.style.top = targetY + 'px';
            
            // After animation, switch to docked class and remove inline styles
            setTimeout(() => {
                this.isDocked = true;
                container.style.transition = '';
                container.style.left = '';
                container.style.top = '';
                container.style.right = '';
                container.style.bottom = '';
                container.style.transform = '';
            }, 850);
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

.menu-open .soundwave-container {
    z-index: 9997;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
}

/* Initial position - below hero text, centered */
.soundwave-container.is-initial {
    left: 50%;
    /* top: 75vh; */
    bottom: 100px;
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

/* Pulse animation on worm - commented out, flags handle this now
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
*/

.soundwave-canvas {
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease, stroke 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), top 0.6s ease;
    color: #333;
    stroke: currentColor;
}

/* Compact height when centered, full size when docked */
/* .is-initial .soundwave-canvas {
    position: relative;
    top: 16px;
}

.is-docked .soundwave-canvas {
    top: 0;
} */

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

/* Language flags */
.language-flags {
    display: flex;
    gap: 10px;
    justify-content: center;
    /* margin-top: 8px; */
}

.flag-button {
    position: relative;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
}

.flag-button:hover {
    transform: scale(1.15);
}

.flag-button svg {
    width: 24px;
    height: 24px;
    display: block;
    opacity: 0.5;
    transition: opacity 0.3s ease;
}

.flag-button.active svg {
    opacity: 1;
}

/* Animated ring around active flag */
.flag-button.active::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 32px;
    height: 32px;
    border: 1.5px solid #333;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: flagRing 2s ease-in-out infinite;
}

@keyframes flagRing {
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    70% {
        transform: translate(-50%, -50%) scale(1.6);
        opacity: 0;
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
    }
}

.menu-open .flag-button.active::after {
    border-color: #F6F6F6;
}

.menu-open .flag-button svg {
    filter: brightness(2);
}

/* Responsive Soundwave */
@media (max-width: 1023px) {
    .soundwave-container.is-initial {
        bottom: 140px;
    }

    .soundwave-container.is-docked {
        right: 20px;
        bottom: 30px;
    }

    .soundwave-canvas {
        width: 90px !important;
        height: 90px !important;
    }

    .flag-button {
        width: 28px;
        height: 28px;
    }

    .flag-button svg {
        width: 20px;
        height: 20px;
    }

    .prompt-text {
        font-size: 12px;
    }
}

@media (max-width: 480px) {
    .soundwave-container.is-initial {
        bottom: 120px;
    }

    .soundwave-container.is-docked {
        right: 16px;
        bottom: 24px;
    }

    .soundwave-canvas {
        width: 70px !important;
        height: 70px !important;
    }

    .language-flags {
        gap: 6px;
    }

    .flag-button {
        width: 24px;
        height: 24px;
    }

    .flag-button svg {
        width: 18px;
        height: 18px;
    }

    .prompt-text {
        font-size: 11px;
    }
}
</style>
