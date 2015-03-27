'use strict';

module.exports = function(grunt) {

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	clean: {
		dist: {
			src: ['dist/*']
		}
	},
	jshint: {
		options: {
			globals: {
				console: true,
				module: true
			},
			"-W099": true,	//ignora tabs e space warning
			"-W033": true,
			"-W044": true	//ignore regexp
		},
		files: ['index.js']
	},

    browserify: {
      options: {
        browserifyOptions: {
           standalone: 'geojson-to-path'
        }
      },
      dist: {
        files: {
          'geojson-to-path.js': ['index.js'],
        }
      }
    }

});

grunt.registerTask('default', [
	'jshint',
	'browserify',
]);


grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-browserify');
};
