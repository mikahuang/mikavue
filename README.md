﻿# mikavue

## How to use?
```
  <div id="app">
	<p v-text="message"></p>
    <p v-text="message"></p>
    <input v-model="message" />
    <button v-on:click="add">add</button>
	<button v-on:click="sub">sub</button>
  </div>
  <script>
    new MikaVue({
      el: "#app",
      data: {
        message: 1
      },
      methods: {
        add () {
          this.message += 1;
        },
		sub () {
          this.message -= 1;
        }
      }
    })
  </script>
```

## Supported Features

`v-on:click`, `v-text`, `v-model`



## Build Setup

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build