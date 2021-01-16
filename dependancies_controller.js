var DependancyService = require('./dependancies_service')

exports.getAll = async function (req, res) {
    // Validate request parameters
    var name = req.params.pkgName ? req.params.pkgName : 'forever';

    try {
        DependancyService.getAll(name,res).then(function () {
            res.send(JSON.stringify({ status: 200, data: res, message: "Succesfully pkg name Retrieved"}));
        }, function (error) {
            res.send(error);
        });

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}