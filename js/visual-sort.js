$(document).ready(function() {
    var numbers = new Array(100);
    var height = 500;
    var html = '';
    var left = 10;

    for (var i = 0; i < 100; i++) {
        numbers[i] = {
            height: parseInt(Math.random()*height+1)
        };
        html += '<div class="bar" style="position:absolute;bottom:10px;width:10px;left:' + left + 'px;height:' + numbers[i].height + 'px"></div>';
        left += 12;
    }
    $('#container').html(html);
    var n = 0;
    var $bar = $('.bar');
    $bar.each(function() {
        var $div = $(this);
        numbers[n].$div = $div;
        numbers[n].left = $div.css('left');
        n++;
    });

    function swapDIVs(x, y) {
        numbers[x].$div.css({'background-color':'green'});
        numbers[y].$div.css({'background-color':'green'});
        var tmp = numbers[x];
        numbers[x] = numbers[y];
        numbers[y] = tmp;
        tmp = numbers[x].left;
        numbers[x].left = numbers[y].left;
        numbers[y].left = tmp;
        numbers[x].$div.css({'left': numbers[x].left});
        numbers[y].$div.css({'left': numbers[y].left});
    }

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
        console.log('i1=' + i1 + ' i2=' + i2 + ' j1=' + j1 + ' j2=' + j2);
        if (numbers[i1].height > numbers[i2].height) {
            swapDIVs(i1, i2);
            newEnd = i1;
            swapCount++;
        }
        if (numbers[j1].height > numbers[j2].height) {
            swapDIVs(j1, j2);
            newStart = j2;
            swapCount++;
        }
        setTimeout(function() {
            $bar.css({'background-color':'red'});
            console.log('i1=' + i1 + ' end=' + end + ' swapCount=' + swapCount);;
            if (i2 === end) {
                if (swapCount > 1) {
                    swapCount = 0;
                    i1 = start = newStart;
                    j2 = end = newEnd;
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
