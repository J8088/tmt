'use strict';

module.exports = {
    db: 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost') + '/',

    dbOptions: {},
    hostname: 'http://localhost:3000',
    app: {
        name: 'Tmt'
    },
    logging: {
        format: 'combined'
    },
    strategies: {
        local: {
            enabled: true
        },
        landingPage: '/'
    },
    emailFrom: 'SENDER EMAIL ADDRESS',
    mailer: {
        service: 'SERVICE_PROVIDER',
        auth: {
            user: 'EMAIL_ID',
            pass: 'PASSWORD'
        }
    },
    secret: 'SOME_TOKEN_SECRET'
};
