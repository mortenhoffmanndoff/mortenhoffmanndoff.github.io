<template>
    <div class="flag">
        <div class="language" v-if="DK">
            <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 24">
                <g transform="translate(0 .5)">
                    <circle fill="#F0F0F0" class="st0" cx="12" cy="11.5" r="12"/>
                    <path fill="#D80027" class="st1" d="M9.4,9.9h14.5C23.1,4,18.1-0.5,12-0.5c-0.9,0-1.8,0.1-2.6,0.3V9.9L9.4,9.9z M6.3,9.9V1C3,2.8,0.6,6.1,0.1,9.9
                        H6.3L6.3,9.9z M6.3,13.1H0.1c0.5,3.9,2.9,7.2,6.2,9V13.1L6.3,13.1z M9.4,13.1v10.1c0.8,0.2,1.7,0.3,2.6,0.3
                        c6.1,0,11.1-4.5,11.9-10.4H9.4L9.4,13.1z"/>
                </g>
            </svg>
            <div>{{ text }}</div>
        </div>
        <div class="language" v-if="UK">
            <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height"  viewBox="0 0 24 24">
                <g transform="translate(0 .5)">
                <circle fill="#F0F0F0" cx="12" cy="11.5" r="12" />
                <path fill="#0052B4" class="st1" d="M2.5,4.2C1.5,5.4,0.8,6.8,0.4,8.4h6.2L2.5,4.2z M23.6,8.4c-0.4-1.5-1.1-2.9-2.1-4.2l-4.2,4.2H23.6z M0.4,14.6
                    c0.4,1.5,1.1,2.9,2.1,4.2l4.2-4.2H0.4L0.4,14.6z M19.3,2c-1.2-0.9-2.6-1.7-4.2-2.1v6.2L19.3,2z M4.7,21c1.2,0.9,2.6,1.7,4.2,2.1
                    v-6.2L4.7,21z M8.9-0.1C7.3,0.3,5.9,1,4.7,2l4.2,4.2V-0.1z M15.1,23.1c1.5-0.4,2.9-1.1,4.2-2.1l-4.2-4.2V23.1z M17.3,14.6l4.2,4.2
                    c0.9-1.2,1.7-2.6,2.1-4.2H17.3z"/>
                    <g>
                        <path fill="#D80027" d="M23.9,9.9H13.6h0V-0.4c-0.5-0.1-1-0.1-1.6-0.1c-0.5,0-1.1,0-1.6,0.1V9.9v0H0.1C0,10.4,0,11,0,11.5
                            c0,0.5,0,1.1,0.1,1.6h10.3h0v10.3c0.5,0.1,1,0.1,1.6,0.1c0.5,0,1.1,0,1.6-0.1V13.1v0h10.3c0.1-0.5,0.1-1,0.1-1.6
                            C24,11,24,10.4,23.9,9.9z"/>
                        <path  fill="#D80027" d="M15.1,14.6L15.1,14.6l5.4,5.4c0.2-0.2,0.5-0.5,0.7-0.8l-4.6-4.6H15.1L15.1,14.6z M8.9,14.6L8.9,14.6L3.5,20
                            c0.2,0.2,0.5,0.5,0.8,0.7l4.6-4.6V14.6z M8.9,8.4L8.9,8.4L3.5,3C3.3,3.3,3,3.5,2.8,3.8l4.6,4.6H8.9L8.9,8.4z M15.1,8.4L15.1,8.4
                            L20.5,3c-0.2-0.2-0.5-0.5-0.8-0.7l-4.6,4.6V8.4L15.1,8.4z"/>
                    </g>
                </g>
            </svg>
            <div>{{ text }}</div>
        </div>
    </div>
    
</template>


<script>
export default {
    name: 'Flag',
    props: {
        width: {
            type: Number,
            default: 24
        },
        height: {
            type: Number,
            default: 24
        },
        DK: {
            type: Boolean,
            default: false
        },
        UK: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: ''
        }

    }
};
</script>

<style>

.flag {
    display: flex;
    align-items: center;
    gap: 8px;
}

.flag > .language {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 900;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 120%; /* 19.2px */
    letter-spacing: -0.48px;
    text-transform: uppercase;
    white-space: nowrap;
}

</style>