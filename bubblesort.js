Array.prototype.swap = function (i,j) {
    i = i || 0;
    j = j || i+1;
    if (i >= this.length - 1 || j >= this.length || i < 0 || j < 0) throw new Error("index out of range");
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
}

function bubbleSort(arr) {
    var swapCount;
    for (var i = arr.length - 1; i >= 0 && swapCount !== 0; i--) {
        swapCount = 0;
        for (var j = 0; j < i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                arr.swap(j);
                swapCount++;
            }
        }
    }
    return arr;
}

function compare(a, b) {
    return a > b;
}
