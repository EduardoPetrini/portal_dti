

const SystemClass = require('../models/SystemDAO');
const moment = require('moment');

exports.list = function () {
    const SystemDAO = new SystemClass();
    return SystemDAO.list();
}

exports.insert = function (system) {
    const SystemDAO = new SystemClass();
    let last = SystemDAO.last()[0];
    system.id = last ? last.id + 1 : 1;
    system.date = moment().format('DD/MM/YYYY HH:mm');
    SystemDAO.insert(system);

    return system;
}