// Bubble sort no optimization
function bubbleSort1() {
    console.log('bubble sort');
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
    var result = copy.join(' ');
    $('#bubbleSort1').text(result);
    var endTime = performance.now();
    var time = endTime - startTime;
    $('#bubbleSortTime1').text(time);
}
