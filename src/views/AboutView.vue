<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
    <p>Full Name (Computed): {{ fullName }}</p>
    <p>Full Name (Method): {{ getFullName() }}</p>
    <p>Random Number (Computed): {{ randomNumber }}</p>
    <p>Random Number (Method): {{ getRandomNumber() }}</p>
    <button @click="updateLastName()">Update Last Name</button>
  </div>
  </div>
</template>


<script>
  export default {
  data() {
    return {
      firstName:'Sihlandlo',
      lastName: 'Makhumsha'
    };
  },
  methods: {
    getFullName() {
      console.log("Method Getting full name");
      return `${this.firstName} ${this.lastName}`;
    },
    getRandomNumber() {
      console.log("Method getting random number");
      return Math.random();
    },
    updateLastName() {
      this.lastName = 'Donovan'
    }
  },
  computed: {
    fullName() {
      console.log("Computed computing full name");
      return `${this.firstName} ${this.lastName}`;
    },
    randomNumber() {
      console.log("Computed computing random number");
      return Math.random();
    },
  },
};
//1 Caching:
// The computed fullName is calculated once and cached. It only recalculates when its dependencies (firstName or lastName) change.
// The getFullName() method is called every time the template re-renders.
//2 Performance:
// The computed randomNumber generates a random number once and reuses it.
// The getRandomNumber() method generates a new random number on every call.
//3 Reactivity:
// Computed properties automatically track their dependencies and update when those dependencies change.
// Methods don't track dependencies and always execute when called.
//4 Usage in template:
// Computed properties are used without parentheses: {{ fullName }}
// Methods are called with parentheses: {{ getFullName() }}
</script>