function hashSort() {
    console.log('hash sort');
    var i;
    var copy = numbers.slice(0);
    // STEP 1: find the highest and lowest values in array
    var startTime = performance.now();
    var len = copy.length;
    var low = Infinity;
    var high = -Infinity;
    for (i = 0; i < len; i++) {
        var n = copy[i];
        if (n < low) {
            low = n;
        }
        if (n > high) {
            high = n;
        }
    }
    // STEP 2: create count array based in low and high range, then zero out array for counting
    var range = high - low + 1;
    var count = new Array(range);
    for (i = 0; i < range; i++) {
        count[i] = 0;
    }
    // STEP 3: count numbers
    var offset = low * -1;
    for (i = 0; i < len; i++) {
        n = copy[i];
        count[n + offset]++;
    }
    // STEP 4: populate copy array
    var current = 0;
    for (i = 0; i < count.length; i++) {
        n = count[i];
        if (n > 0) {
            for (var j = 0; j < n; j++) {
                copy[current++] = i - offset;
            }
        }
    }
    var result = copy.join(' ');
    $('#hashSort').text(result);
    var endTime = performance.now();
    var time = endTime - startTime;
    $('#hashSortTime').text(time);
}
