module.exports = function(grunt) {
  'use strict';

  // Load grunt-compass plugin
  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-contrib');

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    // Project metadata, used by some directives, helpers and tasks.
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    // Lists of files to be concatenated, used by the "concat" task.
    concat: {
      plugins: {
        src: [
          '<banner:meta.banner>',
          'js/vendor/log.js',
          //'js/vendor/json.js',
          'js/modules/**/*.js'
        ],
        dest: 'js/modules.js'
      },
      prod: {
        src: [
          '<config:concat.plugins.dest>',
          'js/plugins.js',
          'js/main.js'
        ],
        dest: 'js/main-<%= pkg.version %>.js'
      }
    },
    // Lists of files to be minified with UglifyJS, used by the "min" task.
    min: {
      prod: {
        src: ['<banner:meta.banner>', '<config:concat.prod.dest>'],
        dest: 'js/main-<%= pkg.version %>.min.js'
      }
    },
    // Lists of files or URLs to be unit tested with QUnit, used by the "qunit" task.
    qunit: {
      all: ['js/test/**/*.html']
    },
    lint: {
      //files: ['grunt.js', 'src/**/*.js', 'test/**/*.js'],
      src: ['js/plugins.js', 'js/main.js' ],
      grunt: ['grunt.js'],
      tests: ['tests/**/*.js']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: false,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      src: {
        globals: {
          jQuery: true,
          Modernizr: true,
          Hyphenator: true
        }
      },
      grunt: {
        options: { node: true },
        globals: { module: true }
      },
      tests: {
        options: { jquery: true },
        globals: {
          jQuery: true,
          Modernizr: true
        }
      }
    },
    // grunt-contrib
    coffee: {
      compile: {
        files: {
          'js/main.js': 'js/coffee/main.coffee',
          'js/plugins.js': 'js/coffee/plugins.coffee'
        },
        //dest: 'js',
        options: {
          bare: true
        }
      }
    },
    compass: {
      dev: {
        src: 'sass',
        dest: 'css/dev',
        linecomments: true,
        forcecompile: false,
        debugsass: false,
        images: 'img'
      },
      prod: {
        src: 'sass',
        dest: 'css/prod',
        outputstyle: 'compressed',
        linecomments: false,
        forcecompile: true,
        debugsass: false,
        images: 'img'
      }
    },
    compress: {
      gzip: {
        options: {
          mode: "gzip"
        },
        files: {
          "js/main-<%= pkg.version %>.min.js.gz": "js/main-<%= pkg.version %>.min.js",
          "css/prod/main.css.gz": "css/prod/main.css"
        }
      }
    },
    // Configuration options for the "watch" task.
    watch: {
      //files: ['grunt.js', 'js/plugins/**/*.js', 'js/main.js', 'js/plugins.js', 'sass/**/*.scss'],
      dev: {
        files: ['grunt.js', 'js/plugins/**/*.js', 'js/coffee/*.coffee', 'sass/**/*.scss'],
        tasks: ['compass:dev', 'coffee', 'lint']
      },
      prod: {
        files: ['grunt.js', 'js/plugins/**/*.js', 'js/coffee/*.coffee', 'sass/**/*.scss'],
        tasks: ['compass:prod', 'coffee', 'lint', 'concat', 'min', 'compress']
      }
    }
  });

  grunt.registerTask('dev', 'compass:dev coffee lint');
  grunt.registerTask('prod', 'compass:prod coffee lint concat min compress');

  // Default task.
  grunt.registerTask('default', 'watch:dev');
};