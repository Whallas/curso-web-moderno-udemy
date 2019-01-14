const gulp = require('gulp');
const util = require('gulp-util');
const sequence = require('run-sequence');

require('./gulptasks/app')
require('./gulptasks/deps')
require('./gulptasks/servidor')

gulp.task('default', () => {
    // production é uma flag que você envia como parametro ao rodar gulp
    if (util.env.production) {
        // procura pelas tags nos arquivos importados e as executa
        // executa em serial
        sequence('deps', 'app')
    } else {
        sequence('deps', 'app', 'servidor')
    }
})