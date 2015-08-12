var MinHeap = function() {
  var heap = [];

  var insert = function(num) {
    heap.push(num);

    bubbleUp(heap.length - 1);
  };

  var swap = function(left, right) {
    var tmp = heap[right];
    heap[right] = heap[left];
    heap[left] = tmp;
  };

  var bubbleUp = function(index) {
    if (index < 0) return;

    if (heap[index] < parent(index)) {
      swap(index, parentIndex(index));
      bubbleUp(parentIndex(index))
    }
  };

  var bubbleDown = function(index) {
    var childNodes = childrenIndexes(index);
    if (heap[childNodes[0]] === undefined && heap[childNodes[1]] === undefined) return;

    var loIndex = childNodes[0];

    if (heap[childNodes[1]] == undefined) {
      loIndex = childNodes[0];
    } else if (heap[childNodes[0]] <= heap[childNodes[1]]) {
      loIndex = childNodes[0];
    } else if (heap[childNodes[0]] > heap[childNodes[1]]) {
      loIndex = [childNodes[1]];
    }

    if (heap[loIndex] < heap[index]) {
      swap(loIndex, index);
      bubbleDown(loIndex);
    }
  };

  var parent = function(index) {
    return heap[parentIndex(index)];
  };

  var parentIndex = function(index) {
    // we receive 0 based index and should return the same as well
    return Math.floor((index + 1) / 2) - 1;
  };

  var childrenIndexes = function(index) {
    return [(2 * (index + 1) - 1), (2 * (index + 1))];
  };

  var min = function() {
    return heap[0];
  };

  var extractMin = function() {
    swap(0, heap.length - 1);
    heap.splice(heap.length - 1);
    bubbleDown(0);
  };

  var size = function() {
    return heap.length;
  };

  return {
    insert: insert,
    min: min,
    extractMin: extractMin,
    size: size,
    heap: function() {
      return heap;
    }
  }
};

module.exports = MinHeap;
