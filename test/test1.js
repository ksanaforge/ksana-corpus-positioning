var assert = require('assert');
const data=require("../testdata/data");
const {aligntext}=require("../aligntext");
describe('', function() {
    it('should return -1 when the value is not present', function() {
      	aligntext(data.data1,data.data2)
    });
});