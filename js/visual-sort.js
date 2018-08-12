$(document).ready(function() {
    var numbers = new Array(100);
    var height = 500;
    var html = '';
    var left = 10;
    for (var i = 0; i < 100; i++) {
        numbers[i] = parseInt(Math.random()*height+1);
        html += '<div class="bar" id="div' + i + '" style="position:absolute;bottom:10px;width:10px;left:' + left + 'px;height:' + numbers[i] + 'px"></div>';
        left += 12;
    }
    $('#container').html(html);

    function swapDIVs(x, y) {
        var $divx = $('#div' + x);
        var $divy = $('#div' + y);
        var leftx = parseInt($divx.css('left'));
        var lefty = parseInt($divy.css('left'));
        leftx = (leftx + 12) + 'px';
        lefty = (lefty - 12) + 'px';
        $divx.css({left: leftx});
        $divy.css({left: lefty});
    }

    var tmp = 0;
    var newStart = 0;
    var newEnd = 98; // 99 is last item so newEnd is 99 - 1
    var i1, i2, j1, j2;
    do {
        var end = newEnd;
        var start = newStart;
        var swapCount = 0;
        for (i1 = start, j2 = end; i1 < end; i1++, j2--) {
            var i2 = i1 + 1;
            var j1 = j2 - 1;
            if (numbers[i1] > numbers[i2]) {
                tmp = numbers[i1];
                numbers[i1] = numbers[i2];
                numbers[i2] = tmp;
                newEnd = i1;
                swapDIVs(i1, i2);
                swapCount++;
            }
            if (numbers[j1] > numbers[j2]) {
                tmp = numbers[j2];
                numbers[j2] = numbers[j1];
                numbers[j1] = tmp;
                newStart = j2;
                swapDIVs(j1, j2);
                swapCount++;
            }
        }
    } while(swapCount > 1);

});
