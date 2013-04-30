({
  appDir: 'js/dev',
  baseUrl: '.',
  dir: 'js/prod',
  useStrict: true,
  optimize: 'uglify2',
  //optimize: 'none',
  //generateSourceMaps: true,
  //preserveLicenseComments: false,
  //useSourceUrl: true,
  preserveLicenseComments: false,
  fileExclusionRegExp: /(^\.)|(^coffee)|(^old)|(^_nu)|(^main\.js)|(\.map)/,
  removeCombined: true,
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
  },
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
})