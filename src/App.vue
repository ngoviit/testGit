<template>
  <div id="app">
    <navbar-component/>
   <todos-app/>
   <statusbar-component/>
   <progress-bar/>
  </div>
</template>

<script>
import TodosApp from './components/TodosComponent.vue'
import NavbarComponent from './components/NavbarCompenent.vue'
import StatusbarComponent from './components/StatusbarComponent.vue'
import ProgressBar from './components/ProgressBar.vue'

export default {
  components:{TodosApp, NavbarComponent, StatusbarComponent, ProgressBar},
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(219, 219, 219);
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
