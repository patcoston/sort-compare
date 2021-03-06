var numbers = [];
$(document).ready(function() {
    function generateNumbers() {
        var error = '';
        $('#errors').html('');
        var totalNumbers = parseInt($('#totalNumbers').val());
        var startNumber = parseInt($('#startNumber').val());
        var endNumber = parseInt($('#endNumber').val());
        if (isNaN(totalNumbers)) {
            error += 'Numbers to sort is not a number<br>';
        }
        if (isNaN(startNumber)) {
            error += 'Start number is not a number<br>';
        }
        if (isNaN(endNumber)) {
            error += 'End number is not a number<br>';
        }
        if (error.length > 0) {
            $('#errors').html(error);
            return;
        }
        var range = 0;
        if (endNumber >= startNumber) {
            range = endNumber - startNumber + 1;
        } else {
            range = startNumber - endNumber + 1;
        }
        var numberType = $('input[name=numberType]:checked').val();
        numbers = new Array(totalNumbers);
        var offset = 0;
        if (startNumber <= endNumber) {
            offset = startNumber;
        } else {
            offset = endNumber;
        }
        if (numberType === 'unsorted') {
            for (var i = 0; i < totalNumbers; i++) {
                numbers[i] = parseInt(Math.random() * range + offset);
            }
        } else if (numberType === 'sorted') {
            var step = range / totalNumbers;
            if (endNumber < startNumber) {
                step *= -1;
            }
            var n = startNumber;
            for (var i = 0; i < totalNumbers; i++) {
                numbers[i] = parseInt(n + 0.5);
                n += step;
            }
        }
        var numbersStr = numbers.join(' ').trim();
        $('#numbersToSort').text(numbersStr);
    }
    generateNumbers();
    $('#generateNumbers').on('click', function() {
        generateNumbers();
    });
    $('#sortNumbers').on('click', function() {
        getNumbers();
        var s = new Array(3);
        s[0] = hashSort();
        s[1] = bubbleSort1(); // no optimization
        s[2] = bubbleSort2(); // all optimizations
        s[3] = bubbleSort3(); // cocktail shaker
        var error = '';
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (i != j) {
                    if (s[i] != s[j]) {
                        error += 'Sort Results ' + i + ' ' + j + ' are different<br>';
                    }
                }
            }
        }
        $('#errors').html(error);
    });
});
