function getNumbers() {
    var numStr = $('#numbersToSort').val();
    var num = numStr.split(' ');
    numbers = num.map(function(n) { return parseInt(n); });
}
