var sort = require('./sort');
var expect = require('chai').expect;

function generateDescendingArray(size) {
  var result = [];
  for (var i = 0; i < size; i++) {
    result[i] = i;
  }
  return result;
}

function generateTestSuite(type) {
  describe('#' + type, function() {
    it('should not broke single element array', function() {
      var array = [1];

      sort[type](array);

      expect(array).to.eql([1]);
    });

    it('should sort small array', function() {
      var unsorted = [1, 2];
      var sorted = [2, 1];

      var result = sort[type](unsorted);

      expect(result).to.eql(sorted);
    });

    it('should sort medium array', function() {
      var unsorted = [1, 2, 3];
      var sorted = [3, 2, 1];

      var result = sort[type](unsorted);

      expect(result).to.eql(sorted);
    });

    it('should sort big array', function() {
      var unsorted = generateDescendingArray(100);
      var sorted = unsorted.slice().sort(function(a, b) {
        return b - a;
      });

      var result = sort[type](unsorted);

      expect(result).to.eql(sorted);
    });
  });
}

describe('sort.js', function() {
  for (type in sort) {
    generateTestSuite(type);
  }
});
