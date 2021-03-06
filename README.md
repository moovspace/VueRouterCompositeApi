# Vue Router Composition API
Vue router app with composition API and vuex store (vue, vue-router, vue/composition-api, vuex store, vuex composition api store).

## Install Vue dev
Install development tools

### Install nodejs, npm
```bash
# install npm, nodejs
apt install npm, nodejs

# install vue cli
npm i -g @vue/cli
```

### Create vue app
```bash
vue create app-name
```

### Add router (history mode)
```bash
# install router
npm install vue-router

# goto directory
cd app-name

# add router to app
vue add router
```

### Vue 3 Composition API
```bash
# install api
npm install @vue/composition-api --save

# add to main.js (2.x)
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

# or (3.x)
# import VueCompositionApi from 'vue';
# Vue.use(VueCompositionApi);
```

### Vue Vuex install
```bash
# install Vuex
cd app-name
npm install vuex --save

# add to main.js (2.x)
import Vuex from 'vuex'
Vue.use(Vuex)
```

### Run local dev server
```bash
# goto app dir
cd app-name

# run in background
npm run server &
```

# Project setup
```
# get package
git clone https://github.com/moovspace/VueRouterApp

# goto dir
cd VueRouterApp

# update
npm install
```

### Allow browser console logs
package.json
```bash
"eslintConfig": {
    ...

    "rules": {
      "no-console": "off"
    }

    ...
  }
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production (create dist directory)
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run dist deploy (http://localhost:5000)
```bash
npm install -g serve

# run server
cd VueRouterApp
serve -s dist
```

# Component
```vue
<template>
    <div>
        <h2>Attending</h2>

        <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>

        <ul>
            <li v-for="(name, index) in attending" :key="index"> {{ name }} </li>
        </ul>

        <button @click="increaseCapacity()">Increase Capacity</button>
    </div>
</template>

<script>
/* ref, reactive, computed, watch, onMounted, onUpdated, onUnmounted */
// Vue 2.x,
import { reactive, computed, toRefs, watch, onMounted, onUpdated, onUnmounted } from "@vue/composition-api";

// Vue 3.x
// import { reactive, computed, toRefs, watch, onMounted, onUpdated, onUnmounted } from "vue";

export default {
    setup() {
        // Create object {value: 9}
        const capacity = ref(9);
        const attending = ref(["Tom", "Jerry", "Mickey"]);

        // When capacity change
        const spacesLeft = computed(() => {
            return capacity.value - attending.value.length;
        });

        // Methods
        function increaseCapacity() {
            capacity.value++;
        }

        // Add javascript to <head>
        function addSctipt(){
            let js = document.createElement('script')
            js.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
            document.head.appendChild(js)
        }

        // Watchers, fire when obj change
        const Watch = watch(capacity, (newVal, oldVal) => {
            alert("Changed " + newVal + ' ' + oldVal)
        });

        // Hooks
        onMounted(() => { alert("Clock Object mounted") });
        onUpdated(() => { alert("Clock Object updated") });
        onUnmounted(() => { alert("Clock Object unmounted") });

        return { capacity, attending, spacesLeft, increaseCapacity };
    }
}
</script>

<style scoped>
/* style only for component with: scoped */
*{
    box-sizing: border-box; color: #09f;
}
</style>
```

### Vue Composite Api store
store-composite-api.js
```js
// Composition Api store
import { provide, inject } from '@vue/composition-api';
const StoreSymbol = Symbol();
export function provideStore(store){
    provide(StoreSymbol, store);
}
export function useStore(){
    const store  = inject(StoreSymbol);
    if(!store){
        // future
    }
    return store;
}
```

App.vue
```js
<script>
// This in App.vue Composite Api Store
import { provideStore } from './store-composite-api'

export default {
    props: {
        name: String
    },
    setup(props, {root: {$store}}) {
        // Set global store
        provideStore($store);
    }
}
</script>
```

Component.vue
```js
<script>
import { useStore } from '../store-composite-api'
import { ref } from "@vue/composition-api";
// import { computed, watch } from '@vue/composition-api'

export default {
	export default {
	setup(){
		const store = useStore();

		let Todos = ref(store.getters.allTodos);

		// Async function, update todos
		store.dispatch('loadThings').then(() => {
			Todos.value = store.getters.allTodos
			console.log("Loaded!!! " + Todos.value)
		});
    }
}
</script>
```

### Vue 2
See [Vue Cheat Sheet](https://github.com/dekadentno/vue-cheat-sheet)

### Vue 3 Composite Api
See [Install Composite Api](https://github.com/vuejs/composition-api)
See [Composite Api RFC](https://vue-composition-api-rfc.netlify.com)
See [Vue 3 Composite Api Pdf](https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf)

### How to deploy
See [Deploy](https://cli.vuejs.org/guide/deployment.html#github-pages)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
