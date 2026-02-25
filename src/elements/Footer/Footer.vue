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
                <div class="info-grid">
                    <div class="info-column">
                        <a href="mailto:cb@christinabjorn.dk" class="contact-link primary-link">
                            <span>cb@christinabjorn.dk</span>
                        </a>
                        <p class="contact-label">Get a price or free demo</p>
                    </div>

                    <div class="info-column">
                        <a href="tel:+4531111806" class="contact-link primary-link">
                            <span>+45 31 11 18 06</span>
                        </a>
                        <p class="contact-label">Call me</p>
                    </div>

                    <div class="info-column info-column-details">
                        <p class="contact-link">Hybenvej 83, 2830 Virum</p>
                        <p class="contact-label">Address</p>
                    </div>

                    <div class="info-column info-column-details">
                        <p class="contact-link">CVR 45715949</p>
                        <p class="contact-label">Company registration</p>
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
    /* background: linear-gradient(135deg, #6DBCC3 0%, #5BA8B0 50%, #4A95A0 100%); */
    background: #e5e3dc;
    color: #2A2A2A;
    overflow: hidden;
}

.footer-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-image: 
        url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    pointer-events: none;
    mix-blend-mode: overlay;
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
    font-family: 'Roslindale Display Condensed';
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
    color: #2A2A2A;
    font-weight: 400;
}

.footer-info {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 60px 0;
    border-top: 1px solid rgba(42, 42, 42, 0.15);
    border-bottom: 1px solid rgba(42, 42, 42, 0.15);
    opacity: 0;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
}

.info-column-details {
    opacity: 0.7;
}

.info-column-details .contact-link {
    font-size: clamp(14px, 1.5vw, 20px);
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
    color: #2A2A2A;
    text-decoration: none;
    transition: all 0.3s ease;
    width: fit-content;
}

.contact-link:hover {
    color: #1A1A1A;
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
    color: rgba(42, 42, 42, 0.6);
    letter-spacing: 1px;
    margin: 0;
}

.social-links {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
}

.social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(42, 42, 42, 0.1);
    color: #2A2A2A;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-icon:hover {
    background: rgba(42, 42, 42, 0.2);
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
    color: rgba(42, 42, 42, 0.5);
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

    .footer-cta {
        margin-bottom: 60px;
    }

    .footer-title {
        font-size: clamp(60px, 14vw, 160px);
    }

    .info-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }

    .footer-info {
        gap: 30px;
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
        font-size: clamp(18px, 4vw, 26px);
    }

    .contact-link.primary-link {
        font-size: clamp(20px, 5vw, 30px);
    }

    .contact-label {
        font-size: 15px;
    }

    .contact-link svg {
        width: 20px;
        height: 20px;
    }

    .social-icon {
        width: 40px;
        height: 40px;
    }

    .footer-credit {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .footer-content {
        padding: 60px 20px 40px;
    }

    .footer-title {
        font-size: clamp(50px, 15vw, 120px);
    }

    .footer-title-word {
        margin: 0 5px;
    }

    .info-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .contact-link {
        font-size: clamp(17px, 4.5vw, 24px);
    }

    .contact-link.primary-link {
        font-size: clamp(19px, 5vw, 28px);
    }

    .contact-label {
        font-size: 14px;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 10px;
    }

    .footer-credit {
        font-size: 13px;
    }
}
</style>
