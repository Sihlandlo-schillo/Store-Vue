<template lang="">
    <div>
        {{$store.state.about}}
        <section>
            {{$store.state.education}}
        </section>
    </div>
    <div v-for="projects in projectData()" :key="projects.name">
        {{projects.name}}
    </div>
</template>
<script>
export default {
    methods:{
        projectData(){
            return this.$store.state.projects
        }
    },
    computed:{
        getAbout(){
            // .dispatch to access actions
            // .commit to access mutations
            return this.$store.dispatch('getAbout')
        },
        getEducation(){
            return this.$store.dispatch('getEducation')
        }
    },
    mounted(){
        this.getAbout,
        this.getEducation,
        this.getProjects
    }
}
</script>
<style lang="">
    
</style>