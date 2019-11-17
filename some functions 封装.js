// 本地存储与json数据转换的封装
  //arr 是要存储的数组，key是存入本地存储自定义的键，一定要字符串格式
  this.storage = function(arr, key) {
    let json = JSON.stringify(arr);
    return localStorage.setItem(key, json);
  };

  // 从本地缓存中取出来
  //arr 是拿出来的数组，key本地存储中自定义的键，一定要字符串格式
  this.storage = function(key) {
    let data = localStorage.getItem(key);
    let arr = !data ? [] : JSON.parse(data);
    return arr;
  };


  //轮播图封装
  this.swiper = function(inner, ul, icon, left, right) {
    // var inner = document.querySelector(".inner");
    // var ul = document.querySelector("ul");
    // var icon = document.querySelectorAll(".list>i");
    // var left = document.querySelector(".arrow-left");
    // var right = document.querySelector(".arrow-right");
    var inner, ul, icon, left, right;
    let currentImgIndex = 0;

    //序号轮播
    icon.forEach(function(e, i) {
      e.onmouseover = function() {
        currentImgIndex = i;
        let pstion = inner.offsetWidth * i * -1;
        ul.style.left = pstion + "px";

        icon.forEach(function(e) {
          e.classList.remove("current");
        });
        this.classList.add("current");
      };
    });

    //注册右击事件
    right.onclick = function() {
      if (currentImgIndex == 5) {
        currentImgIndex = -1;
      }
      currentImgIndex++;
      let pstion = inner.offsetWidth * currentImgIndex * -1;
      ul.style.left = pstion + "px";

      icon.forEach(function(e) {
        e.classList.remove("current");
      });
      icon[currentImgIndex].classList.add("current");
    };
    //注册左击事件
    left.onclick = function() {
      if (currentImgIndex == 0) {
        currentImgIndex = 6;
      }
      currentImgIndex--;
      let pstion = inner.offsetWidth * currentImgIndex * -1;
      ul.style.left = pstion + "px";

      icon.forEach(function(e) {
        e.classList.remove("current");
      });
      icon[currentImgIndex].classList.add("current");
    };

    //定时器实现自动轮播
    let timeId = setInterval(function() {
      right.onclick();
    }, 1500);
    //鼠标移入悬停
    inner.onmouseover = function() {
      clearInterval(timeId);
    };
    inner.onmouseout = function() {
      timeId = setInterval(function() {
        right.onclick();
      }, 1500);
    };
  };
