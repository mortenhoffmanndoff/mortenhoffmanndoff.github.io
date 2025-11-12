<template>
    <div class="hero" :class="heightClass">
        <img v-if="imageSrc" class="hero-image" :src="imageSrc" alt="Hero Image" />
        <div class="hero-content">
            <div class="hero-text">
                <div 
                    v-for="(textItem, index) in textItems" 
                    :key="index"
                    class="hero-text-item"
                    :class="textSize"
                >
                    <div v-html="textItem"></div>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
    
</template>
<script>
import { animate, stagger, inView } from "motion";
export default {
    name: 'Hero',
    
    props: {
        textItems: {
            type: Array,
            default: () => [
                'My <strong>Voice</strong>',
                'is the <strong>sound</strong>',
                'of your <strong>brand</strong>'
            ]
        },
        height: {
            type: String,
            default: 'auto',
            validator: (value) => ['auto', 'small', 'medium', 'large'].includes(value)
        },
        textSize: {
            type: String,
            default: 'default',
            validator: (value) => ['default', 'large', 'xlarge'].includes(value)
        },
        imageSrc: {
            type: String,
        }
    },

    computed: {
        heightClass() {
            if (this.height === 'auto') return '';
            return `${this.height}-height`;
        }
    },
    
    mounted() {
        // Target this specific hero instance using $el
        this.$nextTick(() => {
            const heroText = this.$el.querySelector('.hero-text');
            const heroTextItems = this.$el.querySelectorAll('.hero-text-item > *');
            
            inView(heroText, () => {
                animate(heroTextItems,          // Animate only this hero's text items
                    {                               
                        opacity: 1, 
                        y: ['100%', 0] 
                    }, 
                    {       
                        delay: 0.2,
                        duration: .75,
                        delay: stagger(.15),
                        ease: [0.25, 0.1, 0.25, 1]
                    }
                );
            });
        });
    }
}
</script>

<style scoped>
.hero {
    display: grid;
    grid-template-areas: 'overlay';
    font-family: 'Roslindale Display Condensed';
    font-weight: normal;
    width: 100vw;
    overflow: hidden;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &.large-height {
        height: 100vh;
    }

    &.medium-height {
        height: 75vh;
    }

    &.small-height {
        height: 50vh;
    }

    .hero-image {
        grid-area: overlay;
        height: 100vh;
        width: 100vw;
        object-fit: cover;
        object-position: right;
        /* z-index: 1;
        grid-area: overlay;
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover; */
    }

    .hero-content {
        padding: 60px;
        z-index: 2;
        display: grid;
        grid-area: overlay;
        align-items: center;
        
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .hero-text-item {
        text-transform: uppercase;
        font-size: clamp(32px, 7vw, 120px);
        line-height: 1;
        font-weight: 200;
        overflow: hidden;

        &.large {
            font-size: clamp(40px, 9vw, 200px);
        }

        &.xlarge {
            font-size: clamp(40px, 12vw, 200px);
        }
    }

}

.hero-text-item > div {
    opacity: 0;
    transform: translateY(100%);
}

.hero-text-item strong {
    font-weight: 700;
}

</style>