const systemService = require('../services/system.service');

exports.vitrine = async function (req, res) {
    res.render('pages/vitrine', {
        systemList: systemService.list()
    });
}
