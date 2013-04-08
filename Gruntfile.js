module.exports = function(grunt) {
  "use strict";

  var appDir, useRequireJs, tasks, gruntConfig;

  appDir = '';

  // define tasks
  useRequireJs = true;
  tasks = {
    files : [
      'Gruntfile.js',
      appDir + 'js/coffee/**/*.coffee',
      appDir + 'sass/**/*.scss'
    ]
  };

  if (useRequireJs === true) {
    tasks.dev = {
      name: 'dev',
      tasks: [
        'compass:dev',
        'coffee',
        'jshint'
      ]
    };
    tasks.prod = {
      name: 'prod',
      tasks: [
        'compass:prod',
        'coffee',
        'jshint',
        'requirejs:project',
        'uglify',
        'compress'
      ]
    };
  } else {
    tasks.dev = {
      name: 'dev',
      tasks: [
        'compass:dev',
        'coffee',
        'jshint',
        'concat:dev'
      ]
    };
    tasks.prod = {
      name: 'prod',
      tasks: [
        'compass:prod',
        'coffee',
        'jshint',
        'concat',
        'uglify',
        'compress'
      ]
    };
  }

  if (tasks.dev.files === void 0) {
    tasks.dev.files = tasks.files;
  }
  if (tasks.prod.files === void 0) {
    tasks.prod.files = tasks.files;
  }

  // Project configuration.
  gruntConfig = {
    //pkg: '<json:package.json>',
    pkg: grunt.file.readJSON('package.json'),
    // Project metadata, used by some directives, helpers and tasks.
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") + "\\n" %>' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
    },
    // Lists of files or URLs to be unit tested with QUnit, used by the "qunit" task.
    qunit: {
      all: [ appDir + 'js/test/**/*.html' ]
    },
    compassKahlil: {
      dev: {
        src: appDir + 'sass',
        dest: appDir + 'css/dev',
        outputstyle: 'expanded',
        linecomments: true,
        forcecompile: false,
        debugsass: true,
        images: appDir + 'img'
      },
      prod: {
        src: appDir + 'sass',
        dest: appDir + 'css/prod',
        outputstyle: 'compressed',
        linecomments: false,
        forcecompile: true,
        debugsass: false,
        images: appDir + 'img'
      }
    },
    compass: {
      dev: {
        sassDir: appDir + 'sass',
        cssDir: appDir + 'css/dev',
        imagesDir: appDir + 'img',
        javascriptDir: appDir + 'js',
        fontsDir: appDir + 'fonts',
        environment: 'development',
        outputStyle: 'expanded',
        noLineComments: false,
        force: false,
        debugInfo: true
      },
      prod: {
        sassDir: appDir + 'sass',
        cssDir: appDir + 'css/prod',
        imagesDir: appDir + 'img',
        javascriptDir: appDir + 'js',
        fontsDir: appDir + 'fonts',
        environment: 'production',
        outputStyle: 'compressed',
        noLineComments: true,
        force: true,
        debugInfo: false
      }
    },
    coffee: {
      compile: {
        options: {
          bare: true
        }
      },
      options: {
        bare: true
      },
      glob_to_multiple: {
        expand: true,
        cwd: appDir + 'js/coffee/',
        src: [ '**/*.coffee' ],
        dest: appDir + 'js/dev/',
        rename: function( destPath, srcPath ) {
          var dest;
          dest = destPath + srcPath.replace(/\.coffee$/,".js");

          return dest;
        }
        //ext: '.js'
      }
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
        browser: true,
        globals: {
          define: true,
          require: true,
          exports: true,
          module: true,
          jQuery: true,
          Modernizr: true,
          Hyphenator: true,
          _: true
        }
      },
      grunt: {
        options: {
          node: true,
          strict : true,
          globals: {
            module: true
          }
        },
        files: {
          src: ['Gruntfile.js']
        }
      },
      all: [
        appDir + 'js/dev/*.js'
        //appDir + 'js/dev/module/*.js'

      ],
      modules: {
        options: {
          devel: true,
          globals: {
            log: true,
            console: true
          }
        },
        files: {
          src: [
            appDir + 'js/dev/module/*.js',
            '!' + appDir + 'js/dev/module/external.js'
          ]
        }
      },
      plugins: {
        files: {
          src: [
            // only lint own plugin files
            appDir + 'js/dev/plugin/plugins.js',
            appDir + 'js/dev/plugin/jquery.accessifyhtml5.js'
          ]
        }
      },
      tests: {
        options: {
          jquery: true,
          globals: {
            jQuery: true,
            Modernizr: true
          }
        },
        files: {
          src: [ appDir + 'tests/**/*.js' ]
        }
      }
    },
    requirejs: {
      single: {
        options: {
          name: 'main',
          baseUrl: '.',
          mainConfigFile: appDir + 'js/dev/main.js',
          out: appDir + 'js/prod/main-<%= pkg.version %>.min.js',
          useStrict: true,
          optimize: 'uglify2',
          //optimize: 'none',
          //generateSourceMaps: true,
          //preserveLicenseComments: false,
          //useSourceUrl: true,
          paths: {
            requireLib: './vendor/require',
            //jquery: './vendor/jquery-1.9.0.min',
            jquery: 'empty:',
            underscore: './vendor/underscore'
          },
          include: ['requireLib']
        }
      },
      project: {
        options: {
          //almond: true,
          appDir: appDir + 'js/dev',
          baseUrl: '.',
          dir: appDir + 'js/prod',
          useStrict: true,
          optimize: 'uglify2',
          //optimize: 'none',
          //generateSourceMaps: true,
          //preserveLicenseComments: false,
          //useSourceUrl: true,
          preserveLicenseComments: false,
          fileExclusionRegExp: /(^\.)|(^coffee)|(^old)/,
          paths: {
            configuration: 'main',
            requireLib: './vendor/require',
            domReady: './module/domReady',
            modernizr: './vendor/modernizr-2.6.2.min',
            underscore: './vendor/underscore',
            jquery: 'empty:',
            pubsub: './module/pubsub',
            hyphenator: './module/hyphenator/Hyphenator',
            waypoints: './plugin/jquery.waypoints'
          },
          shim: {
            modernizr: {
              exports: 'Modernizr'
            },
            underscore: {
              exports: '_'
            },
            hyphenator: {
              exports: 'Hyphenator'
            },
            'plugin/jquery.accessifyhtml5': ['jquery'],
            'plugin/jquery.hoverIntent': ['jquery'],
            'plugin/jquery.fancybox': ['jquery'],
            'plugin/jquery.syncheight': ['jquery'],
            'plugin/jquery.tabs': ['jquery'],
            'plugin/jquery.sisyphus': ['jquery'],
            'plugin/jquery.smartresize': ['jquery'],
            'plugin/jquery.validate': ['jquery'],
            'plugin/jquery.validate.js.additional-methods': ['jquery', 'plugin/jquery.validate'],
            'plugin/jquery.ddfapplication': ['jquery'],
            'plugin/jquery.photoZoom' : ['jquery'],
            'plugin/jquery.waypoints' : ['jquery'],
            'plugin/jquery.waypoints-infinite' : ['jquery', 'waypoints']
          },
          modules: [
            {
              name: 'main',
              //include: ['requireLib'],
              override : {
                optimize: 'none'
              }
            }
          ]
        }
      }
    },
    // Lists of files to be concatenated, used by the "concat" task.
    concat: {
      options : {
        banner: '<%= meta.banner %>'
      },
      dev: {
        files: {
          'js/dev/plugins.js' : [ appDir + 'js/dev/plugin/*.js' ],
          'js/dev/modules.js' : [ appDir + 'js/dev/module/*.js' ]
        }
      },
      prod: {
        files: {
          'js/prod/main-<%= pkg.version %>.js' : [ appDir + 'js/dev/plugins.js', appDir + 'js/dev/modules.js', appDir + 'js/dev/main.js' ]
        }/*
        src: [
          '',
          'js/plugins.js',
          'js/main.js'
        ],
        dest: 'js/main-<%= pkg.version %>.js'*/
      }
    },
    // Lists of files to be minified with UglifyJS, used by the "min" task.
    uglify: {
      prod: {
        options : {
          banner: '<%= meta.banner %>'
        },
        files: {
          'js/prod/plugins.js' : [ appDir + 'js/dev/plugins.js' ],
          'js/prod/modules.js' : [ appDir + 'js/dev/modules.js' ],
          'js/prod/main-<%= pkg.version %>.min.js' : [ appDir + 'js/prod/main-<%= pkg.version %>.js' ]
        }
      }
    },
    cssmin: {
      css: {
        src: ['<banner:meta.banner>', appDir + 'css/dev/test.css'],
        dest: appDir + 'css/prod/test.css'
      }
    },
    compress: {
      cssmain: {
        options: {
          mode: 'gzip',
          archive: appDir + 'css/prod/main.css.gz'
        },
        files: [
          { src: [ appDir + 'css/prod/main.css' ], dest: appDir + 'css/prod/' }
        ]
      },
      jsmain: {
        options: {
          mode: 'gzip',
          archive: appDir + 'js/prod/main-<%= pkg.version %>.min.js.gz'
        },
        files: [
          { src: [ appDir + 'js/prod/main-<%= pkg.version %>.min.js' ], dest: appDir + 'js/prod/' }
        ]
      }
    },
    // Configuration options for the "watch" task.
    watch: {
      //files: ['Gruntfile.js', 'js/plugins/**/*.js', 'js/main.js', 'js/plugins.js', 'sass/**/*.scss'],
      dev: {
        files: tasks.dev.files,
        tasks: tasks.dev.tasks
      },
      prod: {
        files: tasks.prod.files,
        tasks: tasks.prod.tasks
      }
    }
  };

  grunt.initConfig( gruntConfig );

    // Load grunt-compass plugin
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  //grunt.loadNpmTasks('grunt-requirejs');

  grunt.registerTask(tasks.dev.name, tasks.dev.tasks);
  grunt.registerTask(tasks.prod.name, tasks.prod.tasks);

  // Default task.
  grunt.registerTask('default', 'watch:' + tasks.dev.name);
};