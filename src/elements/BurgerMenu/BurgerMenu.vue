<template>
    <div class="burger-menu-container" @click="toggleMenu">
        <div class="circles-wrapper">
            <!-- SVG with both circles -->
            <svg class="circles-svg" width="112" height="107" viewBox="0 0 112 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Outer circle -->
                <circle class="outer-circle" cx="52" cy="52" r="51.5" transform="matrix(-1 0 0 1 108 2)" stroke="currentColor"/>
                <!-- Inner circle -->
                <path class="inner-circle" d="M56 1C25.5808 1 1 24.5476 1 53.5C1 82.4524 25.5808 106 56 106C86.4192 106 111 82.4524 111 53.5C111 24.5476 86.4192 1 56 1Z" stroke="currentColor" stroke-width="2"/>
            </svg>
            
            <!-- Burger icon -->
            <div class="burger-icon" :class="{ 'open': isOpen }">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BurgerMenu',
    
    data() {
        return {
            isOpen: false
        };
    },

    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
            this.$emit('toggle', this.isOpen);
        }
    }
}
</script>

<style scoped>
.burger-menu-container {
    position: relative;
    width: 112px;
    height: 107px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
}

.circles-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
}

.circles-svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    overflow: visible;
}

.outer-circle {
    animation: rotateClockwise 4s linear infinite;
    transform-origin: 56px;
}

.inner-circle {
    animation: rotateCounterClockwise 3s linear infinite;
    transform-origin: 56px
}

@keyframes rotateClockwise {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes rotateCounterClockwise {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
}

@keyframes bounce {
    0%, 100% {
        transform: translate(-50%, -50%) scale(.8);
    }
    50% {
        transform: translate(-50%, -50%) scale(.8);
    }
}

.burger-icon {
    position: relative;
    z-index: 10;
    width: 24px;
    height: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease;
}

.burger-menu-container:hover .burger-icon {
    transform: scale(1.1);
}

.line {
    width: 100%;
    height: 2px;
    background-color: currentColor;
    border-radius: 2px;
    transition: all 0.3s ease;
}

/* Burger to X animation */
.burger-icon.open .line:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.burger-icon.open .line:nth-child(2) {
    opacity: 0;
}

.burger-icon.open .line:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}
</style>
