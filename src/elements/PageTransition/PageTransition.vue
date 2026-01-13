<template>
    <div class="page-transition" :class="{ 'active': isAnimating }">
        <svg 
            class="transition-svg" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
        >
            <path 
                ref="transitionPath"
                :d="currentPath"
                fill="#2A2A2A"
            />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'PageTransition',

    data() {
        return {
            isAnimating: false,
            currentPath: 'M 0 0 V 0 Q 50 0 100 0 V 0 z', // Start hidden at top
            animationFrame: null,
            progress: 0,
            phase: 'idle', // 'enter', 'exit', 'idle'
        };
    },

    methods: {
        // Generate curved path based on progress
        generatePath(progress, direction = 'enter') {
            // progress: 0 to 1
            // direction: 'enter' (top to bottom cover) or 'exit' (lift up to reveal)
            
            if (direction === 'enter') {
                // Curve sweeps DOWN from top to cover the screen
                const curveHeight = Math.sin(progress * Math.PI) * 30; // Curve intensity
                const baseY = progress * 100; // 0 to 100 (top to bottom)
                const curveY = baseY + curveHeight; // Curve bulges downward
                
                return `M 0 0 V ${baseY} Q 50 ${curveY} 100 ${baseY} V 0 z`;
            } else {
                // Start fully covered, then lift UP to reveal from bottom
                // The TOP edge of the curtain moves up
                const curveHeight = Math.sin(progress * Math.PI) * 30;
                const topY = progress * 100; // Top edge moves from 0 to 100 (goes up and off screen)
                const curveY = topY - curveHeight; // Curve bulges upward as it lifts
                
                // Full rectangle from topY to 100 (bottom)
                return `M 0 ${topY} Q 50 ${curveY} 100 ${topY} V 100 H 0 z`;
            }
        },

        // Animate the transition
        async animate() {
            return new Promise((resolve) => {
                this.isAnimating = true;
                this.progress = 0;
                this.phase = 'enter';

                const duration = 600; // ms for each phase
                const startTime = performance.now();

                const animateFrame = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    
                    if (this.phase === 'enter') {
                        // First phase: curve enters from bottom
                        this.progress = Math.min(elapsed / duration, 1);
                        this.progress = this.easeInOutCubic(this.progress);
                        this.currentPath = this.generatePath(this.progress, 'enter');

                        if (this.progress >= 1) {
                            // Full coverage reached, emit event for route change
                            this.$emit('midpoint');
                            this.phase = 'hold';
                            this.holdStartTime = currentTime;
                        }
                    } else if (this.phase === 'hold') {
                        // Brief hold at full coverage
                        if (currentTime - this.holdStartTime > 100) {
                            this.phase = 'exit';
                            this.exitStartTime = currentTime;
                            this.progress = 0;
                        }
                    } else if (this.phase === 'exit') {
                        // Second phase: curve exits through top
                        this.progress = Math.min((currentTime - this.exitStartTime) / duration, 1);
                        this.progress = this.easeInOutCubic(this.progress);
                        this.currentPath = this.generatePath(this.progress, 'exit');

                        if (this.progress >= 1) {
                            this.isAnimating = false;
                            this.phase = 'idle';
                            this.currentPath = 'M 0 0 V 0 Q 50 0 100 0 V 0 z'; // Reset to hidden at top
                            resolve();
                            return;
                        }
                    }

                    this.animationFrame = requestAnimationFrame(animateFrame);
                };

                this.animationFrame = requestAnimationFrame(animateFrame);
            });
        },

        // Easing function for smooth animation
        easeInOutCubic(t) {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        },

        // Clean up
        stopAnimation() {
            if (this.animationFrame) {
                cancelAnimationFrame(this.animationFrame);
            }
        }
    },

    beforeUnmount() {
        this.stopAnimation();
    }
};
</script>

<style scoped>
.page-transition {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9998;
}

.page-transition.active {
    pointer-events: all;
}

.transition-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
