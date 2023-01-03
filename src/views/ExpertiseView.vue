<script setup lang="ts">
import CardView from '@/components/CardView.vue';
</script>
<template>
    <div class="container">
        <h1>Expertise</h1>
        <p class="breadcrumb">
            <a href="/">Startseite</a> / <a class="refresh" href="#">Expertise</a>
        </p>

        <p class="intro">
            Diese Seite gibt Ihnen einen Einblick in die Technologien, die ich sehr gut behersche.
        </p>

        <div class="list">
            <CardView link="https://wordpress.org" title="Wordpress" image_src="wordpress.png"
                description="Create a place for your business, your interests, or anything else—with the open source platform that powers the web." />

            <CardView github="https://github.com/vercel/next.js" title="Next.JS" image_src="next-js.png"
                description="Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed." />
        </div>
    </div>
</template>
  