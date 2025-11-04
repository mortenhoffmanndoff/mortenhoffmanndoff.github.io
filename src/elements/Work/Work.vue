<template>
    <section class="work-group-container">
        <div>
            <ul class="work-group">
                <li>
                    <router-link to="/work/commercial" class="work-container">
                        <h3>1</h3>
                        <p>Commercial</p>
                        <!-- <svg class="arrow" width="80" height="120" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.924 13.617A1 1 0 0 0 19 13h-3V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10H5a1 1 0 0 0-.707 1.707l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .217-1.09zM12 19.586 7.414 15H9a1 1 0 0 0 1-1V4h4v10a1 1 0 0 0 1 1h1.586z"/></svg> -->
                    </router-link>
                </li>
                <li>
                    <router-link to="/work/corporate-imaging" class="work-container">
                        <h3>2</h3>
                        <p>Corporate & Imaging</p>
                        <!-- <svg class="arrow" width="80" height="120" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.924 13.617A1 1 0 0 0 19 13h-3V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10H5a1 1 0 0 0-.707 1.707l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .217-1.09zM12 19.586 7.414 15H9a1 1 0 0 0 1-1V4h4v10a1 1 0 0 0 1 1h1.586z"/></svg> -->
                    </router-link>
                </li>
                <li>
                    <router-link to="/work/acting-narration" class="work-container">
                        <h3>3</h3>
                        <p>Acting & Narration</p>
                        <!-- <svg class="arrow" width="80" height="120" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.924 13.617A1 1 0 0 0 19 13h-3V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10H5a1 1 0 0 0-.707 1.707l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .217-1.09zM12 19.586 7.414 15H9a1 1 0 0 0 1-1V4h4v10a1 1 0 0 0 1 1h1.586z"/></svg> -->
                    </router-link>
                </li>
                <li>
                    <router-link to="/work/audiobooks-docs" class="work-container">
                        <h3>4</h3>
                        <p>Audiobooks & Docs</p>
                        <!-- <svg class="arrow" width="80" height="120" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.924 13.617A1 1 0 0 0 19 13h-3V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10H5a1 1 0 0 0-.707 1.707l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .217-1.09zM12 19.586 7.414 15H9a1 1 0 0 0 1-1V4h4v10a1 1 0 0 0 1 1h1.586z"/></svg> -->
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



  mounted() {
    const items = document.querySelectorAll(".work-container")

    // Horizontal scroll animation math:
    // - Each item is 50vw wide, showing 2 items at a time (100vw total visible)
    // - With 4 items: positions are [1,2] → [2,3] → [3,4]  
    // - That's 2 movements of 50vw each = 100vw total movement
    // - Formula: (total_items - items_shown) × item_width = (4 - 2) × 50vw = 100vw

    scroll(
        animate(".work-group", {
            transform: ["none", `translateX(-${(items.length - 4) * 25}vw)`],
        }),
        { target: document.querySelector(".work-group-container") }
    )
  },
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
            background: rgba(var(--color-almost-white));
        }
    }

    .work-container {
        transform: translateY(-30px);
    }

    h3 {
        font-family: 'Bodoni Moda', serif;
        font-optical-sizing: auto;
        font-variation-settings: 'opsz' 12;
        font-weight: 600;
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
        /* transform: translateX(-50%) translateY(-10px) */

    }

    .work-container:hover {
        /* cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" fill="rgba(0,0,0,0.7)" stroke="white" stroke-width="2"/><path d="M20 30 L35 30 M35 30 L28 23 M35 30 L28 37" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>') 30 30, pointer; */
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