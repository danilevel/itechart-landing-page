import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        css: './dist/css/',
        files: './dist/files/',
        html: './dist/'
    },
    src: {
        scss: './src/scss/*.scss',
        html: './src/*.html',
        files: './src/files/**/*.*'
    },
    watch: {
        scss: './src/scss/**/*.scss',
        html: './src/html/**/*.html',
        files: './src/files/**/*.*'
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}