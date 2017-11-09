var gulp = require('gulp');
var rev = require('gulp-rev');//每个文件增加版本号，生成哈希吗
var revReplace = require('gulp-rev-replace');//更新文件名引用
var useref = require('gulp-useref');//在html 文件里用注释的方法
var filter = require('gulp-filter');//
var uglify = require('gulp-uglify');//js代码压缩
var csso = require('gulp-csso');//css代码压缩

gulp.task('default', function(){
    var jsFilter = filter('js/*.js',{restore: true});
    var cssFilter = filter('css/*.css',{restore: true});
    var indexHtmlFilter = filter(['**/*', '!**/index.htm'],{restore: true});

    return gulp.src('index.htm')
    .pipe(useref())
    .pipe(jsFilter)
    .pipe(uglify())
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe(csso())
    .pipe(cssFilter.restore)
    .pipe(indexHtmlFilter)
    .pipe(rev())
    .pipe(indexHtmlFilter.restore)
    .pipe(revReplace())
    .pipe(gulp.dest('dist'));
});


