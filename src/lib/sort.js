function averageValue(array) {
  return array.reduce(function(acc, value) {
    return acc + value;
  }) / array.length;
}

function swapElements(array, i, j) {
  var t = array[i];
  array[i] = array[j];
  array[j] = t;
}

function bubbleSort(array) {
  var t, i, j, len = array.length;
  for (i = 0; i < len; i++) {
    for (j = 0; j < len; j++) {
      if (array[j] < array[j + 1]) {
        swapElements(array, j, j + 1);
      }
    }
  }

  return array;
}

function insertSort(array) {
  var i, j, len = array.length;
  for (i = 1; i < len; i++) {
    var key = array[i];
    for (j = i - 1; j >= 0; j--) {
      if (array[j] > key) {
        break;
      }

      array[j + 1] = array[j];
      array[j] = key;
    }
  }

  return array;
}

function randomMedianSelector(array, from, to) {
  return from + Math.floor(Math.random() * (to - from));
}

function fixedMedianSelector(array, from, to) {
  return from + Math.floor((to - from) / 2);
}

function quickSort(array, medianSelector) {
  function quickSortRecursive(from, to) {
    if (to - from < 1) {
      return;
    }

    var medianIndex = medianSelector(array, from, to);
    var median = array[medianIndex];
    var i = from, j = to;

    while (i < j) {
      while (array[i] > median) i++;
      while (array[j] < median) j--;
      if (i < j) {
        swapElements(array, i, j);
        i++;
        j--;
      }
    }

    quickSortRecursive(from, medianIndex);
    quickSortRecursive(medianIndex + 1, to);
  }

  quickSortRecursive(0, array.length - 1);
  return array;
}

module.exports = {
  bubbleSort: bubbleSort,
  quickSortAverageMedian: function(array) {
    return quickSort(array, randomMedianSelector);
  },

  quickSortRandomMedian: function(array) {
    return quickSort(array, randomMedianSelector);
  },

  quickSortFixedMedian: function(array) {
    return quickSort(array, fixedMedianSelector);
  },

  shellsSort: bubbleSort,
  selectionSort: bubbleSort,
  insertionSort: insertSort,
};
