$(document).ready(function() {
    var numbers = new Array(100);
    var height = 500;
    var html = '';
    var left = 10;

    for (var i = 0; i < 100; i++) {
        numbers[i] = parseInt(Math.random()*height+1);
        html += '<div class="bar" style="position:absolute;bottom:10px;width:10px;left:' + left + 'px;height:' + numbers[i] + 'px"></div>';
        left += 12;
    }
    $('#container').html(html);

    function swapDIVs(x, y) {
        console.log('swap ' + x + ' ' + y);
        var $bar = $('.bar');
        $bar.css({"background-color":"red"});
        var $divx = $bar.eq(x);
        var $divy = $bar.eq(y);
        var leftx = parseInt($divx.css('left'));
        var lefty = parseInt($divy.css('left'));
        $divx.css({"background-color":"green"});
        $divy.css({"background-color":"green"});
        leftxPX = (leftx + 12) + 'px';
        leftyPX = (lefty - 12) + 'px';
        $divx.css({left: leftxPX});
        $divy.css({left: leftyPX});
    }

    var tmp = 0;
    var i1, i2, j1, j2;
    var newStart = 0;
    var newEnd = 99;
    var start = newStart;
    var end = newEnd;
    var i1 = start;
    var j2 = end;
    var swapCount = 0;

    function loop() {
        i2 = i1 + 1;
        j1 = j2 - 1;
        if (numbers[i1] > numbers[i2]) {
            tmp = numbers[i1];
            numbers[i1] = numbers[i2];
            numbers[i2] = tmp;
            newEnd = i1;
            swapCount++;
            swapDIVs(i1, i2);
        }
        if (numbers[j1] > numbers[j2]) {
            tmp = numbers[j2];
            numbers[j2] = numbers[j1];
            numbers[j1] = tmp;
            newStart = j2;
            swapCount++;
            swapDIVs(j1, j2);
        }
        setTimeout(function() {
            console.log('setTimeout i1=' + i1 + ' swapCount=' + swapCount);
            if (i1 >= end) {
                if (swapCount > 1) {
                    swapCount = 0;
                    start = newStart;
                    end = newEnd;
                    i1 = start;
                    j2 = end;
                    loop();
                }
            } else {
                i1++;
                j2--;
                loop();
            }
        }, 0);
    }

    loop();

});
