Array.prototype.swap = function (index) {
    index = index || 0;
    if (index >= this.length - 1) throw new Error("what are you an idiot?");
    var temp = this[index];
    this[index] = this[index + 1];
    this[index + 1] = temp;
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
