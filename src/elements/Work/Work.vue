<template>
    <section class="work-group-container">
        <div>
            <ul class="work-group">
                <li>
                    <router-link to="/work/commercial" class="work-container">
                        <h3>1</h3>
                        <canvas ref="canvas0" class="connector-line"></canvas>
                        <p>Commercial</p>
                        <svg viewBox="0 0 72 100" class="work-arrow">
                            <path d="M70.4,58.9L70.1,57l-0.2-0.9c0,0,0,0,0,0l-0.2-0.9c-18.7,3.4-27.6,13.4-31.9,22.7V3h-0.9H35h-0.9
                                v75.3c-4.2-9.7-13.2-20.2-31.9-23.2L1.9,57L1.7,58c0,0,0,0,0,0l-0.1,0.9c28.7,4.5,32.2,27.6,32.5,35.3c-0.1,1.7,0,2.7,0,2.8l0.9-0.1
                                v0l0.5,0l2.4,0.1c0,0,0-0.6,0-1.5v-2.5C38.4,84.4,42.5,63.9,70.4,58.9z"></path>
                        </svg>
                    </router-link>
                </li>
                <li>
                    <router-link to="/work/corporate-imaging" class="work-container">
                        <h3>2</h3>
                        <canvas ref="canvas1" class="connector-line"></canvas>
                        <p>Corporate & Imaging</p>
                        <svg viewBox="0 0 72 100" class="work-arrow">
                            <path d="M70.4,58.9L70.1,57l-0.2-0.9c0,0,0,0,0,0l-0.2-0.9c-18.7,3.4-27.6,13.4-31.9,22.7V3h-0.9H35h-0.9
                                v75.3c-4.2-9.7-13.2-20.2-31.9-23.2L1.9,57L1.7,58c0,0,0,0,0,0l-0.1,0.9c28.7,4.5,32.2,27.6,32.5,35.3c-0.1,1.7,0,2.7,0,2.8l0.9-0.1
                                v0l0.5,0l2.4,0.1c0,0,0-0.6,0-1.5v-2.5C38.4,84.4,42.5,63.9,70.4,58.9z"></path>
                        </svg>
                    </router-link>
                </li>
                <li>
                    <router-link to="/work/acting-narration" class="work-container">
                        <h3>3</h3>
                        <canvas ref="canvas2" class="connector-line"></canvas>
                        <p>Acting & Narration</p>
                        <svg viewBox="0 0 72 100" class="work-arrow">
                            <path d="M70.4,58.9L70.1,57l-0.2-0.9c0,0,0,0,0,0l-0.2-0.9c-18.7,3.4-27.6,13.4-31.9,22.7V3h-0.9H35h-0.9
                                v75.3c-4.2-9.7-13.2-20.2-31.9-23.2L1.9,57L1.7,58c0,0,0,0,0,0l-0.1,0.9c28.7,4.5,32.2,27.6,32.5,35.3c-0.1,1.7,0,2.7,0,2.8l0.9-0.1
                                v0l0.5,0l2.4,0.1c0,0,0-0.6,0-1.5v-2.5C38.4,84.4,42.5,63.9,70.4,58.9z"></path>
                        </svg>
                    </router-link>
                </li>
                <li>
                    <router-link to="/work/audiobooks-docs" class="work-container">
                        <h3>4</h3>
                        <p>Audiobooks & Docs</p>
                        <svg viewBox="0 0 72 100" class="work-arrow">
                            <path d="M70.4,58.9L70.1,57l-0.2-0.9c0,0,0,0,0,0l-0.2-0.9c-18.7,3.4-27.6,13.4-31.9,22.7V3h-0.9H35h-0.9
                                v75.3c-4.2-9.7-13.2-20.2-31.9-23.2L1.9,57L1.7,58c0,0,0,0,0,0l-0.1,0.9c28.7,4.5,32.2,27.6,32.5,35.3c-0.1,1.7,0,2.7,0,2.8l0.9-0.1
                                v0l0.5,0l2.4,0.1c0,0,0-0.6,0-1.5v-2.5C38.4,84.4,42.5,63.9,70.4,58.9z"></path>
                        </svg>
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
      lines: [], // Will store line state for each canvas
      animationFrame: null,
      numPoints: 20, // Number of points along the line for smooth curves
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

    // Initialize canvas lines
    this.initCanvasLines();
    
    // Start animation loop
    this.startAnimation();
    
    // Handle resize
    window.addEventListener('resize', this.handleResize);
  },

  beforeUnmount() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    initCanvasLines() {
      for (let i = 0; i < 3; i++) {
        const canvas = this.$refs[`canvas${i}`];
        if (!canvas) continue;
        
        const container = canvas.closest('.work-container');
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        this.resizeCanvas(canvas);
        
        // Initialize points with spring physics
        const points = [];
        for (let j = 0; j < this.numPoints; j++) {
          points.push({
            x: 0,           // Current x offset from center
            targetX: 0,     // Target x position
            velocity: 0,    // Current velocity for spring physics
          });
        }
        
        this.lines.push({
          canvas,
          ctx,
          container,
          points,
          isHovering: false,
          mouseY: 0,
          mouseX: 0,
        });
        
        // Set up event listeners
        this.setupCanvasEvents(i);
      }
    },
    
    resizeCanvas(canvas) {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
    },
    
    handleResize() {
      this.lines.forEach(line => {
        this.resizeCanvas(line.canvas);
      });
    },
    
    setupCanvasEvents(index) {
      const line = this.lines[index];
      const workGroup = this.$el.querySelector('.work-group');
      
      const handleMouseMove = (e) => {
        const rect = line.canvas.getBoundingClientRect();
        
        // Check if mouse is within canvas bounds
        if (e.clientX >= rect.left && e.clientX <= rect.right &&
            e.clientY >= rect.top && e.clientY <= rect.bottom) {
          
          line.isHovering = true;
          line.mouseX = e.clientX - rect.left;
          line.mouseY = e.clientY - rect.top;
          
          // Update target positions based on mouse
          this.updateTargets(index);
        } else {
          line.isHovering = false;
          // Reset targets to center (0 offset)
          line.points.forEach(p => {
            p.targetX = 0;
          });
        }
      };
      
      const handleMouseLeave = () => {
        line.isHovering = false;
        line.points.forEach(p => {
          p.targetX = 0;
        });
      };
      
      workGroup.addEventListener('mousemove', handleMouseMove);
      workGroup.addEventListener('mouseleave', handleMouseLeave);
    },
    
    updateTargets(index) {
      const line = this.lines[index];
      const rect = line.canvas.getBoundingClientRect();
      const width = rect.width;
      const centerX = width / 2;
      const numPoints = this.numPoints;
      
      // Calculate mouse influence on each point
      line.points.forEach((point, i) => {
        // Keep first and last points frozen at center
        if (i === 0 || i === numPoints - 1) {
          point.targetX = 0;
          return;
        }
        
        // Calculate edge dampening (points near top/bottom move less)
        // Using sine curve: 0 at edges, 1 in middle
        const edgePosition = i / (numPoints - 1); // 0 to 1
        const edgeDampen = Math.sin(edgePosition * Math.PI);
        
        // All middle points bend toward mouse X, dampened by their edge position
        // Adjust 0.5 to control curviness (lower = less curvy, higher = more curvy)
        const bendAmount = (line.mouseX - centerX) * edgeDampen * 0.5;
        point.targetX = bendAmount;
      });
    },
    
    startAnimation() {
      const animate = () => {
        this.lines.forEach((line, index) => {
          this.updatePhysics(index);
          this.drawLine(index);
        });
        
        this.animationFrame = requestAnimationFrame(animate);
      };
      
      animate();
    },
    
    updatePhysics(index) {
      const line = this.lines[index];
      
      // Spring physics parameters
      const stiffness = 0.08;  // How quickly it moves to target (lower = slower)
      const damping = 0.75;    // How bouncy (lower = more bouncy, higher = less bouncy)
      
      line.points.forEach(point => {
        // Calculate spring force
        const displacement = point.targetX - point.x;
        const springForce = displacement * stiffness;
        
        // Apply force and damping
        point.velocity += springForce;
        point.velocity *= damping;
        
        // Update position
        point.x += point.velocity;
      });
    },
    
    drawLine(index) {
      const line = this.lines[index];
      const rect = line.canvas.getBoundingClientRect();
      const ctx = line.ctx;
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Get computed style for color
      const computedStyle = getComputedStyle(line.container);
      const color = computedStyle.color;
      
      // Draw the line
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = line.isHovering ? 0.7 : 0.3;
      
      // Draw smooth curve through all points
      line.points.forEach((point, i) => {
        const y = (i / (this.numPoints - 1)) * height;
        const x = centerX + point.x;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          // Use quadratic curves for smoothness
          const prevPoint = line.points[i - 1];
          const prevY = ((i - 1) / (this.numPoints - 1)) * height;
          const prevX = centerX + prevPoint.x;
          
          const cpX = (prevX + x) / 2;
          const cpY = (prevY + y) / 2;
          
          ctx.quadraticCurveTo(prevX, prevY, cpX, cpY);
        }
      });
      
      // Draw to the last point
      const lastPoint = line.points[line.points.length - 1];
      ctx.lineTo(centerX + lastPoint.x, height);
      
      ctx.stroke();
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

    /* .work-container:hover .work-arrow {
        bottom: calc(0px + 7.5vh);
    } */

    .work-arrow {
        position: absolute;
        width: 15vh;
        bottom: calc(0px - 15vh);
        margin-top: 15px;
        fill: currentColor;
        /* transition: 0.3s ease; */

        /* &:hover {
            bottom: 0;
        } */
    }

    h3 {
        font-family: 'Roslindale Display Condensed', serif;
        /* font-optical-sizing: auto;
        font-variation-settings: 'opsz' 12;
        font-weight: 600; */
        font-weight: normal;
        font-size: 35vw;
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
        /* transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); */
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

    /* .work-container::after {
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
    } */

    .work-container h3,
    .work-container p,
    .work-container .work-arrow {
        /* transition: transform 1s cubic-bezier(0.34, 1.56, 0.64, 1); */
        transition: all .5s ease;
    }

    .work-container:hover h3 {
        transform: translateY(-15vh);
        color: rgb(107, 87, 106);
    }

    .work-container:hover p {
        transform: translateY(-15vh);
    }

    .work-container:hover .work-arrow {
        transform: translateY(-15vh);
    }
</style>