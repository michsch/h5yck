module.exports = function(grunt) {
  "use strict";

  var appDir, useRequireJs, tasks, gruntConfig, pkg, requireConfig;

  /* get package JSON file */
  pkg = grunt.file.readJSON('package.json');

  appDir = '';

  useRequireJs = true;

  /**
   * define tasks
   */
  tasks = {
    files: [
      'Gruntfile.js',
      appDir + 'js/coffee/**/*.coffee',
      appDir + 'sass/**/*.scss'
    ],
    d: 'dev', // default task
    dev: {
      name: 'dev',
      tasks: [
        'clean:dev',
        'compass:dev',
        'coffee',
        'jshint',
        'concat:dev'
      ]
    },
    prod: {
      name: 'prod',
      tasks: [
        'clean:prod',
        'compass:prod',
        'coffee',
        'jshint',
        'concat',
        'uglify:prod',
        'compress'
      ]
    },
    comments: {
      name: 'comments',
      tasks: [ 'string-replace:comments' ]
    }
  };

  /**
   * set some other tasks if require.js should be used
   */
  if (useRequireJs === true) {
    tasks.dev.tasks = [
      'compass:dev',
      'coffee',
      'jshint'
    ];
    tasks.prod.tasks = [
      'clean:prod',
      'compass:prod',
      'coffee',
      'jshint',
      'requirejs:project',
      'uglify:require',
      'compress'
    ];
  }

  /* only add yamlPrefix replace task if prefix is not ym- */
  if ( pkg.yamlPrefix !== 'ym-' ) {
    tasks.dev.tasks.push( 'string-replace:yamlPrefix' );
    tasks.prod.tasks.push( 'string-replace:yamlPrefix' );
  }

  /* if task contains no watch files use the global definition in tasks.files */
  tasks.dev.files = tasks.dev.files || tasks.files;
  tasks.prod.files = tasks.prod.files || tasks.files;

  requireConfig = {
    paths: {
      configuration: 'require-main',
      requireLib: './vendor/require',
      domReady: './module/domReady',
      almond: './vendor/almond',
      modernizr: './vendor/modernizr-2.6.2.min',
      underscore: './vendor/underscore',
      jquery: 'empty:',
      pubsub: './module/pubsub',
      hyphenator: './module/hyphenator/Hyphenator'
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
      'module/underscore-mixins': ['underscore'],
      'plugin/jquery.accessifyhtml5': ['jquery'],
      'plugin/jquery.hoverIntent': ['jquery'],
      'plugin/jquery.fancybox': ['jquery'],
      'plugin/jquery.syncheight': ['jquery'],
      'plugin/jquery.tabs': ['jquery'],
      'plugin/jquery.sisyphus': ['jquery'],
      'plugin/jquery.smartresize': ['jquery'],
      'plugin/jquery.validate': ['jquery'],
      'plugin/jquery.validate.js.additional-methods': ['jquery', 'plugin/jquery.validate']
    }
  };

  /* Grunt configuration object */
  gruntConfig = {
    pkg: pkg,
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
    clean: {
      dev: [
        'js/dev/modules.js',
        'js/dev/plugins.js',
        'js/dev/**/*.map'
      ],
      prod: [
        'css/prod',
        'js/dev/modules.js',
        'js/dev/plugins.js',
        'js/**/*.map',
        'js/prod'
      ]
    },
    compass: {
      dev: {
        options: {
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
        }
      },
      prod: {
        options: {
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
      }
    },
    coffee: {
      options: {
        bare: true
      },
      all: {
        expand: true,
        cwd: appDir + 'js/coffee/',
        src: [
          '**/*.coffee',
          '!**/_nu/**/*.coffee'
        ],
        dest: appDir + 'js/dev/',
        rename: function( destPath, srcPath ) {
          var dest;
          dest = destPath + srcPath.replace(/\.coffee$/,".js");
          return dest;
        },
        //ext: '.js',
        options: {
          sourceMap: true
        }
      }
    },
    'string-replace': {
      comments: {
        files: {
          './': [ 'sass/*.scss', 'js/coffee/**/*.coffee' ]
        },
        options: {
          replacements: [{
            pattern : /@version( *)(?:\$.*)/ig,
            replacement : '@version$1$$<%= pkg.version %>$'
          }, {
            pattern : /@author( *)(?:.*)/ig,
            replacement : '@author$1<%= pkg.author.name %>'
          }, {
            pattern: /\/\*\! (?:[\w\d \.\-\_\$\+]+)(?: \- )(?:[\w\d\s\S])*\*\/(?:.*\s *\s)/i,
            replacement: '<%= meta.banner %>'
            //replacement: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + date.fullDate
          }]
        }
      },
      yamlPrefix: {
        files: {
          './': [ 'css/dev/**/*.css', 'css/prod/**/*.css' ]
        },
        options: {
          replacements: [{
            pattern     : /\.ym-/ig,
            replacement : '.<%= pkg.yamlPrefix %>'
          }]
        }
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
        //appDir + 'js/dev/*.js'
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
            //appDir + 'js/dev/module/*.js',
            '!' + appDir + 'js/dev/module/external.js'
          ]
        }
      },
      plugins: {
        files: {
          src: [
            // only lint own plugin files
            appDir + 'js/dev/plugin/jquery.accessifyhtml5.js',
            appDir + 'js/dev/plugin/jquery.msslider.js',
            appDir + 'js/dev/plugin/jquery.smartresize.js',
            appDir + 'js/dev/plugin/plugins.js'
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
          name: 'require-main',
          baseUrl: appDir + 'js/dev',
          mainConfigFile: appDir + 'js/dev/require-main.js',
          out: appDir + 'js/prod/require-main-<%= pkg.version %>.js',
          useStrict: true,
          //optimize: 'uglify2',
          optimize: 'none',
          //generateSourceMaps: true,
          //preserveLicenseComments: false,
          //useSourceUrl: true,
          paths: requireConfig.paths,
          shim: requireConfig.shim,
          include: [
            //'requireLib',
            'almond',
            'domReady'
          ]
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
          fileExclusionRegExp: /(^\.)|(^coffee)|(^old)|(^_nu)|(^main\.js)|(\.map)/,
          removeCombined: true,
          paths: requireConfig.paths,
          shim: requireConfig.shim,
          modules: [
            {
              name: 'require-main',
              include: [
                //'requireLib',
                'almond',
                'domReady'
              ],
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
          'js/dev/plugins.js' : [
            appDir + 'js/dev/plugin/fancybox/jquery.fancybox.js',
            appDir + 'js/dev/plugin/*.js'
          ],
          'js/dev/modules.js' : [
            appDir + 'js/dev/module/*.js'
          ]
        }
      },
      prod: {
        files: {
          'js/prod/main-<%= pkg.version %>.js' : [
            appDir + 'js/dev/plugins.js',
            appDir + 'js/dev/modules.js',
            appDir + 'js/dev/main.js'
          ]
        }
      }
    },
    uglify: {
      prod: {
        options : {
          banner: '<%= meta.banner %>'
        },
        files: {
          'js/prod/plugins.min.js' : [ appDir + 'js/dev/plugins.js' ],
          'js/prod/modules.min.js' : [ appDir + 'js/dev/modules.js' ],
          'js/prod/main-<%= pkg.version %>.min.js' : [ appDir + 'js/prod/main-<%= pkg.version %>.js' ]
        }
      },
      require: {
        options : {
          banner: '<%= meta.banner %>'
        },
        files: {
          'js/prod/require-main-<%= pkg.version %>.min.js' : [ appDir + 'js/prod/require-main.js' ]
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
          { src: [ appDir + 'css/prod/main.css' ], dest: appDir + 'css/prod/main.css' }
        ]
      },
      jsmain: {
        options: {
          mode: 'gzip',
          archive: appDir + 'js/prod/main-<%= pkg.version %>.min.js.gz'
        },
        files: [
          { src: [ appDir + 'js/prod/main-<%= pkg.version %>.min.js' ], dest: appDir + 'js/prod/main-<%= pkg.version %>.min.js' }
        ]
      }
    },
    watch: {
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
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  //grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-string-replace');

  /* register all defined tasks */
  var t;
  for ( t in tasks ) {
    if ( typeof tasks[t] === 'object' && tasks[t].name) {
      /* register normal tasks */
      grunt.registerTask( tasks[t].name, tasks[t].tasks );
    } else if ( typeof tasks[t] === 'string' && t === 'd' ) {
      /* register default task */
      grunt.registerTask( 'default', 'watch:' + tasks[t] );
    }
  }

  /*
  grunt.registerTask(tasks.dev.name, tasks.dev.tasks);
  grunt.registerTask(tasks.prod.name, tasks.prod.tasks);
  grunt.registerTask(tasks.comments.name, tasks.comments.tasks);
  */

  // Default task.
  //grunt.registerTask('default', 'watch:' + tasks.dev.name);
};