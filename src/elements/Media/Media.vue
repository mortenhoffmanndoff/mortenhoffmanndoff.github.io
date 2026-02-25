<template>
    <div class="media-section">
        <div v-for="(item, index) in mediaItems" :key="index" :ref="`container-${index}`" class="media-container"
            :class="{ 'reverse': index % 2 === 1 }">
            <!-- Media Player -->
            <div class="media-player" :class="{ 'is-playing': playingStates[index] }" @click="item.type !== 'video' && togglePlay(index)">
                <!-- Video -->
                <video v-if="item.type === 'video'" :ref="`media-${index}`" :src="item.src" :poster="item.poster"
                    class="media-element" controls preload="metadata" playsinline />

                <!-- Audio Visualizer -->
                <div v-if="item.type === 'audio'" class="audio-visualizer" :class="{ 'playing': playingStates[index] }">
                    <audio :ref="`media-${index}`" :src="item.src" class="audio-element" />
                    <!-- Animated Soundwave -->
                    <div class="soundwave">
                        <div v-for="bar in 12" :key="bar" class="soundwave-bar"
                            :style="{ animationDelay: `${bar * 0.1}s` }"></div>
                    </div>
                </div>

                <!-- Custom Play Button -->
                <!-- <div class="play-button" :class="{ 'playing': playingStates[index] }">
                    <svg v-if="!playingStates[index]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    <svg v-else viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                </div> -->
            </div>

            <!-- Content Card -->
            <div class="content-card" :ref="`card-${index}`">
                <div class="media-type">
                    <!-- Danish Flag -->
                    <svg v-if="item.language === 'DK'" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24">
                        <g transform="translate(0 .5)">
                            <circle fill="#F0F0F0" class="st0" cx="12" cy="11.5" r="12" />
                            <path fill="#D80027" class="st1" d="M9.4,9.9h14.5C23.1,4,18.1-0.5,12-0.5c-0.9,0-1.8,0.1-2.6,0.3V9.9L9.4,9.9z M6.3,9.9V1C3,2.8,0.6,6.1,0.1,9.9
                                H6.3L6.3,9.9z M6.3,13.1H0.1c0.5,3.9,2.9,7.2,6.2,9V13.1L6.3,13.1z M9.4,13.1v10.1c0.8,0.2,1.7,0.3,2.6,0.3
                                c6.1,0,11.1-4.5,11.9-10.4H9.4L9.4,13.1z" />
                        </g>
                    </svg>

                    <!-- UK Flag -->
                    <svg v-else-if="item.language === 'UK'" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24">
                        <g transform="translate(0 .5)">
                            <circle fill="#F0F0F0" cx="12" cy="11.5" r="12"></circle>
                            <path fill="#0052B4" class="st1" d="M2.5,4.2C1.5,5.4,0.8,6.8,0.4,8.4h6.2L2.5,4.2z M23.6,8.4c-0.4-1.5-1.1-2.9-2.1-4.2l-4.2,4.2H23.6z M0.4,14.6c0.4,1.5,1.1,2.9,2.1,4.2l4.2-4.2H0.4L0.4,14.6z M19.3,2c-1.2-0.9-2.6-1.7-4.2-2.1v6.2L19.3,2z M4.7,21c1.2,0.9,2.6,1.7,4.2,2.1v-6.2L4.7,21z M8.9-0.1C7.3,0.3,5.9,1,4.7,2l4.2,4.2V-0.1z M15.1,23.1c1.5-0.4,2.9-1.1,4.2-2.1l-4.2-4.2V23.1z M17.3,14.6l4.2,4.2c0.9-1.2,1.7-2.6,2.1-4.2H17.3z"></path>
                            <g>
                                <path fill="#D80027" d="M23.9,9.9H13.6h0V-0.4c-0.5-0.1-1-0.1-1.6-0.1c-0.5,0-1.1,0-1.6,0.1V9.9v0H0.1C0,10.4,0,11,0,11.5c0,0.5,0,1.1,0.1,1.6h10.3h0v10.3c0.5,0.1,1,0.1,1.6,0.1c0.5,0,1.1,0,1.6-0.1V13.1v0h10.3c0.1-0.5,0.1-1,0.1-1.6C24,11,24,10.4,23.9,9.9z"></path>
                                <path fill="#D80027" d="M15.1,14.6L15.1,14.6l5.4,5.4c0.2-0.2,0.5-0.5,0.7-0.8l-4.6-4.6H15.1L15.1,14.6z M8.9,14.6L8.9,14.6L3.5,20c0.2,0.2,0.5,0.5,0.8,0.7l4.6-4.6V14.6z M8.9,8.4L8.9,8.4L3.5,3C3.3,3.3,3,3.5,2.8,3.8l4.6,4.6H8.9L8.9,8.4z M15.1,8.4L15.1,8.4L20.5,3c-0.2-0.2-0.5-0.5-0.8-0.7l-4.6,4.6V8.4L15.1,8.4z"></path>
                            </g>
                        </g>
                    </svg>

                    <!-- DE Flag   -->
                    <svg v-else-if="item.language === 'DE'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g transform="translate(0 .5)">
                            <path d="M0.7,15.7c1.7,4.6,6.1,7.8,11.3,7.8s9.6-3.3,11.3-7.8l-11.3-1L0.7,15.7z" fill="#FFDA44"/>
                            <path d="M12.1-0.5c-5.2,0-9.6,3.3-11.3,7.8l11.3,1l11.3-1C21.7,2.8,17.3-0.5,12.1-0.5z"/>
                            <path d="M0.7,7.3C0.3,8.6,0,10,0,11.5s0.3,2.9,0.7,4.2h22.6c0.5-1.3,0.7-2.7,0.7-4.2s-0.3-2.9-0.7-4.2H0.7z" fill="#D80027"/>
                        </g>
                    </svg>

                    {{ item.language }} | {{ item.format.toUpperCase() }}
                </div>
                <h3 class="media-title">{{ item.title }}</h3>
                <p class="media-description">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { animate, inView, scroll } from "motion";

export default {
    name: 'Media',
    
    props: {
        mediaItems: {
            type: Array,
            default: () => [
                {
                    type: 'video',
                    src: '/path/to/video.mp4',
                    poster: '/path/to/poster.jpg',
                    language: 'DK',
                    format: 'video',
                    title: 'MY VOICE\nYOUR CHOICE',
                    description: 'Lorem ipsum component variant main layer. Invite horizontal inspect project style through. Component prototype flatten align link hand follower layout link, background font.'
                },
                {
                    type: 'audio',
                    src: '/path/to/audio.wav',
                    language: 'DK',
                    format: 'audio',
                    title: 'MY VOICE\nYOUR CHOICE',
                    description: 'Lorem ipsum component variant main layer. Invite horizontal inspect project style through. Component prototype flatten align link hand follower layout link, background font.'
                }
            ]
        }
    },

    data() {
        return {
            playingStates: {}
        };
    },

    methods: {
        togglePlay(index) {
            const mediaElement = this.$refs[`media-${index}`][0];
            
            if (this.playingStates[index]) {
                mediaElement.pause();
                this.playingStates[index] = false;
                console.log('Paused, index:', index);
            } else {
                // Pause all other media
                Object.keys(this.playingStates).forEach(i => {
                    if (parseInt(i) !== index && this.playingStates[i]) {
                        const otherMedia = this.$refs[`media-${i}`][0];
                        otherMedia.pause();
                        this.playingStates[i] = false;
                    }
                });
                
                mediaElement.play();
                this.playingStates[index] = true;
                console.log('Playing, index:', index);
            }
        }
    },

    mounted() {
        // Initialize playing states
        this.mediaItems.forEach((item, index) => {
            this.playingStates[index] = false;
        });

        // Add event listeners for media state sync
        this.mediaItems.forEach((item, index) => {
            this.$nextTick(() => {
                const mediaElement = this.$refs[`media-${index}`]?.[0];
                if (mediaElement) {
                    mediaElement.addEventListener('ended', () => {
                        this.playingStates[index] = false;
                    });
                    mediaElement.addEventListener('play', () => {
                        // Pause all other media when this one starts
                        Object.keys(this.playingStates).forEach(i => {
                            if (parseInt(i) !== index && this.playingStates[i]) {
                                const otherMedia = this.$refs[`media-${i}`]?.[0];
                                if (otherMedia) otherMedia.pause();
                                this.playingStates[i] = false;
                            }
                        });
                        this.playingStates[index] = true;
                    });
                    mediaElement.addEventListener('pause', () => {
                        this.playingStates[index] = false;
                    });
                }
            });
        });

        // Animate each media container and content card with scroll
        this.$nextTick(() => {
            this.mediaItems.forEach((item, index) => {
                const container = this.$refs[`container-${index}`][0];
                const card = this.$refs[`card-${index}`][0];

                if (container && card) {
                    // Animate container fade in
                    inView(container, () => {
                        animate(container, 
                            {
                                opacity: [0, 1],
                            },
                            {   
                                duration: 0.6,
                                ease: [0.25, 0.1, 0.25, 1]
                            }
                        );
                    });

                    // Animate card moving from bottom to top on scroll
                    const cardAnimation = animate(
                        card,
                        { y: ["40%", "-40%"] },
                        { ease: "linear" }
                    );

                    scroll(cardAnimation, {
                        target: container,
                        offset: ["start end", "end start"]
                    });
                }
            });
        });
    }
}
</script>

<style scoped>

.media-section {
    display: flex;
    flex-direction: column;
    gap: 120px;
    /* padding: 120px; */
    padding: 0 120px 120px;
    /* max-width: 1400px; */
    margin: 0 auto;
}

.media-container {
    display: grid;
    grid-template-columns: 60% 1fr;
    gap: 120px;
    align-items: center;
    opacity: 0;
    position: relative;
}

.media-container.reverse {
    grid-template-columns: 1fr 60%;

    .content-card {
        order: -1;
    }
}

.media-player {
    position: relative;
    cursor: pointer;
    background: #f5f5f5;
    border-radius: 8px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    transition: filter 0.4s ease;

    > video {
        display: block;
    }
}

.media-player:not(.is-playing)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(35, 35, 35, 0.5);
    z-index: 1;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.media-element {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.audio-visualizer {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.audio-element {
    display: none;
}

.soundwave {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 60px;
}

.soundwave-bar {
    width: 4px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 2px;
    height: 20px;
    animation: soundwave 1.5s ease-in-out infinite alternate;
}

.audio-visualizer.playing .soundwave-bar {
    animation-play-state: running;
}

.audio-visualizer:not(.playing) .soundwave-bar {
    animation-play-state: paused;
}

@keyframes soundwave {
    0% { height: 20px; }
    50% { height: 40px; }
    100% { height: 60px; }
}

.media-player:hover .play-button {
    visibility: visible;
    opacity: 1;
}

.play-button {
    display: none;
    /* visibility: hidden;
    opacity: 0; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.play-button:hover {
    visibility: visible;
    background: rgba(255, 255, 255, 1);
    transform: translate(-50%, -50%) scale(1.1);
}

.play-button svg {
    width: 32px;
    height: 32px;
    color: #333;
}

.play-button.playing {
    visibility: hidden;
    opacity: 0;
}

.play-button.playing svg {
    width: 28px;
    height: 28px;
}

.content-card {
    background: rgba(200, 180, 200, 0.9);
    padding: 40px;
    height: auto;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    position: relative;
    will-change: transform;
}

.media-type {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: clamp(12px, 1.2vw, 16px);
    font-weight: 500;
    color: #666;
    margin-bottom: 20px;
    letter-spacing: 1px;
}

.media-title {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 700;
    line-height: 1.2;
    /* margin-bottom: 20px; */
    text-transform: uppercase;
    white-space: pre-line;
}

.media-description {
    font-size: clamp(14px, 1.5vw, 18px);
    line-height: 1.6;
    /* color: #555; */
}

@media (max-width: 768px) {
    .media-section {
        gap: 80px;
        padding: 40px 20px;
    }

    .media-container {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .media-container.reverse {
        grid-template-columns: 1fr;
    }
    
    .content-card {
        padding: 30px;
        min-height: auto;
    }
    
    .media-container.reverse .content-card {
        order: 0;
    }
    
    .play-button {
        width: 60px;
        height: 60px;
    }
    
    .play-button svg {
        width: 24px;
        height: 24px;
    }
}
</style>
