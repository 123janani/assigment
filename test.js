const service = require('./dependancies_service.js')
const assert = require('assert')

it('correctly get result array', () => {
    assert.deepStrictEqual(service.getAllDependancies('test-pkg'), ['A','B','C']);
});
