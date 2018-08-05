var numbers = [];
$(document).ready(function() {
    function generateNumbers() {
        console.log('generate numbers');
        var error = '';
        $('#errors').html('');
        var totalNumbers = parseInt($('#totalNumbers').val());
        var startNumber = parseInt($('#startNumber').val());
        var endNumber = parseInt($('#endNumber').val());
        console.log(totalNumbers, startNumber, endNumber);
        if (isNaN(totalNumbers)) {
            error += 'Numbers to sort is not a number<br>';
        }
        if (isNaN(startNumber)) {
            error += 'Start number is not a number<br>';
        }
        if (isNaN(endNumber)) {
            error += 'End number is not a number<br>';
        }
        if (startNumber > endNumber) {
            error += 'Start must be less than or equal to End number<br>';
        }
        console.log(error);
        if (error.length > 0) {
            $('#errors').html(error);
            return;
        }
        var numberType = $('input[name=numberType]:checked').val();
        var range = endNumber - startNumber + 1;
        numbers = new Array(range);
    }
    generateNumbers();
    $('#generateNumbers').on('click', function() {
        generateNumbers();
    });
});
