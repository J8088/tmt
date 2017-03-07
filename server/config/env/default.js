'use strict';

var path = require('path');
var rootPath = path.join(__dirname, '/../../..');

module.exports = {
    root: rootPath,
    http: {
        port: process.env.PORT || 5000
    },
    https: {
        port: false,

        ssl: {
            key: '',
            cert: '',
            ca: ''
        }
    },
    hostname: process.env.HOST || process.env.HOSTNAME,
    db: process.env.MONGOHQ_URL,
    templateEngine: 'swig',

    sessionSecret: 'tmt',

    sessionCollection: 'sessions',

    // The session cookie settings
    sessionCookie: {
        path: '/',
        httpOnly: true,
        secure: false,
        maxAge: null
    },
    public: {
        languages: [{
            locale: 'en',
            direction: 'ltr'
        }, {
            locale: 'he',
            direction: 'rtl'
        }],
        currentLanguage: 'en',
        loginPage: '/auth/login',
        cssFramework: 'bootstrap'
    },
    clusterSticky: false,
    stickyOptions: {
        proxy: false,
        header: 'x-forwarded-for',
        num: (process.env.CPU_COUNT || require('os').cpus().length) - 1
    },
    sessionName: 'connect.sid',
    bodyParser: {
        json: {limit: '100kb'},
        urlencoded: {limit: '100kb', extended: true}
    }
};
