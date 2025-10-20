<template>
    <div class="divider">
        <div class="divider-line"></div>
        <h2 class="divider-text">{{ text }}</h2>
        <div class="divider-line"></div>
    </div>
</template>

<script>
export default {
    name: 'Divider',
    
    props: {
        text: {
            type: String,
            default: 'RECOMMENDATIONS'
        }
    }
}
</script>

<style scoped>
.divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 80px 0;
    padding: 0 60px;
}

.divider-line {
    flex: 1;
    height: 1px;
    background-color: #000000;
    max-width: 300px;
}

.divider-text {
    font-size: clamp(24px, 4vw, 48px);
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    white-space: nowrap;
    color: #000000;
    margin: 0;
    padding: 0 20px;
}

@media (max-width: 768px) {
    .divider {
        gap: 20px;
        padding: 0 20px;
    }
    
    .divider-text {
        padding: 0 10px;
        letter-spacing: 1px;
    }
}
</style>
