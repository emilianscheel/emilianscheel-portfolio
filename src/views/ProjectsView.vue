<script lang="ts">
import CardView from '@/components/CardView.vue'
//import ProjectsJson from '@/public/Projects.json'
import axios from 'axios'

type Project = {
    github: string,
    title: string,
    image_src: string,
    priority: number,
    description: string
}

export default {
    data() {
        return {
            ProjectsData: null
        }
    },
    mounted() {
        axios
            .get('http://localhost:2173/Projects.json')
            .then(response => {
                this.ProjectsData = response.data.sort((el1: Project, el2: Project) => el1.priority < el2.priority ? 1 : -1);
            })
    },
    components: { CardView },
}
</script>
<template>
    <div class="container">
        <h1>Projekte</h1>
        <p class="breadcrumb">
            <a href="/">Startseite</a> / <a class="refresh" href="#">Projekte</a>
        </p>

        <div class="list">

            <template v-for="data in ProjectsData" :key="data.title">
                <CardView v-bind="data" />
            </template>
        </div>
    </div>
</template>
  