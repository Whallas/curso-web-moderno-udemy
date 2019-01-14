const gulp = require('gulp')
const concat = require('gulp-concat')
// const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', () => {
    // todos os arquivos .js na pasta e subpastas
    return gulp.src('src/**/*.js')
        // babel - tradutor de código para versões mais antigas
        .pipe(babel({
            comments: false,
            // env - pegar o preset correto automaticamente pra rodar o site
            presets: ['env'],
            // minify e uglify funcionam semelhantemente
            minify: true
        }))
        // tornar o código de cada arquivo o mais compacto possível
        //.pipe(uglify())
        // problemas na execução
        .on('error', function (err) {console.log(err)} )
        // concatena os arquivos. Nomenclatura min.js
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
})



