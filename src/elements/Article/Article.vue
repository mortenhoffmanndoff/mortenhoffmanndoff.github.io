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
            default: `Siden jeg var seks år gammel, har jeg interesseret mig for lyd. Allerede dengang opdagede 'man', at jeg havde absolut gehør. Hvis jeg spillede en af Beethovens store værker på det sorte flygel, så brugte jeg noderne en enkelt gang, for derefter at kunne det udenad. Jeg syntes ikke, det var noget særligt dengang, men lyd skulle vise sig at blive min levevej. <br>
Da jeg flyttede hjemmefra som 19-årig begyndte jeg at formidle budskaber foran en mikrofon eller et kamera - som speaker, radiovært, konferencier, TV-vært, skuespiller og dubber. På både dansk og engelsk. Derudover færdiggjorde jeg i 2006 uddannelsen som tekstforfatter, og har derfor også en masse ´knowledge´ fra bureauverdenen. <br>
Gennem årene har jeg lagt stemme til nogle af verdens største brands og været vært for shows på landets største live-scener, såsom Plænen i Tivoli, Rådhuspladsen i København og Studie 5 i DR Byen. Den erfaring, det overblik og den ro får du med i pakken hos mig, hvad end du booker mig som stemme og/eller ansigt. <br>
I dag er jeg i begyndelsen af 40'erne og fokuserer primært på stemmen. Hos mig får dit projekt den opmærksomhed, det fortjener med min professionelle lyd og autenticitet. <br>
Med 200+ årlige speak-opgaver - og i øvrigt en baggrund som tekstforfatter - ved jeg præcist, hvad der skal til, for at få dit budskab ud over rampen. <br>
Overlad produktionen til mig - eller vær med i processen online eller i et lydstudie nær dig.<br>
Lad os sammen give dit budskab en lyd i særklasse!</br>
Få en pris eller en gratis demo her (LINK til kontakt-siden)`
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
    padding: 0 60px 60px 300px;

    .article-title {
        font-size: clamp(32px, 5vw, 48px);
        font-weight: 700;
        margin-bottom: 60px;
        text-align: center;
        text-transform: uppercase;
    }

    .article-content {
        /* font-size: clamp(16px, 2vw, 32px); */
        font-size: clamp(16px, 2.5vw, 36px);
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