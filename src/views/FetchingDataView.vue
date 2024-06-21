<template lang="">
    <div>
        {{$store.state.about}}
        <!-- {{$store.state.education}} -->
    </div>
    <div v-for="project in projectData()" :key="project.name">
        {{project.name}}
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
        }
        // getEducation(){
        //     return this.$tore.dispatch('getEducation')
        // }
    },
    mounted(){
        this.getAbout
        // this.getEducation
    }
}
</script>
<style lang="">
    
</style>