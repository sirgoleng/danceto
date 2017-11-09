### 1.瀑布流插件
https://masonry.desandro.com/
http://www.jq22.com/jquery-info362
https://tympanus.net/Development/GridLoadingEffects/index2.html
waterfall plugin website http://wlog.cn/waterfall/index-zh.html
div 重叠 http://www.cnblogs.com/xbdeng/p/5622497.htmlv

# 相关插件
jquery.singlepagenav.min.js
wow.min.js
animate.css

# wow.js使用
data-wow-duration="2s" 持续时间
data-wow-delay="2s" 延迟时间
data-wow-offset="10" 距离可视区域多远开始执行
data-wow-iteration="10" 重复次数
# node.js 及 npm使用
1. 创建package方法 npm init
2. 安装npm包时更新package方法 --save-dev  or --save
3. 卸载方法 npm uninstall 
4. 基于nodejs的http服务器 http-server，安装 sudo npm install http-server -g
5. genymotion 安卓虚拟机
6. browserhacks.com 浏览器兼容性查看
7. html5shiv 浏览器兼容性解决
8. respond 浏览器兼容性解决，支持媒体查询
9. modernizr 浏览器兼容性解决，主动检测
10. caniuse.com 查询兼容性网站
11. browsersync.cn 浏览器同步测试工具

# 打包发布
压缩、合并、增加版本号等
## 1. 压缩
1. 主流工具 grunt、gulp、webpack
2. 安装gulp,sudo npm install gulp --save-dev
3. sudo npm install gulp-rev gulp-rev-replace gulp-useref gulp-filter gulp-uglify gulp-csso --save-dev
4. 如果写了package.json 则直接npm install就可以自动安装配置里的插件
## 2. gulp 插件介绍
1. gulp-watch 代码修改后自动打包
2. gulp-postcss 自动给css属性添加浏览器前缀
3. gulp-concat 合并css文件
4. gulp-responsive 自动实现响应式图片
