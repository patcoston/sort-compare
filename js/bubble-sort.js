// Bubble sort no optimization
function bubbleSort1() {
    var i;
    var copy = numbers.slice(0);
    var len = copy.length;
    var tmp;
    var startTime = performance.now();
    do {
        var swap = false;
        for (i = 0; i < len - 1; i++) {
            if (copy[i] > copy[i+1]) {
                tmp = copy[i];
                copy[i] = copy[i+1];
                copy[i+1] = tmp;
                swap = true;
            }
        }
    } while(swap);
    var endTime = performance.now();
    var time = endTime - startTime;
    var result = copy.join(' ');
    $('#bubbleSort1').text(result);
    $('#bubbleSortTime1').text(time);
}

// Bubble sort fully optimized
// Iterate forward and reverse
// Shorten loop to last swap on each pass
// swap counter. If one or no swaps, then it's sorted.
function bubbleSort2() {
    var i;
    var copy = numbers.slice(0);
    var len = copy.length;
    var tmp;
    var startTime = performance.now();
    var start = 0;
    var end = len - 1;
    var newStart = 0;
    var newEnd = 0;
    var swapCount = 0;
    do {
        swapCount = 0;
        for (i = start; i < end; i++) {
            if (copy[i] > copy[i+1]) {
                tmp = copy[i];
                copy[i] = copy[i+1];
                copy[i+1] = tmp;
                newEnd = i + 1;
                swapCount++;
            }
        }
        if (swapCount < 2) {
            break;
        }
        end = newEnd;
        swapCount = 0;
        for (i = end; i > start; i--) {
            if (copy[i-1] > copy[i]) {
                tmp = copy[i];
                copy[i] = copy[i-1];
                copy[i-1] = tmp;
                newStart = i - 1;
                swapCount++;
            }
        }
        start = newStart;
    } while(swapCount > 1);
    var endTime = performance.now();
    var time = endTime - startTime;
    var result = copy.join(' ');
    $('#bubbleSort2').text(result);
    $('#bubbleSortTime2').text(time);
}
