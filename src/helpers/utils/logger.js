const winston = require('winston');

const logger = winston.createLogger({
    transports: [ new winston.transports.Console({
        level: 'info',
        handleExceptions: true,
        json: false,
        colorize: true
    }) ],
    exitOnError: false
});

const log = (message, level) => {
    logger.log(level, message);
}

module.exports = {
    log,
}