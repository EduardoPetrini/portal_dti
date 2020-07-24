const systemService = require('../services/system.service');

exports.home = async function (req, res) {
    res.render('pages/home', {
        systemList: systemService.list()
    })
}