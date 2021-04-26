let mix = require('laravel-mix');
mix
    .js('src/app.js', 'dist')
    .sass('src/style.scss', '')
    .setPublicPath('dist')
    .copy('src/index.html', 'dist')
    mix.sass('src/app.scss', 'dist').options({
        processCssUrls: false
    });
    ;