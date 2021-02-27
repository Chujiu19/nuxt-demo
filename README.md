发布地址：http://106.75.9.248:3389

抓狂的问题：
1. linux node环境装了好几次。。 直接网上copy装了低版本 结果好多服务起不了。。。
2. 手动上传，服务开启成功却访问不到页面，外网防火墙没有定义的端口号。。。
3. Build阶段总报错，找不到文件。结果是nuxt.config.js里面 component 地址pages/Home 默认找pages/Home/index 而我 index命名是Index。。。
4. 改成了index却并不显示文件已修改， 原因是github默认忽略文件名字母大小写。。。
5. 发布deploy linux wget 仓库地址总是报404 改了host，又关防火墙，以为是配置问题 结果是因为我的仓库是私有库。。。
6. 终于下载成功了 又找不到pm2指令  npm install 并没有添加环境变量。。。

崩溃了。。。。。