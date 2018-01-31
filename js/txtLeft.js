$(function() {
    var num = 0;
    function goLeft() {
        //750是根据你给的尺寸，可变的
        if (num == -2000) {
            num = 0;
        }
        num -= 1;
        $(".Scroll").css({
            left: num
        })
    }
    //设置滚动速度
    var timer = setInterval(goLeft, 20);
    //设置鼠标经过时滚动停止
    $(".BBox").hover(function() {
        clearInterval(timer);
    },
    function() {
        timer = setInterval(goLeft, 20);
    })
})