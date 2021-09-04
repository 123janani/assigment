//const request = require('request');
const axios = require("axios");

const getDependancies = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://registry.npmjs.org/" + name + "/latest",
        headers: {
          Cookie: "__cfduid=d2b637b83b7da87354473e80e64b396981610719508",
        },
      });
      resolve(response);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

const getAll = async (req, res) => {
  // Validate request parameters
  let name = req ? req.params.pkgName : "forever";

  let finalArr = [];

  try {
    let arr = await getDependancies(name);

    var temp = [];

    finalArr = arr.data.dependencies
      ? Object.keys(arr.data.dependencies)
      : null;

    console.log("finalArr", finalArr, finalArr.length);

    res.status(200).json(finalArr);
  } catch (e) {
    res.status(500).json({ status: 500, message: e.message });
  }
};

module.exports = {
  getAll,
};
