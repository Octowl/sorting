function bubbleSort(arr) {

    // var swapcount = 0;
    // var currArr = arr.slice(0,-1);
    // currArr.forEach(function(n,i){
    //     if (compare(n, arr[i+1])) {
    //         swap(arr, i);
    //         swapcount++;
    //     };
    // })
    // if (swapcount !== 0) {
    //     var last = arr.slice(-1); // 1
    //     arr = bubbleSort(currArr).concat(last); // [2,3].concat([1]);
    // };
    // return arr;
}

Array.prototype.swap = function (index) {
    index = index || 0;
    if (index >= this.length-1) throw new Error("what are you an idiot?");
    var temp = this[index];
    this[index] = this[index+1];
    this[index+1] = temp;
}

function swap(arr, index) {
    index = index || 0;
    var temp = arr[index];
    arr[index] = arr[index+1];
    arr[index+1] = temp;
}

function compare(a, b) {
    return a > b;
}
