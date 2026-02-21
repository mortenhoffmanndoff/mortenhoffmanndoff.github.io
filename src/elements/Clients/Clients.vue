<template>
    <div class="clients-wrapper">
        <div 
            v-for="(clientRow, rowIndex) in clients" 
            :key="rowIndex" 
            class="clients"
        >
            <div 
                v-for="(client, clientIndex) in clientRow" 
                :key="clientIndex" 
                class="client"
            >
                {{ client }}
            </div>
        </div>
    </div>
</template>

<script>
import { animate, scroll } from "motion";

export default {
    name: "Clients",
    data() {
        return {
            clients: [
                ["Coca Cola.", "Microsoft.", "Spotify.", "Disney.", "Netflix."],
                ["Novo Nordisk.", "ETORO.", "Mærsk.", "Toms.", "MobilePay."],
                ["Lidl.", "Danske Spil.", "Carlsberg.", "KRÆFTENS BEKÆMPELSE."],
                ["Meta.", "Biotex.", "McDonalds.", "Mini Cooper.", "Home."],
                ["NKT.", "the European Parliament.", "Tivoli Hotel.", "Falck."],
                ["New Balance.", "BMW.", "Interflora.", "Royal Unibrew.", "Pfizer."]
            ]
        };
    },
    mounted() {
        const oddAnimation = animate(".clients:nth-child(odd)",
            { transform: ["translateX(0)", "translateX(-50%)"] },
            { ease: "easeOut" }
        )  

        const evenAnimation = animate(".clients:nth-child(even)",
            { transform: ["translateX(0)", "translateX(50%)"] },
            { ease: "easeOut" }
        )

        scroll(oddAnimation, {
            target: document.querySelector(".clients-wrapper"),
            offset: ["start end", "end start"]
        })
        scroll(evenAnimation, {
            target: document.querySelector(".clients-wrapper"),
            offset: ["start end", "end start"]
        })
    }
};
</script>   

<style scoped>
.clients-wrapper {
    padding: 50px 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.clients {
    display: inline-flex;
    gap: 20px;
    white-space: nowrap;
    font-size: clamp(72px, 7.5vw, 120px);
    font-weight: bold;
    font-family: 'Roslindale Display Condensed';
    /* letter-spacing: -3.6px; */
    /* line-height: 1.2; */
    text-transform: uppercase;
    align-self: flex-start;
}

.clients:nth-child(even) {
    align-self: flex-end;
}

.client {
        color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #000000;
        font-size: 10vw;
        font-weight: bold;
        letter-spacing: -.03em;
        line-height: 9vw;
        /* transition: all .5s ease-in-out; */
        text-transform: uppercase;

        &:nth-child(even) {
            color: #000000;
            -webkit-text-stroke: none;
        }


}
</style>