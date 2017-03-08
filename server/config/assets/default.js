'use strict';

module.exports = {
  client: {
    lib: {
      all: ['client/app/bower_components/**/*'],
      css: [
        // bower:css
        'client/app/bower_components/bootstrap/dist/css/bootstrap.css',
        'client/app/bower_components/bootstrap/dist/css/bootstrap-theme.css',
        'client/app/bower_components/angular-ui-notification/dist/angular-ui-notification.css'
        // endbower
      ],
      js: [
        // bower:js
        'client/app/bower_components/angular/angular.js',
        'client/app/bower_components/angular-animate/angular-animate.js',
        'client/app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'client/app/bower_components/ng-file-upload/ng-file-upload.js',
        'client/app/bower_components/angular-messages/angular-messages.js',
        'client/app/bower_components/angular-mocks/angular-mocks.js',
        'client/app/bower_components/angular-resource/angular-resource.js',
        'client/app/bower_components/angular-ui-notification/dist/angular-ui-notification.js',
        'client/app/bower_components/angular-ui-router/release/angular-ui-router.js',
        'client/app/bower_components/owasp-password-strength-test/owasp-password-strength-test.js',
        // endbower
      ],
      tests: ['client/app/bower_components/angular-mocks/angular-mocks.js']
    },
    css: [
      'client/app/**/{css,less,scss}/*.css'
    ],
    less: [
      'client/app/**/less/*.less'
    ],
    sass: [
      'client/app/scss/*.scss'
    ],
    js: [
      'client/app/**/*.js'
    ],
    img: [
      'client/app/modules/**/*/img/**/*.jpg',
      'client/app/modules/**/*/img/**/*.png',
      'client/app/modules/**/*/img/**/*.gif',
      'client/app/modules/**/*/img/**/*.svg'
    ],
    views: [
      'client/app/**/*.html'
    ],
    templates: ['build/templates.js']
  },
  server: {
    gulpConfig: ['gulpfile.js'],
    allJS: ['server/app.js', 'config/**/*.js', 'server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['server/routes.js'],
    sockets: 'server/sockets/**/*.js',
    config: ['server/config/*.js'],
    policies: 'server/policies/*.js',
    views: ['server/views/*.html']
  }
};
