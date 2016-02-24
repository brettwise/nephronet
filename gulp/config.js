var dest = './build';
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  sass: {
    src: src + '/sass/*.{sass,scss}',
    watchAll: src + '/sass/**/*.{sass,scss}',
    dest: dest + '/css',
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images', // Used by the image-url helper
      errLogToConsole: true,
      sourceComments: 'normal'
    }
  },
  images: {
    src: src + '/images/**',
    dest: dest + '/images'
  },
  markup: {
    src: src + '/htdocs/**/*(!(*.jade|*.src|*map|layouts))',
    dest: dest
  },
  jade: {
    src: src + '/htdocs/*.jade',
    watchAll: src + '/htdocs/**/*.jade',
    dest: dest
  },
  js: {
    src: src + '/js/**/*.js',
    watchAll: src + '/js/**/*.js',
    dest: dest + '/js'
  },
  iconFonts: {
    name: 'Gulp Starter Icons',
    src: src + '/icons/*.svg',
    dest: dest + '/fonts',
    sassDest: src + '/sass',
    template: './gulp/tasks/iconFont/template.sass.swig',
    sassOutputName: '_icons.sass',
    fontPath: 'fonts',
    className: 'icon',
    options: {
      fontName: 'Post-Creator-Icons',
      appendCodepoints: true,
      normalize: false
    }
  },
  production: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/**/*.js',
    cssDest: dest + '/css',
    jsDest: dest + '/js',
    dest: dest
  }
};
