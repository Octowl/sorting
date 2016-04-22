Array.prototype.split = function () {
    if(this.length < 2) throw new Error("Array too small");
    var pivot = Math.floor(this.length/2);
    return [this.slice(0,pivot), this.slice(pivot)];
};

Array.prototype.merge = function (arr) {
    if(!arr.length) return this; // parameter is null
    if(!this.length) return arr; // root array is null
    var result = [];
    var b;
    b = arr.shift(); // first element of parameter
    this.forEach(function(a,i,array){
        if (b) {
            if (a <= b) {
                result.push(a);
            } else {
                while (a > b) {
                    result.push(b);
                    b = arr.shift(); // move to next element in arr
                }
                result.push(a); // ran out of smaller elements in arr, push a
            }
        }
        if (!b) result = result.concat(array.slice(i+1)); // arr is null
    });
    if (b) result.push(b); // root array is null but b is not
    return result.concat(arr);
};

function mergeSort(array) {
    if (array.length < 2) return array;
    var newarray = array.split();
    return mergeSort(newarray[0]).merge(mergeSort(newarray[1]));
}
