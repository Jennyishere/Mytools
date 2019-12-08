// 001.输入一个值,返回其数据类型
type = para => {
  return Object.prototype.toString.call(para)
}
console.log(type(1));
// 002.冒泡排序
// 升序 bubbleAsSort()
bubbleAsSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
// 降序 bubbleDeSort()
bubbleDeSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
// 003.选择排序
// 升序 selectAsSort()
selectAsSort = arr => {
  let minIndex, temp;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
// 降序 selectDeSort()
selectDeSort = arr => {
  let minIndex, temp;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
// 004.插入排序
// 升序 insertAsSort()
insertAsSort = arr => {
  let current, preIndex;
  for (let i = 1; i < arr.length; i++) {
    current = arr[i];
    preIndex = i - 1;
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}
// 降序 insertDeSort()
insertDeSort = arr => {
  let current, preIndex;
  for (let i = 1; i < arr.length; i++) {
    current = arr[i];
    preIndex = i - 1;
    while (preIndex >= 0 && arr[preIndex] < current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}
// 005.阶乘
factorial = num => {
  let count = 1;
  for (let i = 1; i <= num; i++) {
    count *= i;
  }
  return count;
}
// 006.两个数之间累乘
multBetride = (x, y) => {
  let count;
  if (x < y) {
    count = x;
    for (let i = x + 1; i <= y; i++) {
      count *= i;
    }
    return count;
  } else {
    count = y;
    for (let i = y + 1; i <= x; i++) {
      count *= i;
    }
    return count;
  }
}
// 007.累加
// （）里面可以放N个实参
cumsum = () => {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
// 008.计时器(计算代码块(函数)执行时间)
// 无参 computeTime(f)
computeTime = code => {
  let startTime = new Date().getTime();
  code();
  let endTime = new Date().getTime();
  let time = endTime - startTime;
  return time;
}
// 有参 computeTime(f)
// 使用方法:computeTime(f,参数1,参数2......)
computeTime = f => {
  let startTime = new Date().getTime();
  let p = [];
  for (let i = 1; i < arguments.length; i++) {
    p.push(arguments[i])
  }
  f.apply(null, p)
  let endTime = new Date().getTime();
  let Time = endTime - startTime;
  return Time;
}
// 009.数组去重
arrDemp = arr => {
  let newArr = [];
  let m = {};
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (m[n]) {

    } else {
      newArr.push(arr[i]);
      m[n] = true;
    }
  }
  return newArr;
}

let arr = [1,2,3,5,4,5,4,3,6]
console.log(arrDemp(arr));  //  [ 1, 2, 3, 5, 4, 6 ]

// 也可以使用ES6中的new Set，一步到位
let arr = [1,2,3,5,4,5,4,3,6]
let arrDemp = new Set(arr)  //arrDemp是一个对象
let newArr = [...arrDemp]   //把arrDemp转化成数组
console.log(newArr);
// 010.统计数组中各个元素出现的次数
staArrNum = arr => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let m = arr[i];
    if (obj.hasOwnProperty(m)) {
      obj[m] += 1;
    } else {
      obj[m] = 1;
    }
  }
  return obj;
}

let arr = [1, 2, 3, 6, 5, 3, 2, 1, 2, 3, 2, 1]

console.log(staArrNum(arr));  //    { '1': 3, '2': 4, '3': 3, '5': 1, '6': 1 }

// 011.在数组中找指定的元素,返回下标
arrFinNum = function (arr,num) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      index = i;
      break;
    }
  }
  return index;
}

let arr = [1,2,3,4,5,6]
console.log(arrFinNum(arr,4));  // 3
// 012.删除数组中的元素
delArrNum = (arr,val) => {
  let index = arrFinNum(arr, val) //调用了前面自行添加的arrFinNum方法
  if (index != -1) {
    return arr.splice(index, 1);
  }
}
// 示例
let arr = [1, 2, 3, 4, 5, 6]

arrFinNum = (arr, num) => {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      index = i;
      break;
    }
  }
  return index;
}

delArrNum = (arr,val) => {
  let index = arrFinNum(arr, val) //调用了前面自行添加的arrFinNum方法
  if (index != -1) {
    return arr.splice(index, 1);
  }
}

console.log(delArrNum(arr,2));  //  [ 2 ]
// 013.时间戳转化成YMD格式
let date = Date.parse(new Date()) //  获取当前时间戳(毫秒)

dateFormat = (timestamp, formats) => {
  // formats格式包括
  // 1. Y-m-d
  // 2. Y-m-d H:i:s
  // 3. Y年m月d日
  // 4. Y年m月d日 H时i分
  formats = formats || 'Y-m-d';
  let zero = function (value) {
    if (value < 10) {
      return '0' + value;
    }
    return value;
  };
  let myDate = timestamp ? new Date(timestamp) : new Date();
  let year = myDate.getFullYear();
  let month = zero(myDate.getMonth() + 1);
  let day = zero(myDate.getDate());
  let hour = zero(myDate.getHours());
  let minite = zero(myDate.getMinutes());
  let second = zero(myDate.getSeconds());

  return formats.replace(/Y|m|d|H|i|s/ig, function (matches) {
    return ({
      Y: year,
      m: month,
      d: day,
      H: hour,
      i: minite,
      s: second
    })[matches];
  });
};

console.log(dateFormat(date,'Y-m-d'));
// 014.数字超过9显示省略号
num_filter = val =>{
  val = val?val-0:0;
  if (val > 9 ) {
    return "…"
  }else{
    return val;
  }
}
// 015.数字超过99显示99+
ninenum_filter = val =>{
  val = val?val-0:0;
  if (val > 99 ) {
    return "99+"
  }else{
    return val;
  }
}
// 016.年
let date = Date.parse(new Date()) //  获取当前时间戳(毫秒)

dateY = time =>{
  let newDate = new Date(time);
  let {y}={y:newDate.getFullYear()};
  return `${y}`;
}

console.log(dateY(date));
// 017.年月
let date = Date.parse(new Date()) //  获取当前时间戳(毫秒)

dateYM = time => {
  let newDate = new Date(time);
  let { y, m, d } = { y: newDate.getFullYear(), m: newDate.getMonth() + 1, d: newDate.getDate() };
  return `${y}-${m}`;
}

console.log(dateYM(date));

// 019.年月日
// 可根据自己需求，自己添加或删除相应的时间
let date = Date.parse(new Date()) //  获取当前时间戳(毫秒)

dateymd = time => {
  let newDate = new Date(time);
  let { y, m, d } = { y: newDate.getFullYear(), m: newDate.getMonth() + 1, d: newDate.getDate() };
  return `${y}-${m}-${d}`;
}

console.log(dateymd2(date));
// 020.年月日时分秒
let date = Date.parse(new Date()) //  获取当前时间戳(毫秒)

dateTime = time => {
  let newDate = new Date(time);
  let { y, M, d, h, m, s } = { y: newDate.getFullYear(), M: newDate.getMonth() + 1, d: newDate.getDate(), h: newDate.getHours(), m: newDate.getMinutes(), s: newDate.getSeconds() };
  return `${y}-${M}-${d}  ${h}:${m}:${s}`;
}

console.log(dateTime(date));
// 021.银行卡号分割
bank_filter = val =>{
  val += '';
  val = val.replace(/(\s)/g,'').replace(/(\d{4})/g,'$1 ').replace(/\s*$/,'');
  return val;
}
// 022.计算时间N之前
time_filter = time => {
  time -= 0;
  let difTime = new Date().getTime() - time;
  let { h, m } = { h: parseInt(difTime / (3600 * 1000)), m: parseInt(difTime / (60 * 1000)) };
  let msg = "";
  if (h < 1) {
    msg = `${m}分钟前`;
  } else if (h >= 1 && h <= 24) {
    msg = `${h}小时前`;
  } else if (h > 24) {
    h = parseInt(h / 24)
    msg = `${h}天前`;
  }
  return msg;
}

//输入一个时间戳，能计算出来是多长时间之前
console.log(time_filter(68464646464));  //17445天前
// 023.二分查找
//非递归实现
binarySearch = (arr, key) => {
  let high = arr.length - 1,
    low = 0;
  while (low <= high) {
    let m = Math.floor((high + low) / 2);
    if (arr[m] == key) {
      return m;
    }
    if (key > arr[m]) {
      low = m + 1;
    } else {
      high = m - 1;
    }
  }
  return false;
}
let arr = [-1, 1, 3, 4, 5, 8, 32, 234, 12, 42];
console.log(binarySearch(arr, 4));
//递归实现
binarySearch = (arr, low, high, key) => {
  if (low > high) {
    return -1;
  }
  let mid = parseInt((high + low) / 2);
  if (arr[mid] == key) {
    return mid;
  } else if (arr[mid] > key) {
    high = mid - 1;
    return binarySearch(arr, low, high, key);
  } else if (arr[mid] < key) {
    low = mid + 1;
    return binarySearch(arr, low, high, key);
  }
};
let arr = [-1, 1, 3, 4, 5, 8, 32, 234, 12, 42];
console.log(binarySearch(arr, 0, 13, 5));
// 024.获取上周本周下周时间
getDate = n => {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let day = now.getDay();
  if (day !== 0) {
    n = n + (day - 1);
  } else {
    n = n + day;
  }
  if (day) {
    if (month > 1) {
      month = month;
    } else {
      year = year - 1;
      month = 12;
    }
  }
  now.setDate(now.getDate() - n);
  year = now.getFullYear();
  month = now.getMonth() + 1;
  date = now.getDate();
  let s =
    year +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (date < 10 ? "0" + date : date);
  return s;
}

/***参数都是以周一为基准的***/
//上周的开始时间
// console.log(getDate(7));
//上周的结束时间
// console.log(getDate(1));
//本周的开始时间
// console.log(getDate(0));
//本周的结束时间
// console.log(getDate(-6));
//下周的开始时间
// console.log(getDate(-7));
//下周结束时间
// console.log(getDate(-13));
// 025.获取当前时间(年月日)
getNowDate = () => {
  let nowdate = new Date();
  let y = nowdate.getFullYear();
  let m = nowdate.getMonth() + 1;
  let d = nowdate.getDate();
  return y + "-" + m + "-" + d;
}
// 026.当前的时间(年月日时分秒)
getDateTime = () => {
  let date = new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  hour = date.getHours() + 1;
  minute = date.getMinutes();
  second = date.getSeconds();
  month = checkTime(month);
  day = checkTime(day);
  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  return "" + year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒"
}

console.log(getDateTime());

// 复制代码027.防抖与节流
/**
 * 函数防抖 (只执行最后一次点击)
 */
Debounce = (fn, t) => {
    let delay = t || 500;
    let timer;
    return function () {
        let args = arguments;
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, args);
        }, delay);
    }
};
/*
 * 函数节流
 */
Throttle = (fn, t) => {
    let last;
    let timer;
    let interval = t || 500;
    return function () {
        let args = arguments;
        let now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                fn.apply(this, args);
            }, interval);
        } else {
            last = now;
            fn.apply(this, args);
        }
    }
};

// 028.深拷贝
deepClone = source => {
  const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
  for (let keys in source) { // 遍历目标
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') { // 如果值是对象，就递归一下
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      } else { // 如果不是，就直接赋值
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
}

let str1 = {
  arr: [1, 2, 3],
  obj: {
    key: 'value'
  },
  fn: function () {
    return 1;
  }
};
let str3 = deepClone(str1);

console.log(str3 === str1); // false
console.log(str3.obj === str1.obj); // false
console.log(str3.fn === str1.fn); // true
// 复制代码029.获取视口尺寸
// 需要在HTML文件中运行
function getViewportOffset() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        // ie8及其以下
        if (document.compatMode === "BackCompat") {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}
// 30.倒计时(开始结束,自定义时间)
// 以下代码写到HTML的body中
<span id="clock">00:01:00:00</span>
<input id="start" type="button" value="开始" onclick="run()">
<input id="end" type="button" value="结束" onclick="stop()">
<script language="Javascript">
    var normalelapse = 100;
    var nextelapse = normalelapse;
    var counter;
    var startTime;
    var start = clock.innerText;
    var finish = "00:00:00:00";
    var timer = null;

    // 开始运行  
    function run() {
        start.disabled = true;
        end.disabled = false;
        counter = 0;
        // 初始化开始时间  
        startTime = new Date().valueOf();

        // nextelapse是定时时间, 初始时为100毫秒  
        // 注意setInterval函数: 时间逝去nextelapse(毫秒)后, onTimer才开始执行  
        timer = window.setInterval("onTimer()", nextelapse);
    }

    // 停止运行  
    function stop() {
        start.disabled = false;
        end.disabled = true;
        window.clearTimeout(timer);
    }
    window.onload = function () {
        end.disabled = true;
    };

    // 倒计时函数  
    function onTimer() {
        if (start == finish) {
            window.clearInterval(timer);
            alert("时间到了!");
            return;
        }

        var hms = new String(start).split(":");
        var ms = new Number(hms[3]);
        var s = new Number(hms[2]);
        var m = new Number(hms[1]);
        var h = new Number(hms[0]);

        ms -= 10;
        if (ms < 0) {
            ms = 90;
            s -= 1;
            if (s < 0) {
                s = 59;
                m -= 1;
            }

            if (m < 0) {
                m = 59;
                h -= 1;
            }
        }

        var ms = ms < 10 ? ("0" + ms) : ms;
        var ss = s < 10 ? ("0" + s) : s;
        var sm = m < 10 ? ("0" + m) : m;
        var sh = h < 10 ? ("0" + h) : h;

        start = sh + ":" + sm + ":" + ss + ":" + ms;
        clock.innerText = start;

        // 清除上一次的定时器  
        window.clearInterval(timer);

        // 自校验系统时间得到时间差, 并由此得到下次所启动的新定时器的时间nextelapse  
        counter++;
        var counterSecs = counter * 100;
        var elapseSecs = new Date().valueOf() - startTime;
        var diffSecs = counterSecs - elapseSecs;
        nextelapse = normalelapse + diffSecs;
        if (nextelapse < 0) nextelapse = 0;
        // 启动新的定时器  
        timer = window.setInterval("onTimer()", nextelapse);
    }  
</script>
31.计时器(无开始结束)
以下代码写到HTML的body中
<div id="time"></div>
<script type="text/javascript">
    var maxtime = 10 * 60; // 
    function CountDown() {
        if (maxtime >= 0) {
            minutes = Math.floor(maxtime / 60);
            seconds = Math.floor(maxtime % 60);
            msg = "还有" + minutes + "分" + seconds + "秒";
            document.all["time"].innerHTML = msg;
            if (maxtime == 5 * 60) alert("仅剩5分钟");
            --maxtime;
        } else {
            clearInterval(timer);
            alert("时间到!");
        }
    }
    timer = setInterval("CountDown()", 1000);   
</script>
