'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        webpack: {
            client: {
                entry: __dirname + '/assets/js/index.jsx',
                output: {
                    path: __dirname + '/assets/js',
                    file: 'bundle.js'
                },
                module: {
                    loaders: [{
                            test: /\.jsx$/,
                            loader: 'jsx-loader'  
                        }]
                } 
            }
        },

        copy: {
            html: {
                cwd: 'app/',
                expand: true,
                flatten: false,
                src: '**/*.html',
                dest: 'build/',
                filter: 'isFile'
            }
        }
                            
    });

    grunt.registerTask('build:dev', ['webpack:client' /*, 'copy:html'*/]);
    grunt.registerTask('build', ['build:dev']);
    grunt.registerTask('default', ['build']);

};