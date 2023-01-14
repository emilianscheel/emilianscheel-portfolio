<script lang="ts">
import ButtonView from './ButtonView.vue';

export default {
    props: {
        title: { required: true, type: String },
        description: { required: true, type: String },
        github: { required: false, type: String },
        link: { required: false, type: String },
        image_src: { required: false, type: String }
    },
    methods: {
        getImageUrl(image_src: String) {
            return new URL(`../assets/images/${image_src}`, import.meta.url).href
        }
    },
    data() {
        return {
            isDone: this.done,
        };
    },
    components: { ButtonView },
    build: {
        assetsSubDirectory: '',
        assetsPublicPath: '',
    }
};
</script>

<template>
    <div class="card">
        <img class="card-image" v-if="image_src" :src="getImageUrl(image_src)" />
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <div class="card-buttons">
            <ButtonView v-if="github" label="Auf GitHub ansehen" :href="github" target="_blank" />
            <ButtonView v-if="link" label="Öffnen" :href="link" target="_blank" />
        </div>
    </div>
</template>



<style lang="scss">
.card {
    padding: 20px;
    border: 1px solid var(--color-border);
    border-radius: 14px;
    max-width: 350px;
    transition: 0.2s ease;
    min-width: 350px;

    &:hover {
        background: rgb(243, 247, 253);
        border: 1px solid rgb(0, 129, 189);
    }

    h2 {
        color: black;
        font-weight: 800;
    }

    p {
        margin-top: 5px;
        margin-bottom: 0px;
    }
}

@media (max-width: 400px) {
    .card {
        min-width: 100%;
    }
}

.card-buttons {
    display: flex;
    gap: 10px;
}

.card-image {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 18px;
}
</style>