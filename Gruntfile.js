module.exports = function (grunt) {

    // initConfig  configuration  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: ['app.js', 'utility/utility.js', 'routes/app-router.js'],
                dest: 'dist/built_<%= pkg.name %>.js',
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['app.js', 'utility/utility.js', 'routes/app-router.js'],
                dest: 'concat/<%= pkg.name %>.js'
            }
        },
        qunit: {
            files: ['test/*.html']
        },

        clean: {
            src: ['concat','uglify']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // "grunt default task
    grunt.registerTask('default', ['uglify', 'concat','qunit']);
};











// module.exports = function (grunt) {
//     // Project configuration.
//     grunt.initConfig({
//         concat: {
//             options: {
//                 separator: ';',
//             },
//             dist: {
//                 src: ['app.js', 'utility/utility.js', 'routes/app-router.js'],
//                 dest: 'dist/built.js',
//             },
//         },
//         watch: {
//             js: {
//               files: [
//                 '<%= jshint.all %>'
//               ],
//               tasks: ['concat','jshint','uglify']
//             }
//           },
//           clean: {
//             dist: [
//               'assets/js/scripts.min.js'
//             ]
//           }
//     });
// }

// grunt.registerTask('dev', [
//     'watch'
// ]);
