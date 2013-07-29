module.exports = function( grunt ) {
 
  grunt.initConfig({
  	uglify: {
	    example_target: {
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
    }, // uglify

    sass: {
		dev: {                             // Another target
			options: {                       // Target options
				style: 'expanded'
			},
			files: [
				{
					src: [
						'../source/_css/combined/**/*.scss'
					],
					dest: '../static/css/main.min.css'
				}
			]
		}
	}, // sass

    jshint: {
		all: ['../source/_js/combined/**/*.js']
	}, // jshing

	copy: {
	  libs_not_modify: {
	    files: [
			{
				expand: true,     // Enable dynamic expansion.
				cwd: '../source/_css/libs/',      // Src matches are relative to this path.
				src: ['**/*.css'], // Actual pattern(s) to match.
				dest: '../static/css/libs'
			},

			{
				expand: true,     // Enable dynamic expansion.
				cwd: '../source/_js/libs/',      // Src matches are relative to this path.
				src: ['**/*.js'], // Actual pattern(s) to match.
				dest: '../static/js/libs'
			}
	    ]
	  }
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', [ 'sass', 'uglify', 'copy' ]);
};