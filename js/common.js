function getNumbers() {
    var numStr = $('#numbersToSort').val();
    console.log(numStr);
    var num = numStr.split(' ');
    numbers = num.map(function(n) { return parseInt(n); });
}
