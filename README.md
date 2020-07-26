# mikavue

## 研究学习vuejsV1.0源码后，自己实现的mikavue，测试demo
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

## 目前支持的功能

`v-on:click`, `v-text`, `v-model`



## 构建方法

# 安装依赖
npm install

# 开发环境构建,devserver localhost:8080
npm run dev

# 生产环境构建
npm run build
