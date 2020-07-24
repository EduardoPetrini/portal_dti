const systemService = require('../services/system.service');

exports.register = function (req, res) {
    res.render('pages/cadastrar', {
        dangers: res.locals.dangers || [],
        success: res.locals.success || []
    });
}

exports.save = function (req, res) {
    console.log(`[INFO] Saving a system`);
    let system = req.body;
    if (!system || !system.name || !system.domain || !system.embed || !system.type) {
        res.locals.dangers = ['All fields should be filled'];
        return exports.register(null, res);
    }

    systemService.insert(system);
    res.locals.success = ['System inserted with sucess'];
    return exports.register(null, res);
}