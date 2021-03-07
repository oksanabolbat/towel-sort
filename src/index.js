// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (typeof matrix != "object" || matrix.length === 0) return arr;
    arr = matrix.map(function (x, i) {
        return i % 2 === 1 ? x.reverse() : x;
    });
    console.log(arr, " test");
    return arr.flat();
};
