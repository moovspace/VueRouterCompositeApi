# Vue Composition API
Vue router app with composition API

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

# add to vue app
cd app-name

# add router
vue add router
```

### Vue 3 Composition API
```bash
# install api
npm install @vue/composition-api --save

# add to index.js
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);
```

### Run local server
```bash
# goto app folder
cd app-name

# run in background
npm run server &
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
