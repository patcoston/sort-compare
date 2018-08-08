// Bubble sort no optimization
function bubbleSort1() {
    var i;
    var copy = numbers.slice(0);
    var len = copy.length;
    var tmp;
    var totalSwaps = 0;
    var totalIterations = 0;
    var startTime = performance.now();
    do {
        var swap = false;
        for (i = 0; i < len - 1; i++) {
            if (copy[i] > copy[i+1]) {
                tmp = copy[i];
                copy[i] = copy[i+1];
                copy[i+1] = tmp;
                swap = true;
                totalSwaps++;
            }
            totalIterations++;
        }
    } while(swap);
    var endTime = performance.now();
    var time = endTime - startTime;
    var result = copy.join(' ');
    $('#bubbleSort1').text(result);
    $('#bubbleSortTime1').text(time);
    console.log('Not Optimized: totalSwaps=' + totalSwaps + ' totalIterations=' + totalIterations);
    return result;
}

// Bubble sort fully optimized
// Iterate forward and reverse
// Shorten loop to last swap on each pass
// swap counter. If one or no swaps, then it's sorted.
function bubbleSort2() {
    var i1, i2, j1, j2;
    var copy = numbers.slice(0);
    var len = copy.length;
    var tmp;
    var startTime = performance.now();
    var newStart = 0;
    var newEnd = len - 1;
    var swapCount1 = 0;
    var swapCount2 = 0;
    var totalSwaps = 0;
    var totalIterations = 0;
    do {
        var end = newEnd;
        var start = newStart;
        swapCount1 = 0;
        swapCount2 = 0;
        for (i1 = start, j2 = end; i1 < end; i1++, j2--) {
            var i2 = i1 + 1;
            var j1 = j2 - 1;
            if (copy[i1] > copy[i2]) {
                tmp = copy[i1];
                copy[i1] = copy[i2];
                copy[i2] = tmp;
                newEnd = i2;
                totalSwaps++;
            }
            if (!((i1 === j1) && (i2 === j2))) { // no need to check the same pair of numbers
                if (copy[j1] > copy[j2]) {
                    tmp = copy[j2];
                    copy[j2] = copy[j1];
                    copy[j1] = tmp;
                    newStart = j1;
                    swapCount2++;
                }
            }
            totalIterations++;
        }
        //console.log(swapCount1, swapCount2, newStart, newEnd, copy);
        swapCount = swapCount1 + swapCount2;
        totalSwaps += swapCount;
    } while(swapCount > 1);
    console.log('Optimized: totalSwaps=' + totalSwaps + ' totalIterations=' + totalIterations);
    var endTime = performance.now();
    var time = endTime - startTime;
    var result = copy.join(' ');
    $('#bubbleSort2').text(result);
    $('#bubbleSortTime2').text(time);
    return result;
}
