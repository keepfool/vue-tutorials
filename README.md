#Vue.js教程

##1. Getting Started

以下示例，在博客中有具体讲解，博客链接：[Vue.js——60分钟快速入门](http://www.cnblogs.com/keepfool/p/5619070.html)

####Hello World双向绑定示例

- [Hello World示例](https://keepfool.github.io/vue-tutorials/01.GettingStarted/index.html)

####常用内置指令
- [v-if指令示例](https://keepfool.github.io/vue-tutorials/01.GettingStarted/v-if.html)
- [v-show指令示例](https://keepfool.github.io/vue-tutorials/01.GettingStarted/v-show.html)
- [v-else指令示例](https://keepfool.github.io/vue-tutorials/01.GettingStarted/v-else.html)
- [v-for指令示例](https://keepfool.github.io/vue-tutorials/01.GettingStarted/v-for.html)
- [v-bind指令示例](https://keepfool.github.io/vue-tutorials/01.GettingStarted/v-bind.html)
- [v-on指令示例](https://keepfool.github.io/vue-tutorials/01.GettingStarted/v-if.html)

####页面示例
- [循环列表、双向绑定、添加数据、删除数据综合示例](https://keepfool.github.io/vue-tutorials/01.GettingStarted/simple-demo.html)

##2. Components

###Part-1

以下示例，在博客中有具体讲解，博客链接：[Vue.js——60分钟组件快速入门（上篇）](http://www.cnblogs.com/keepfool/p/5625583.html)

提醒：最好结合源码和Chrome的F12工具查看示例

####组件注册示例

- [组件使用的基本步骤](https://keepfool.github.io/vue-tutorials/02.Components/Part-1/registration-steps.html)
- [组件的局部注册](https://keepfool.github.io/vue-tutorials/02.Components/Part-1/local-registration.html)
- [父组件和子组件](https://keepfool.github.io/vue-tutorials/02.Components/Part-1/local-registration-with-child-component.html)
- [组件注册语法糖](https://keepfool.github.io/vue-tutorials/02.Components/Part-1/registration-sugar.html)
- [使用script标签替代HTML字符串模板](https://keepfool.github.io/vue-tutorials/02.Components/Part-1/use-script-tag.html)
- [使用template标签替代HTML字符串模板](https://keepfool.github.io/vue-tutorials/02.Components/Part-1/use-template-tag.html)


####父组件传递数据给子组件
- [props基础示例](https://keepfool.github.io/vue-tutorials/02.Components/Part-1/basic-props.html)
- [props单向绑定](https://keepfool.github.io/vue-tutorials/02.Components/Part-1/single-bind-props.html)
- [props双向绑定](https://keepfool.github.io/vue-tutorials/02.Components/Part-1/double-bind-props.html)
- [props单次绑定](https://keepfool.github.io/vue-tutorials/02.Components/Part-1/once-bind-props.html)

####页面示例
- [注册组件、过滤表格、父组件传递数据给子组件综合示例](https://keepfool.github.io/vue-tutorials/02.Components/Part-1/simple-demo.html)

###Part-2

以下示例，在博客中有具体讲解，博客链接：[Vue.js——60分钟组件快速入门（下篇）](http://www.cnblogs.com/keepfool/p/5637834.html)

####slot示例

- [单个slot示例](https://keepfool.github.io/vue-tutorials/02.Components/Part-2/single-slot.html)
- [多个slot示例1——对话框](https://keepfool.github.io/vue-tutorials/02.Components/Part-2/dialog-slot.html)
- [多个slot示例2——多种颜色的对话框](https://keepfool.github.io/vue-tutorials/02.Components/Part-2/dialog-slot-with-class.html)
- [多个slot示例3——未指定footer的对话框](https://keepfool.github.io/vue-tutorials/02.Components/Part-2/dialog-slot-with-class-no-footer.html)

####父子组件实例访问示例

- [$children示例](https://keepfool.github.io/vue-tutorials/02.Components/Part-2/$children.html)
- [$ref示例](https://keepfool.github.io/vue-tutorials/02.Components/Part-2/$parent.html)
- [$parent示例](https://keepfool.github.io/vue-tutorials/02.Components/Part-2/$parent.html)

####父子组件通信示例

- [$dispatch：子组件向父组件派发事件](https://keepfool.github.io/vue-tutorials/02.Components/Part-2/$dispatch.html)
- [$broadcast：父组件向子组件广播事件](https://keepfool.github.io/vue-tutorials/02.Components/Part-2/$broadcast.html)

####基于组件一步一步实现一个CURD示例

- [第1步：创建表格组件，添加查询和删除功能](https://keepfool.github.io/vue-tutorials/02.Components/Part-2/demo/step01.html)
- [第2步：创建对话框组件](https://keepfool.github.io/02.Components/Part-2/demo/step02.html)
- [第3步：实现数据新建功能](https://keepfool.github.io/vue-tutorials/02.Components/Part-2/demo/step03.html)
- [第4步：实现数据修改功能](https://keepfool.github.io/vue-tutorials/02.Components/Part-2/demo/step04.html)
- [第5步：修改数据新建功能](https://keepfool.github.io/vue-tutorials/02.Components/Part-2/demo/step05.html)
- [第6步：完整示例](https://keepfool.github.io/vue-tutorials/02.Components/Part-2/demo/step06.html)

##3. Ajax

以下示例，在博客中有具体讲解，博客链接：[Vue.js——基于$.ajax实现数据的跨域增删查改](http://www.cnblogs.com/keepfool/p/5648674.html)
###基于jquery或zepto的$.ajax示例

- [$.ajax跨域GET示例](http://211.149.193.19:8090/vue-tutorials/03.Ajax/jquery-zepto/ajax-cors-get.html)
- [$.ajax跨域JSONP示例](http://211.149.193.19:8090/vue-tutorials/03.Ajax/jquery-zepto/ajax-jsonp.html)
- [$.ajax跨域POST示例](http://211.149.193.19:8090/vue-tutorials/03.Ajax/jquery-zepto/ajax-cors-post.html)
- [$.ajax跨域PUT示例](http://211.149.193.19:8090/vue-tutorials/03.Ajax/jquery-zepto/ajax-cors-put.html)
- [$.ajax跨域DELETE示例](http://211.149.193.19:8090/vue-tutorials/03.Ajax/jquery-zepto/ajax-cors-delete.html)

###基于vue-resource的示例

以下示例，在博客中有具体讲解，博客链接：[Vue.js——vue-resource全攻略](http://www.cnblogs.com/keepfool/p/5657065.html)

####http示例
- [http get示例](http://211.149.193.19:8090/vue-tutorials/03.Ajax/vue-resource/http-get.html)
- [http jsonp示例](http://211.149.193.19:8090/vue-tutorials/03.Ajax/vue-resource/http-jsonp.html)
- [http post示例](http://211.149.193.19:8090/vue-tutorials/03.Ajax/vue-resource/http-post.html)
- [http put示例](http://211.149.193.19:8090/vue-tutorials/03.Ajax/vue-resource/http-put.html)
- [http delete示例](http://211.149.193.19:8090/vue-tutorials/03.Ajax/vue-resource/http-delete.html)

####resouce示例
- [resource get示例](http://211.149.193.19:8090/vue-tutorials/03.Ajax/vue-resource/resource-get.html)
- [resource save示例(HTTP POST)](http://211.149.193.19:8090/vue-tutorials/03.Ajax/vue-resource/resource-post.html)
- [resource update示例(HTTP PUT)](http://211.149.193.19:8090/vue-tutorials/03.Ajax/vue-resource/resource-put.html)
- [resource remove示例(HTTP DELETE)](http://211.149.193.19:8090/vue-tutorials/03.Ajax/vue-resource/resource-delete.html)

####inteceptor示例
- [inteceptor示例1——ajax请求的loading界面](http://211.149.193.19:8090/vue-tutorials/03.Ajax/vue-resource/inteceptor-demo1.html)
- [inteceptor实例2——请求失败时的提示对话框](http://211.149.193.19:8090/vue-tutorials/03.Ajax/vue-resource/inteceptor-demo2.html)

##4. OAuth

以下示例，在博客中有具体讲解，博客链接：[Vue.js——使用$.ajax和vue-resource实现OAuth的注册、登录、注销和API调用](http://www.cnblogs.com/keepfool/p/5665953.html)

###$.ajax示例

- [注册示例](http://211.149.193.19:8090/vue-tutorials/04.OAuth/jquery-zepto/step-01.html)
- [登录和注销示例](http://211.149.193.19:8090/vue-tutorials/04.OAuth/jquery-zepto/step-02.html)
- [登录获取Token并调用API示例](http://211.149.193.19:8090/vue-tutorials/04.OAuth/jquery-zepto/step-03.html)
- [注册、登录、注销、调用API综合示例](http://211.149.193.19:8090/vue-tutorials/04.OAuth/jquery-zepto/step-04.html)

###vue-resource示例

- [注册示例](http://211.149.193.19:8090/vue-tutorials/04.OAuth/vue-resource/step-01.html)
- [登录和注销示例](http://211.149.193.19:8090/vue-tutorials/04.OAuth/vue-resource/step-02.html)
- [登录获取Token并调用API示例](http://211.149.193.19:8090/vue-tutorials/04.OAuth/vue-resource/step-03.html)
- [注册、登录、注销、调用API综合示例](http://211.149.193.19:8090/vue-tutorials/04.OAuth/vue-resource/step-04.html)

###结合CURD、注册、登录、注销的页面示例

[Demo](http://211.149.193.19:8090/vue-tutorials/04.OAuth/vue-resource/demo.html)

##5.官方项目模板

###Browserify项目模板

以下示例，在博客中有具体讲解，博客链接：[Vue.js——60分钟browserify项目模板快速入门](http://www.cnblogs.com/keepfool/p/5677032.html)


- [vue-browserify-simple模板示例](https://keepfool.github.io/vue-tutorials/05.OfficialTemplates/my-browserify-simple-demo/)

###Webpack项目模板

以下示例，在博客中有具体讲解，博客链接：[Vue.js——60分钟webpack项目模板快速入门](http://www.cnblogs.com/keepfool/p/5678427.html)


- [vue-webpack-simple模板示例](https://keepfool.github.io/vue-tutorials/05.OfficialTemplates/my-webpack-simple-demo/)

##6.Vue-Router

以下示例，在博客中有具体讲解，博客链接：[Vue.js——vue-router 60分钟快速入门](http://www.cnblogs.com/keepfool/p/5690366.html)

- [第一个单页面应用](https://keepfool.github.io/vue-tutorials/06.Router/basic/basic_01.html)
- [嵌套路由示例](https://keepfool.github.io/vue-tutorials/06.Router/basic/basic_02.html)
- [具名路径示例](https://keepfool.github.io/vue-tutorials/06.Router/basic/basic_03.html)
- [路由对象示例](https://keepfool.github.io/vue-tutorials/06.Router/basic/basic_04.html)
- [让链接处于选中状态示例](https://keepfool.github.io/vue-tutorials/06.Router/basic/basic_05.html)
- [钩子函数示例](https://keepfool.github.io/vue-tutorials/06.Router/basic/basic_06.html)

###乞丐版源码（页面和组件代码混合在一起）

[乞丐版源码](https://github.com/keepfool/vue-tutorials/tree/master/06.Router/basic)

###精装版源码（基于vue-webpack-simple模板构建）

- [精装版源码-demo01](https://github.com/keepfool/vue-tutorials/tree/master/06.Router/demo01)
- [精装版源码-demo02](https://github.com/keepfool/vue-tutorials/tree/master/06.Router/demo02)
- [精装版源码-demo03](https://github.com/keepfool/vue-tutorials/tree/master/06.Router/demo03)
- [精装版源码-demo04](https://github.com/keepfool/vue-tutorials/tree/master/06.Router/demo04)
- [精装版源码-demo05](https://github.com/keepfool/vue-tutorials/tree/master/06.Router/demo05)