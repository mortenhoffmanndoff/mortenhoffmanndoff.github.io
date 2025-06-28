<template>
    <div class="media" v-if="mediaUrl">
        <div class="media-type">
            <video v-if="mediaType === 'video'" :src="mediaUrl" loop autoplay muted></video>
            <img v-else :src="mediaUrl" alt="">
        </div>
        <div class="media-content" v-if="mediaTitle || mediaText">
            <Flag :text="mediaFlagText" :DK="mediaDK" :UK="mediaUK"/>
            <h3 v-html="mediaTitle"></h3>
            <p>{{ mediaText }}</p>
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
    align-items: center;
}

.media + .media {
    margin-top: 120px;
}

.media:nth-child(even) {
    flex-direction: row-reverse;

    .media-content {
        transform: translateX(100px);
    }
}

.media-type {
    width: 70%;
}

.media-type video {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.media-type img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.media-content {
    display: flex;
    width: 30%;
    padding: 80px;
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
    background: var(--color-gray-purple, #9A8C99);
    transform: translateX(-100px);
}

.media-content h3 {     
    margin: 0;
    color: var(--color-almost-white, #F6F6F6);
    font-size: 48px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -1.44px;
    text-transform: uppercase;

    strong  {
        font-weight: 900;
    }
}
.media-content p {
    margin: 0;
    color: var(--almost-white, #F6F6F6);
    font-size: 24px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -0.72px;
}

.media-content .flag {
    color: var(--color-almost-white, #F6F6F6);
}
</style>