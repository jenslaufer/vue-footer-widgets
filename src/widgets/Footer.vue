<template>
    <a :href="url" target="_blank" rel="noopener noreferrer" :class="componentStyle">
        {{ text }}
    </a>
</template>
<script setup>
const props = defineProps({
    text: {
        text: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    componentStyle: {
        type: String,
        required: false
    }
})
</script>