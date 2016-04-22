Array.prototype.split = function () {
    if (this.length < 2) throw new Error("Array too small");
    var pivot = Math.floor(this.length / 2);
    return [this.slice(0, pivot), this.slice(pivot)];
};

Array.prototype.merge = function (arr) {

    if (!arr.length) return this; // parameter is null
    if (!this.length) return arr; // root array is null

    var thisIndex = 0;
    var arrIndex = 0;
    var a, b;
    var result = [];

    while (thisIndex < this.length && arrIndex < arr.length) {
        a = this[thisIndex];
        b = arr[arrIndex];
        if (a <= b) {
            result.push(a);
            thisIndex++;
        } else {
            result.push(b);
            arrIndex++;
        }
    }

    return result.concat(this.slice(thisIndex)).concat(arr.slice(arrIndex));
};

function mergeSort(array) {
    if (array.length < 2) return array;
    var newarray = array.split();
    return mergeSort(newarray[0]).merge(mergeSort(newarray[1]));
}
