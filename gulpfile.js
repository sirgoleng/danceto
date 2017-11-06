var gulp = require('gulp');
var rev = require('gulp-rev');//每个文件增加版本号，生成哈希吗
var revReplace = require('gulp-rev-replace');//更新文件名引用
var useref = require('gulp-useref');//在html 文件里用注释的方法
var filter = require('gulp-filter');//
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');

gulp.task('default', function(){
    var jsFilter = filter('**/*.js',{restore: true});
    var cssFilter = filter('**/*.css',{restore: true});
    var indexHtmlFilter = filter()
});


