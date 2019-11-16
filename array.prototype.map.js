function myMap(data, fn) {
    var arg = [];
    for (var i = 0; i < data.length; i++) {
        (function (ele, fn) {
        //每一个元素处理后放入新数组
            arg.push(fn(ele));
        })(data[i], fn);
    }
    return arg;
}
var data = [10, 20, 30, 40];
var roots= myMap(data, function (ele) {
    return ele / 10;
});
console.log(roots);//[1,2,3,4]
