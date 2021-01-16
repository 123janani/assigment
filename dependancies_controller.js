var DependancyService = require('./dependancies_service')

exports.getAll = async function (req, res) {
    // Validate request parameters
    var name = req ? req.params.pkgName : 'forever';

    try {
        var arr = DependancyService.getAll(name);
        console.log(arr);
        return res.send(JSON.stringify({ status: 200, data: arr, message: "Succesfully pkg name Retrieved"}));
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}