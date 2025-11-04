<template>
    <footer class="footer">
        <div class="footer-background"></div>
        
        <div class="footer-content">
            <!-- Main CTA Section -->
            <div class="footer-cta">
                <h2 class="footer-title">
                    <span v-for="(word, index) in ctaWords" :key="index" :ref="`cta-word-${index}`" class="footer-title-word">
                        {{ word }}
                    </span>
                </h2>
            </div>

            <!-- Contact Information -->
            <div class="footer-info">
                <div class="info-section">
                    <div class="info-column">
                        <a href="mailto:christina@bjorn.com" class="contact-link primary-link">
                            <!-- <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1158 2.85202C25.0071 1.90217 28.6545 4.17444 34.5315 9.73809C34.9648 9.96271 35.3224 8.59137 34.5315 7.49521C32.7999 4.45362 28.9621 2.3562 26.7473 1.58836C24.3596 0.760618 18.9458 -0.230058 13.3326 1.29808C7.71952 2.82622 4.21171 6.41768 2.94709 8.08296C1.68248 9.74824 0.131856 11.3808 0.00295277 16.2474C-0.12595 21.1139 3.99881 25.2598 5.86217 26.8415C7.85123 28.2867 13.9274 29.9595 18.2281 29.3835C22.5287 28.8075 26.3547 26.2443 27.7493 25.0636C29.2696 23.8639 32.1847 20.8347 31.3527 16.4384C30.5207 12.0421 27.2464 11.1585 25.7132 11.2662C25.8167 10.5416 25.8606 10.134 25.7132 9.38544C25.4436 8.41988 24.2572 6.73471 21.3041 6.76998C18.3511 6.80524 15.7172 9.07267 14.9586 10.2135C14.5307 11.0416 14.0358 13.0236 14.7389 13.4703C15.442 13.917 16.3415 13.7295 16.4117 13.3087C16.4819 12.8878 16.9 11.3544 17.1441 10.9136C17.4664 10.2475 18.2193 8.93805 20.8794 8.99682C23.5394 9.0556 23.2525 11.0046 22.4437 11.9943C21.635 12.984 20.8617 13.8376 20.5688 14.3813C20.0707 15.7184 20.5877 15.8829 21.4916 15.7971C22.5756 15.6943 23.209 14.332 24.6556 13.7988C27.2893 12.828 28.7101 14.8616 29.1349 15.7971C30.6583 19.7056 27.6731 22.4359 25.8274 23.9151C23.3324 25.8987 16.0926 29.9754 8.83571 26.0827C1.24804 22.0125 0.874911 15.3987 2.4082 11.7C3.15525 9.89793 8.65509 3.64902 16.1158 2.85202Z" fill="currentColor"></path>
                            </svg> -->
                            <span>christina@bjorn.com</span>
                        </a>
                        <p class="contact-label">Get a price or free demo</p>
                    </div>

                    <div class="info-column">
                        <a href="tel:+4531111806" class="contact-link">
                            <span>+45 31 11 18 06</span>
                        </a>
                        <p class="contact-label">Call me</p>
                    </div>
                </div>

                <div class="social-links">
                    <a href="https://www.instagram.com/christinabjorn_dk/" target="_blank" rel="noopener noreferrer" class="social-icon" title="Instagram">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <circle cx="17.5" cy="6.5" r="1.5"></circle>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/christina-bj%C3%B8rn-voice-over-in-danish-and-english-4819a731/" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
            <p class="footer-credit">© {{ currentYear }} Christina Bjørn. All rights reserved.</p>
            <!-- <p class="footer-credit">Designed & developed with <span class="heart">♥</span></p> -->
        </div>
    </footer>
</template>

<script>
import { animate, inView, stagger } from "motion";

export default {
    name: 'Footer',

    data() {
        return {
            ctaWords: ['LET\'S', 'PLAY!']
        };
    },

    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    },

    mounted() {
        this.$nextTick(() => {
            // Animate CTA title words
            const ctaWordElements = this.$el.querySelectorAll('.footer-title-word');
            
            inView(this.$el.querySelector('.footer-cta'), () => {
                animate(ctaWordElements,
                    {
                        opacity: [0, 1],
                        y: ['100%', 0]
                    },
                    {
                        duration: 0.75,
                        delay: stagger(0.15),
                        ease: [0.25, 0.1, 0.25, 1]
                    }
                );
            });

            // Animate info section
            const infoSection = this.$el.querySelector('.footer-info');
            inView(infoSection, () => {
                animate(infoSection,
                    {
                        opacity: [0, 1],
                        y: [50, 0]
                    },
                    {
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1]
                    }
                );
            });
        });
    }
};
</script>

<style scoped>
.footer {
    position: relative;
    width: 100%;
    background: linear-gradient(135deg, #22223A 0%, #3A3A3A 100%);
    color: #F6F6F6;
    overflow: hidden;
}

.footer-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: 
        radial-gradient(circle at 20% 50%, rgba(75, 79, 106, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 50%, rgba(202, 187, 184, 0.05) 0%, transparent 50%);
    pointer-events: none;
}

.footer-content {
    position: relative;
    z-index: 2;
    padding: 120px 60px 80px;
    max-width: 1400px;
    margin: 0 auto;
}

.footer-cta {
    margin-bottom: 100px;
    text-align: center;
}

.footer-title {
    font-size: clamp(48px, 10vw, 200px);
    font-weight: 200;
    text-transform: uppercase;
    line-height: 1.1;
    margin: 0;
    letter-spacing: -2px;
    overflow: hidden;
}

.footer-title-word {
    display: inline-block;
    margin: 0 20px;
    opacity: 0;
    transform: translateY(100%);
}

.footer-title-word:first-child {
    margin-left: 0;
}

.footer-title-word:last-child {
    margin-right: 0;
    color: #F2E9E4;
    font-weight: 400;
}

.footer-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    padding: 60px 0;
    border-top: 1px solid rgba(242, 233, 228, 0.2);
    border-bottom: 1px solid rgba(242, 233, 228, 0.2);
    opacity: 0;
}

.info-section {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.info-column {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.contact-link {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: clamp(16px, 2vw, 28px);
    font-weight: 300;
    color: #F6F6F6;
    text-decoration: none;
    transition: all 0.3s ease;
    width: fit-content;
}

.contact-link:hover {
    color: #F2E9E4;
    transform: translateX(8px);
}

.contact-link.primary-link {
    font-weight: 400;
    font-size: clamp(18px, 2.2vw, 32px);
}

.contact-link svg {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
}

.contact-label {
    font-size: 14px;
    text-transform: uppercase;
    color: #9A8C99;
    letter-spacing: 1px;
    margin: 0;
}

.social-links {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-end;
}

.social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(242, 233, 228, 0.1);
    color: #F2E9E4;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-icon:hover {
    background: rgba(242, 233, 228, 0.2);
    transform: translateY(-4px);
}

.social-icon svg {
    width: 20px;
    height: 20px;
}

.footer-bottom {
    position: relative;
    z-index: 2;
    padding: 30px 60px;
    text-align: center;
    /* border-top: 1px solid rgba(242, 233, 228, 0.1); */
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

.footer-credit {
    font-size: 12px;
    color: #9A8C99;
    margin: 0;
    letter-spacing: 0.5px;
}

.heart {
    color: #C9AEA7;
    animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .footer-content {
        padding: 80px 30px 60px;
    }

    .footer-info {
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 40px 0;
    }

    .footer-title-word {
        margin: 0 10px;
    }

    .footer-bottom {
        padding: 20px 30px;
        gap: 20px;
    }

    .contact-link {
        gap: 8px;
        font-size: clamp(14px, 1.5vw, 20px);
    }

    .contact-link svg {
        width: 20px;
        height: 20px;
    }

    .social-icon {
        width: 40px;
        height: 40px;
    }
}

@media (max-width: 480px) {
    .footer-content {
        padding: 60px 20px 40px;
    }

    .footer-title {
        font-size: clamp(36px, 8vw, 80px);
    }

    .footer-title-word {
        margin: 0 5px;
    }

    .info-section {
        gap: 20px;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 10px;
    }
}
</style>
