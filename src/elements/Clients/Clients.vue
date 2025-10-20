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
    gap: 16px;
}

.clients {
    display: inline-flex;
    gap: 20px;
    white-space: nowrap;
    font-size: clamp(72px, 7.5vw, 120px);
    font-weight: 600;
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
    font-size: clamp(72px, 17.5vw, 200px);
    font-weight: 500;
    /* letter-spacing: -3.6px; */
    line-height: .85;
    transition: all .5s ease-in-out;
    text-transform: uppercase;
    /* padding: 10px 20px; */

    &:hover {
        color: #000000;
        -webkit-text-stroke: none;
        /* scale: 1.05; */
    }
}
</style>