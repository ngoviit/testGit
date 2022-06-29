
import Vue from "vue";
import Vuex from 'vuex'
 // modules
 import Auth from './modules/auth'
 import TodoModules from './modules/todos'
Vue.use(Vuex)

const storeData = {
    modules: {
        Auth,
        TodoModules
    }
}

const store = new Vuex.Store(storeData)

export default store