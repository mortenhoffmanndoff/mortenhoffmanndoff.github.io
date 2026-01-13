<template>
    <div v-if="isOpen" class="menu-overlay" :class="{ 'is-open': isOpen }">
        <!-- Dark background with image -->
        <div class="menu-background">
            <div class="menu-image-wrapper">
                <img 
                    src="/images/image-6.png" 
                    alt="Menu Background" 
                    class="menu-image"
                />
            </div>
            <div class="menu-dark-filter"></div>
        </div>

        <!-- Menu content -->
        <div class="menu-content">
            <nav class="menu-nav">
                <ul class="menu-list">
                    <li v-for="(item, index) in menuItems" :key="index" class="menu-item" :ref="`menu-item-${index}`">
                        <a 
                            :href="item.href"
                            class="menu-link"
                            @click.prevent="handleMenuClick(item)"
                        >
                            {{ item.label }}
                        </a>
                    </li>
                </ul>
            </nav>

            <!-- Social links at bottom -->
            <div class="menu-footer">
                <div class="social-links">
                    <a href="https://www.instagram.com/christinabjorn_dk/" target="_blank" rel="noopener noreferrer" class="social-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <circle cx="17.5" cy="6.5" r="1.5"></circle>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/christina-bj%C3%B8rn-voice-over-in-danish-and-english-4819a731/" target="_blank" rel="noopener noreferrer" class="social-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </div>
                <p class="menu-credit">© {{ currentYear }} Christina Bjørn</p>
            </div>
        </div>
    </div>
</template>

<script>
import { animate, inView } from "motion";

export default {
    name: 'MenuOverlay',
    
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            menuItems: [
                { label: 'WORK', href: '#work', id: 'work' },
                { label: 'CLIENTS', href: '#clients', id: 'clients' },
                { label: 'ABOUT', href: '#about', id: 'about' },
                { label: 'RECOMMENDATIONS', href: '#recommendations', id: 'recommendations' },
                { label: 'CONTACT', href: '#contact', id: 'contact' }
            ]
        };
    },

    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    },

    watch: {
        isOpen(newVal) {
            if (newVal) {
                this.$nextTick(() => {
                    this.animateMenuIn();
                });
            }
        }
    },

    methods: {
        animateMenuIn() {
            const menuItems = this.$el.querySelectorAll('.menu-item');
            
            animate('.menu-overlay',
                {
                    opacity: [0, 1]
                },
                {
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1]
                }
            );

            animate('.menu-content',
                {
                    x: ['-100%', 0]
                },
                {
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1]
                }
            );

            animate(menuItems,
                {
                    opacity: [0, 1],
                    x: ['-50px', 0]
                },
                {
                    duration: 0.5,
                    delay: (index) => index * 0.08,
                    ease: [0.25, 0.1, 0.25, 1]
                }
            );
        },

        animateMenuOut() {
            animate('.menu-overlay',
                {
                    opacity: [1, 0]
                },
                {
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1]
                }
            );

            animate('.menu-content',
                {
                    x: [0, '-100%']
                },
                {
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1]
                }
            );
        },

        async handleMenuClick(item) {
            this.animateMenuOut();
            
            // Wait for animation to finish
            await new Promise(resolve => setTimeout(resolve, 400));
            
            // Close the menu
            this.$emit('close');
            
            // Check if we're on the home page
            const isHomePage = this.$route.path === '/' || this.$route.name === 'home';
            
            if (!isHomePage) {
                // Navigate to home page first
                await this.$router.push('/');
                // Wait for page transition animation (0.8s) + extra buffer for rendering
                await new Promise(resolve => setTimeout(resolve, 1200));
            }
            
            // Scroll to section
            const element = document.querySelector(`#${item.id}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (item.href === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }
}
</script>

<style scoped>
.menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9998;
    display: flex;
    opacity: 0;
}

.menu-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.menu-image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.menu-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.menu-dark-filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
}

.menu-content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 60px 60px 60px;
    transform: translateX(-100%);
    overflow-y: auto;
}

.menu-nav {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0;
}

.menu-list {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
}

.menu-item {
    margin-bottom: 40px;
    opacity: 0;
    transform: translateX(-50px);
}

.menu-link {
    font-size: clamp(32px, 8vw, 120px);
    font-weight: 200;
    text-transform: uppercase;
    color: #F6F6F6;
    text-decoration: none;
    display: inline-block;
    letter-spacing: -1px;
    line-height: 0.9;
    transition: all 0.3s ease;
    /* font-family: "Barlow Condensed", serif; */
    font-family: "Roslindale Display Condensed";
}

.menu-link:hover {
    color: #F2E9E4;
    transform: translateX(20px);
}

.menu-link strong {
    font-weight: 700;
}

.menu-footer {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
    border-top: 1px solid rgba(242, 233, 228, 0.2);
    margin-top: auto;
}

.social-links {
    display: flex;
    gap: 20px;
}

.social-link {
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

.social-link:hover {
    background: rgba(242, 233, 228, 0.2);
    transform: translateY(-4px);
}

.social-link svg {
    width: 20px;
    height: 20px;
}

.menu-credit {
    font-size: 12px;
    color: #9A8C99;
    margin: 0;
    letter-spacing: 0.5px;
}

/* Responsive */
@media (max-width: 768px) {
    .menu-content {
        padding: 60px 30px;
    }

    .menu-link {
        font-size: clamp(24px, 6vw, 60px);
    }

    .menu-item {
        margin-bottom: 30px;
    }
}

@media (max-width: 480px) {
    .menu-content {
        padding: 60px 20px;
    }

    .menu-link {
        font-size: clamp(20px, 5vw, 40px);
    }

    .menu-item {
        margin-bottom: 20px;
    }

    .social-link {
        width: 40px;
        height: 40px;
    }

    .social-link svg {
        width: 16px;
        height: 16px;
    }
}
</style>
