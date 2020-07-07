var gulp = require('gulp');
const connect = require("gulp-connect");

const port = 5000;
const buildDir = 'dist_tailwindcss';

const paths = {
  css: {
    src: 'src/css/**/*.css',
    entrypoint: 'src/css/styles.css',
    dest: `${buildDir}/css`
  },
  // html: {
  //   src: 'src/**/*.html',
  //   dest: `${buildDir}/`
  // },
  images: {
    src: 'src/images/**/*',
    dest: `${buildDir}/images/`
  }

}
const css = () => {
  const postcss = require('gulp-postcss')

  return gulp.src(paths.css.entrypoint)
    .pipe(postcss([
      require('tailwindcss'),
      require('autoprefixer'),
    ]))
    .pipe(gulp.dest(paths.css.dest))
    .pipe(connect.reload());
}

const html = () => {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(connect.reload());
}

const images = () => {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest))
    .pipe(connect.reload());
}

const build = gulp.parallel(css, images);

const server = () => {
  return connect.server({
    port: 5000,
    root: buildDir,
    livereload: true
  })
}

const watchReload = () => {
  gulp.watch(paths.css.src, css);
  // gulp.watch(paths.html.src, html);
  gulp.watch(paths.images.src, images);
}

exports.css = css;
// exports.html = html;
exports.default = gulp.parallel(build, server, watchReload);