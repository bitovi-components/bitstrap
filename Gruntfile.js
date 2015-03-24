var path = require("path");
var isCI = process.env.CI === 'true';

module.exports = function (grunt) {

	grunt.loadNpmTasks('steal-tools');
	grunt.loadNpmTasks('testee');

	grunt.initConfig({
		testee: {
			options: {
				reporter: 'Spec'
			},
			local: {
				options: {
					browsers: ['chrome']
				},
				src: ['test/test.html']
			},
			ci: {
				options: {
					browsers: ['firefox']
				},
				src: ['test/test.html']
			}
		},
		"steal-export": {
			dist: {
				system: {
					config: "package.json!npm"
				},
				outputs: {
					"+cjs": {},
					"+amd": {},
					"+global-js": {},
					"+global-css": {}
				}
			}
		}
	});
	grunt.registerTask('build',['steal-export']);
	grunt.registerTask('test', [ isCI ? 'testee:ci' : 'testee:local' ]);
};
