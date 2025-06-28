<template>
    <div class="media" v-if="mediaUrl">
        <div class="media-type">
            <video v-if="mediaType === 'video'" :src="mediaUrl" controls loop controlsList="nodownload noplaybackrate" disablePictureInPicture></video>
            <img v-else :src="mediaUrl" alt="">
        </div>
        <div class="media-content" v-if="mediaTitle || mediaText">
            <Flag :text="mediaFlagText" :DK="mediaDK" :UK="mediaUK"/>
            <h3 class="media-title" v-html="mediaTitle"></h3>
            <p class="media-text">{{ mediaText }}</p>
        </div>
    </div>
</template>

<script>

import Flag from './Flag.vue'; // Import Flag component

export default {
    name: 'Media',
    components: {
        Flag,
    },

    props: {
        mediaUrl: {
            type: String,
            required: true
        },
        mediaType: {
            type: String,
            default: 'video' // Default to video if not specified
        },
        mediaTitle: {
            type: String,
            default: ''
        },
        mediaText: {
            type: String,
            default: ''
        },
        mediaDK: {
            type: Boolean,
            default: false
        },
        mediaUK: {
            type: Boolean,
            default: false
        },
        mediaFlagText: {
            type: String,
            default: ''
        }
    }
}

</script>

<style>

.media {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1440px) {
        flex-direction: row;
    }
    
}

.media + .media {
    margin-top: 60px;

    @media (min-width: 1440px) {
        margin-top: 120px;
    }
}

@media (min-width: 1440px) {
    .media:nth-child(odd) {
        flex-direction: row-reverse;
        
        .media-content {
            transform: translateX(100px);
        }
    }
}


.media-type {
    width: 100%;
    @media (min-width: 1440px) {
        width: 70%;
    }
}

.media-type video,
.media-type img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    background: #000000;

    @media (min-width: 1440px) {
        border-radius: 8px;
    }
}

.media-content {
    display: flex;
    width: 100%;
    padding: 40px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    background: #9a8c99f5;
    
    
    @media (min-width: 1440px) {
        width: 30%;
        padding: 80px;
        gap: 36px;
        transform: translateX(-100px);
    }
}

.media-content .media-title {     
    margin: 0;
    color: var(--color-almost-white, #F6F6F6);
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -1.44px;
    text-transform: uppercase;

    strong  {
        font-weight: 900;
    }
}
.media-content .media-text {
    margin: 0;
    color: var(--almost-white, #F6F6F6);
    font-size: clamp(18px, 1.5vw, 24px);
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -0.72px;
}

.media-content .flag {
    color: var(--color-almost-white, #F6F6F6);
}
</style>