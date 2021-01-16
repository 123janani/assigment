const request = require('request');
const dependancies_service = require("./dependancies_service");
var finalArr = [];

exports.getAllDependancies = async function (name) {
    var dep;
    let options = {
        'method': 'GET',
        'url': 'http://registry.npmjs.org/'+ name +'/latest',
        'headers': {
            'Cookie': '__cfduid=d2b637b83b7da87354473e80e64b396981610719508'
        }
    };
    request(options, (error, response) => {

        try {
            dep = response ? JSON.parse(response.body) : '';

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
            return
        } catch (error) {
            console.error(error);
        }
    });
};

exports.getAll = (name) =>{
    dependancies_service.getAllDependancies(name).then(() => {
        return finalArr;
    });
};
