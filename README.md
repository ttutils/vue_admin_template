<h1 align="center">vue_admin_template</h1>

此项目是根据[@buyfakett](https://github.com/buyfakett)的vue使用习惯的模板仓库，用于快速写一个后台的前端

项目目录：

```bash
.
├── .github                    # github自动化，自动打包到dist分支
├── plop-templates             # 基本模板
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── filters                # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .babelrc                   # babel-loader 配置
├── url.config.js              # url配置(不上传至git)
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置
└── package.json               # package.json
```

url.config.js(url配置模板)：

```js
const ENV = 2
let ENV_url
if (ENV === 1) {
  ENV_url = 'http://127.0.0.1:8000'
}else if (ENV === 2) {
  ENV_url = 'https://xxx.com'
}
module.exports = {
  ENV_url
};
```

