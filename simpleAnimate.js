window.onload = function() {
    var tools;
    //简单的动画
     tools.SimpleAnimate = function(obj, targetWidth) {
        //清楚所有的定时器
        clearInterval(obj.timer)
        var timer = setInterval(function() {
            if(obj.offsetLeft >= targetWidth) {
                clearInterval(timer);
            }
            obj.style.left = obj.offsetLeft + 1 + 'px';
        }, 15)
    }

    缓动动画
    tools.SlowStopAnimate = function(obj, targetWidth) {
        //清楚所有的定时器
        clearInterval(obj.timer)
        var timer = setInterval(function() {
            var step = Math.ceil((targetWidth - obj.offsetLeft) / 10
            );    //用步长来实现这个减速的功能
            if(obj.offsetLeft >= targetWidth) {
                clearInterval(timer);
            }
            obj.style.left = obj.offsetLeft + 1 + 'px';
        }, 15)
    }
}
