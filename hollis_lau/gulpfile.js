const gulp = require("gulp");
const eslint = require("gulp-eslint");
const mocha = require("gulp-mocha");

var files = ["index.js", "lib/**/*.js", "bin/*", "gulpfile.js"];

gulp.task("lint:test", () => {
  return gulp.src("./test/**/*test.js")
    .pipe(eslint({
      envs: [
        "mocha"
      ],
      useEslintrc: true
    }))
    .pipe(eslint.format());
});

gulp.task("lint:nontest", () => {
  return gulp.src(files)
    .pipe(eslint({
      useEslintrc: true
    }))
    .pipe(eslint.format());
});

gulp.task("test", () => {
  return gulp.src("./test/greet_test.js")
    .pipe(mocha({
      "reporter": "nyan"
    }));
});

gulp.task("lint", ["lint:nontest", "lint:test"]);

gulp.task("watch", () => {
  gulp.watch(files, ["lint"]);
  gulp.watch("./lib/greet.js", ["test"]);
});

gulp.task("default", ["lint", "test", "watch"]);
