const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    return tsProject.src()
        // compila typescript para javascript
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
})