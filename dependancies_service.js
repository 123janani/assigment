const request = require('request');
const dependancies_service = require("./dependancies_service");


exports.getAllDependancies = async function (name) {
    var dep;
    var finalArr = [];
    let options = {
        'method': 'GET',
        'url': 'http://registry.npmjs.org/'+ name +'/latest',
        'headers': {
            'Cookie': '__cfduid=d2b637b83b7da87354473e80e64b396981610719508'
        }
    };
    request(options, (error, response) => {

        try {
            dep = JSON.parse(response.body) ? JSON.parse(response.body) : '';

            //all dep. in user entered package
            var temp =[];

            if(dep.dependencies){
                temp = Object.keys(dep.dependencies);
                for(var i=0;i<temp.length;i++) {
                    dependancies_service.getAllDependancies(temp[i]);
                }
            }else {
                if (!(finalArr.includes(name))) {
                    finalArr.push(name);
                }
            }
            return finalArr;
        } catch (error) {
            console.error(error);
        }
    });
};

exports.getAll = function (name,res) {
    dependancies_service.getAllDependancies(name).then(result => {
        res.send(result);
    });
};
