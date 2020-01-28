import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

// Reusable store
// const MyReusableModule = {
//   state () {
//     return {
//       foo: 'bar'
//     }
//   },
//   // mutations, actions, getters...
// }


const state = {
  ha: "Works! Promise Async functions and .then( update Todos )!",
  todos: [
    /*
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": true
    }
    */
  ]
}

const getters = {
  allTodos: state => state.todos
}

// actions have to be synchronous and asynchronous
const actions = {
  // Async function use with .then in component
  async loadThings ({ commit })
  {
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
    // Run mutations update
    commit("loadThings", response.data);
  },
  async addThing ({ commit }, title) {
    let response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});
    // Run mutations update
    commit("addThing", response.data);
  },
  deleteThing: ({ commit }, data) => {
    commit("deleteThing", data);
  }
}

// mutations have to be synchronous
const mutations = {
  // Update data
  addThing(state, todo) {
    // state.todos.unshift(todo);
    state.todos = [todo, ...state.todos];
  },
  deleteThing(state, data) {
    let newArray = state.todos.filter(i => i.id !== data);
    state.todos = newArray;
  },
  // loadThings: (state, data) => {
  loadThings: (state,data) => {
    // let response = axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
    state.todos = [...data];
  }
}

const module1 = {
  state,getters,mutations,actions
}

// const module2 = {
//   state: {
//     todos: [
//       {
//         "userId": 1,
//         "id": 1,
//         "title": "1 delectus aut autem",
//         "completed": false
//       },
//       {
//         "userId": 2,
//         "id": 2,
//         "title": "2 delectus aut autem",
//         "completed": false
//       }
//     ],
//     ha: "babababab"
//   },
//   getters: {
//     allNow: state => state.todos
//   },
//   mutations: {
//     loadNow (state, data) {
//       state.todos = [...data];
//     }
//   },
//   actions: {
//     async loadNow ({ commit }){
//       let response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
//       commit("loadNow", response.data);
//       return response.data;
//     }
//   }
// }

// const store = new Vuex.Store(moduleOne);

const store = new Vuex.Store({
  modules: {
    module1
  },
  // strict: true
});

// const store = new Vuex.Store({
//   modules: {
//     a: module1,
//     b: module2
//   },
//   strict: true
// });

// store.state.a // -> `module1`'s state
// store.state.b // -> `module2`'s state

export default store
