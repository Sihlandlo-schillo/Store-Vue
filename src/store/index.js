import { createStore } from 'vuex'

export default createStore({
  state: {
    about:null,
    education:null,
    projects:null,
    contact:null,
    skills:null,
    testimonials:null


  },
  mutations: {
    // use this to change /update the state
    // committing mutation 
    // payload is any information parsed 
    // updateData(state,payload){
    //   state.data = payload
    // }

    setAbout(state,payload){
      state.about = payload
    },
    setEducation(state,payload){
      state.education = payload
    },
    setProjects(state,payload){
      state.projects = payload
    },
    setContact(state,payload){
      state.contact = payload
    },
    setSkills(state,payload){
      state.skills = payload
    },
    setTestimonials(state,payload){
      state.testimonials = payload
    }
  },
  actions: {
    // run all async code
    // dispatching 
    // fetch(hehe){
    //   hehe.commit
    // }
   async getAbout(aboutContent){
      let fetchedInfo = await fetch('https://sihlandlo-schillo.github.io/first_api/data/')
      let converted = await fetchedInfo.json()
      // console.log(converted);
      aboutContent.commit('setAbout', converted.aboutMe)

    },
   async getEducation({commit}){
      let fetchedInfo = await fetch('https://sihlandlo-schillo.github.io/first_api/data/')
      let data = await fetchedInfo.json()
      let {aboutMe,projects,education,skills,contact} = data
      console.log(data);
      commit('setEducation', data.education)
    commit('setAbout',aboutMe)
    commit('setProjects',projects)
    commit('setEducation',education)
    commit('setSkills',skills)
    commit('setContact', contact)
    },
  },
  modules: {
    
  },
  getters: {
    // used to get things //takes a function, and return (an array and pass a certain argument,(filter))
    // filteredData(){
    //   return Array.filter()
    // }
  }
})
