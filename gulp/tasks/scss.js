import dartSass from 'sass';
import gulpSaas from 'gulp-sass';
import rename from 'gulp-rename';

const sass = gulpSaas(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(rename({ extname: ".min.css"}))
        .pipe(app.gulp.dest(app.path.build.css));
}