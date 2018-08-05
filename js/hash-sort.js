function hashSort() {
    console.log('hash sort');
    var copy = numbers.slice(0);
    var len = copy.length;
    // find the highest and lowest values in array
    var low = Infinity;
    var high = -Infinity;
    for (var i = 0; i < len; i++) {
        var n = copy[i];
        if (n < low) {
            low = n;
        }
        if (n > high) {
            high = n;
        }
        console.log(i, n, low, high);
    }
}
