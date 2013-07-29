module.exports = function( grunt ) {
 
  grunt.initConfig({
  	uglify: {
	    my_target: {
			files:
	        [
				{
					expand: true,
					cwd: '../source/_js/modules/',
					src: ['**/*.js'],
					dest: '../static/js/',
					ext: '.min.js',
				},

				{
					src: [
						'../source/_js/combined/**/*.js'
					],
					dest: '../static/js/scripts.min.js'
				}
			]
	    }
    },
    jshint: {
		all: ['../source/_js/combined/**/*.js']
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', [ 'uglify' ]);
};