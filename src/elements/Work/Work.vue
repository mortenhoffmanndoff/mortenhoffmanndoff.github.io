<template>
    <section class="work-group-container">
        <div>
            <ul class="work-group">
                <li>
                    <router-link to="/work/commercial" class="work-container">
                        <h3>1</h3>
                        <svg class="connector-line" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path :d="linePaths[0]" stroke="currentColor" fill="none" stroke-width="0.5" />
                        </svg>
                        <p>Commercial</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/work/corporate-imaging" class="work-container">
                        <h3>2</h3>
                        <svg class="connector-line" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path :d="linePaths[1]" stroke="currentColor" fill="none" stroke-width="0.5" />
                        </svg>
                        <p>Corporate & Imaging</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/work/acting-narration" class="work-container">
                        <h3>3</h3>
                        <svg class="connector-line" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path :d="linePaths[2]" stroke="currentColor" fill="none" stroke-width="0.5" />
                        </svg>
                        <p>Acting & Narration</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/work/audiobooks-docs" class="work-container">
                        <h3>4</h3>
                        <p>Audiobooks & Docs</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { animate, scroll } from "motion";

export default {
  name: "Work",

  data() {
    return {
      linePaths: ['M 50 0 L 50 100', 'M 50 0 L 50 100', 'M 50 0 L 50 100'],
      mousePositions: [null, null, null]
    };
  },

  mounted() {
    const items = document.querySelectorAll(".work-container")

    scroll(
        animate(".work-group", {
            transform: ["none", `translateX(-${(items.length - 4) * 25}vw)`],
        }),
        { target: document.querySelector(".work-group-container") }
    )

    // Add mouse tracking for each line
    const containers = this.$el.querySelectorAll('.work-container');
    containers.forEach((container, index) => {
      if (index < 3) { // Only first 3 have lines
        this.setupLineInteraction(container, index);
      }
    });
  },

  methods: {
    setupLineInteraction(container, index) {
      const svg = container.querySelector('.connector-line');
      if (!svg) return;

      // Listen on the parent .work-group to capture mouse movement across both containers
      const workGroup = this.$el.querySelector('.work-group');

      const handleMouseMove = (e) => {
        const rect = svg.getBoundingClientRect();
        
        // Check if mouse is within the visual bounds of the SVG (including transform)
        if (e.clientX < rect.left || e.clientX > rect.right || 
            e.clientY < rect.top || e.clientY > rect.bottom) {
          this.animateLineBack(index);
          return;
        }

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        // Calculate distance from center vertical line
        const distanceFromCenter = Math.abs(x - 50);
        const maxInfluenceDistance = 60; // influence distance
        
        if (distanceFromCenter < maxInfluenceDistance) {
          // Create curved path with smooth easing
          const influence = 1 - (distanceFromCenter / maxInfluenceDistance);
          const bendAmount = (x - 50) * influence * 0.8;
          
          // Quadratic bezier curve for smooth bend (vertical line)
          this.linePaths[index] = `M 50 0 Q ${50 + bendAmount} ${y} 50 100`;
        } else {
          // Smoothly return to straight line
          this.animateLineBack(index);
        }
      };

      const handleMouseLeave = () => {
        this.animateLineBack(index);
      };

      workGroup.addEventListener('mousemove', handleMouseMove);
      workGroup.addEventListener('mouseleave', handleMouseLeave);
    },

    animateLineBack(index) {
      // Smooth transition back to straight line
      const currentPath = this.linePaths[index];
      if (currentPath !== 'M 50 0 L 50 100') {
        this.linePaths[index] = 'M 50 0 L 50 100';
      }
    }
  }
};
</script>

<style scoped>

    .work-group-container {
        position: relative;
        /* adjust this to make the scroll slower or faster*/ 
        /* the higher the value, the slower the scroll */
        height: 100vh; 
    }

    .work-group-container > div {
        position: sticky;
        top: 0;
        overflow: hidden;
        height: 100vh;
    }

    .work-group {
        display: flex;
        list-style: none;

        > li {
            transition: all 0.3s ease;
        }
        > li:hover {
            /* background: rgba(var(--color-almost-white)); */
        }
    }

    .work-container {
        transform: translateY(-30px);
    }

    .connector-line {
        position: absolute;
        right: 0;
        top: 30px;
        bottom: 0;
        width: 25vw;
        height: 100%;
        pointer-events: none;
        opacity: 0.3;
        transition: opacity 0.3s ease;
        transform: translateX(12.5vw);
    }

    .work-container:hover .connector-line {
        opacity: 0.7;
    }

    h3 {
        font-family: 'Roslindale Display Condensed', serif;
        /* font-optical-sizing: auto;
        font-variation-settings: 'opsz' 12;
        font-weight: 600; */
        font-weight: normal;
        font-size: 25vw;
        line-height: 1;
        margin: 0;
    }

    p {
        font-size: 2.5vw;
        line-height: 1;
        margin: 0;
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .arrow {
        margin-top: 20px;
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

        .work-container {
        display: flex;
        width: 25vw;
        height: 100vh;
        flex: 0 0 auto;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        transition: transform 0.2s ease;
        text-decoration: none;
        color: inherit;
        position: relative;
    }

    .work-container::after {
        content: "i'll show you";
        position: absolute;
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 2px;
        padding: 10px 20px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        border-radius: 20px;
        opacity: 0;
        pointer-events: none;
        transition: all 0.4s ease;
        z-index: 1000;
    }

    .work-container:hover::after {
        opacity: 1;
    }

    .work-container h3 {
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .work-container:hover h3 {
        transform: translateY(-15px);
    }

    .work-container:hover p {
        transform: translateY(-10px);
    }

    .work-container:hover .arrow {
        transform: translateY(15px);
    }
</style>