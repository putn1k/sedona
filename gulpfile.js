"use strict";

var gulp = require("gulp");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mincss = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var csscomb = require("gulp-csscomb");
var del = require("del");
var htmlmin = require("gulp-htmlmin");

var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src("build/**/*")
    .pipe(ghPages());
});

gulp.task("clean", function () {
  return del("build");
})

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.woff2",
    "source/img/**",
    "source/js/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("style", function() {
  return gulp.src("source/css/style.css")
  .pipe(postcss([
    autoprefixer()
  ]))
  .pipe(gulp.dest("build/css"))
  .pipe(csscomb())
  .pipe(gulp.dest("build/css"))
  .pipe(mincss())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest("build/css"));
});

gulp.task("image", function() {
  return gulp.src("source/img/**/*.{png,jpg,jpeg,svg}")
  .pipe (imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.mozjpeg({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "html",
  "style"
));
