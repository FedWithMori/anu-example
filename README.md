# anu-example
anu样板项目

# 使用说明：

1、安装依赖
```js
    npm i 
```
NODE版本：8.10.0  
如果你当前的版本低于以上版本，而且安装依赖失败，请更新你的node！(更新node会直接更新npm版本)

##### windows用户直接到官网下载最新版本的msi安装包，然后直接覆盖安装（一定要和之前的node安装路径一致）

##### 在MAC环境下，可以直接安装n这款插件来管理我们的node版本，使用起来很方便。
安装：
```js
    npm i -g n
```

常用命令：  
1). n latest： 安装最新版本node  
2). n 切换版本  

2、配置host
```js
    127.0.0.1 anu-example.com
```

3、运行项目
```js
    npm start
```

##### 关于热更新
react-hot-loader不支持监听对象的变化，例如state，需手动刷新
