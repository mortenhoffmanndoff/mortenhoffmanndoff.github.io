<template>
    <article class="article">
        <div class="article-content">
            <span 
                v-for="(line, index) in articleLines" 
                :key="index" 
                :ref="`line-${index}`"
                class="article-line"
                v-html="line"
            ></span>
        </div>
    </article>
</template>

<script>
import { animate, inView, stagger } from "motion";

export default {
    name: 'Article',

    props: {
        articleContent: {
            type: String,
        }
    },

    computed: {
        articleLines() {
            return this.articleContent
                .split('<br>')
                .map(line => line.trim())
                .filter(line => line.length > 0);
        }
    },

    mounted() {
        // Set up individual inView observers for each line
        this.articleLines.forEach((line, index) => {
            const lineElement = this.$refs[`line-${index}`];
            if (lineElement && lineElement[0]) {
                inView(lineElement[0], () => {
                    animate(lineElement[0], 
                        {
                            opacity: [0, 1],
                            y: [200, 0]
                        },
                        {
                            duration: 1,
                            ease: [0.25, 0.1, 0.25, 1]
                        }
                    );
                });
            }
        });
    }
}
</script>   

<style scoped>
.article {
    margin: 0 auto;
    padding: 60px 60px 60px 300px;

    .article-title {
        font-size: clamp(32px, 5vw, 48px);
        font-weight: 700;
        margin-bottom: 60px;
        text-align: center;
        text-transform: uppercase;
    }

    .article-content {
        font-size: clamp(16px, 2vw, 30px);
        /* font-size: clamp(16px, 2.5vw, 36px); */
        line-height: 1.6;
        color: #333;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .article-line {
        opacity: 0;  /* Start invisible for animation */
        display: block;
        transform: translateY(30px); /* Start from below */
        margin-bottom: 10px; /* Add some spacing between lines */
    }

}

</style>