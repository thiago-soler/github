module.exports = function( grunt ) {
 
  grunt.initConfig({
  	uglify: {
	    my_target: {
			files:
	        // '../static/js/output.min.js': ['../source/_js/modules/moduleOne.js']
	      

			[
				{
					expand: true,     // Enable dynamic expansion.
					cwd: '../source/_js/modules/',      // Src matches are relative to this path.
					src: ['**/*.js'], // Actual pattern(s) to match.
					dest: '../static/js/',   // Destination path prefix.
					ext: '.min.js',   // Dest filepaths will have this extension.
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