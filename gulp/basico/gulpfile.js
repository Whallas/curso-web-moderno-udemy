const gulp = require('gulp');

// task principal do gulp
gulp.task('default', () => {
    //console.log('Ok!')
    // chama outras tasks que você criou
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    // console.log('copiar!');
    // Arquivos que serão trabalhados nessa task
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/*.txt')
        // um tipo de filtro (trabalho) que se queria aplicar aos arquivos recuperados no src. Ex:
        // .pipe(transformacao1())
        // .pipe(transformacao2())

        // jogar na outra pasta
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('antes1')
})

gulp.task('antes2', () => {
    console.log('antes2')
})

// sem corpo
gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('fim1')
})

gulp.task('fim2', () => {
    console.log('fim2')
})