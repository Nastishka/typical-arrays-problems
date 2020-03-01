
exports.min = function min(array) {
    return (Array.isArray(array) && array.length > 0) ?
        Math.min(...array) : 0;
}

exports.max = function max(array) {
    return (Array.isArray(array) && array.length > 0) ?
        Math.max(...array) : 0;
}

exports.avg = function avg(array) {
    let avg = 0;
    if (Array.isArray(array) && array.length > 0) {
        let sum = array.reduce((total, item) => total + item);
        avg = sum / array.length;
    }
    return avg;
}
