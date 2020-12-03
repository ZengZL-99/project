/*给主题市场二级导航栏添加二级列表*/

let service_bd_all = document.querySelectorAll(".service .service-bd li");
for (let i = 0; i < service_bd_all.length; i++) {
  service_bd_all[i].addEventListener("mouseover", function () {
    document.querySelectorAll(".service-float")[0].style.display = "block";
  });
  service_bd_all[i].addEventListener("mouseout", function () {
    document.querySelectorAll(".service-float")[0].style.display = "none";
  });
}


/*轮播图部分*/

//第一个轮播图
let promo_bd = document.getElementsByClassName("promo-bd")[0];
//console.log(promo_bd);
let r_l_block = document.querySelectorAll(".promo-ft div")[0];
promo_bd.addEventListener("mouseover", function () {
  r_l_block.style.display = "block";
  clearInterval(timer);
});
promo_bd.addEventListener("mouseout", function () {
  r_l_block.style.display = "none";
  autoPlay();  
});

//console.log(r_l_block);

let left_next = document.querySelectorAll(".promo-ft .icon-left")[0];
let right_next = document.querySelectorAll(".promo-ft .icon-right")[0];
let wrap = document.getElementById("dongtai");

let index = 0;
let dots = document.querySelectorAll(".sld-ft-nav li");
function showCurrentDot() {
  for(var i = 0, len = dots.length; i < len; i++){
    dots[i].className = "";
  }
  dots[index].className = "selected";
}

let dots_a = document.querySelectorAll(".sld-ft-nav li a");
for (let i = 0; i < dots_a.length; i++) {
  dots_a[i].addEventListener("click", function () {
    index = dots_a[i].innerHTML-1;
    showCurrentDot();
    wrap.style.left = -520 * index + "px";
  })
}


function btn_left() {
  index--;
  if(index < 0){
    index = 4;
  }
  showCurrentDot();
  let newleft = parseInt(wrap.style.left) + 520;
  if (newleft > 0) {
    wrap.style.left = -2080 + "px";
  }else{
    wrap.style.left = newleft + "px";
  }
}

function btn_right() {
  index++;
  if(index > 4){
    index = 0;
  }
  showCurrentDot();
  let newleft = parseInt(wrap.style.left) - 520;
  if (newleft < -2080) {
    wrap.style.left = 0 + "px";
  }else{
    wrap.style.left = newleft + "px";
  }
}

left_next.onclick = function () {
  btn_left();
}

right_next.onclick = function () {
  btn_right();
}

/*设置自动播放*/
var timer = null;
function autoPlay () {
  timer = setInterval(function () {
    btn_right();
  },3000);
}
autoPlay();


// 第二个轮播图 
let tmall_bd = document.getElementsByClassName("tmall-bd")[0];
tmall_bd.addEventListener("mouseover", function () {
  document.getElementsByClassName("tmall-opt")[0].style.display = "block";
  clearInterval(timer_bottom);
});
tmall_bd.addEventListener("mouseout", function () {
  document.getElementsByClassName("tmall-opt")[0].style.display = "none";
  bottom_autoPlay();
});

//获取需要实时变化数字的i
let tmall_hd = document.querySelectorAll(".tmall-hd .inner strong i")[0];
console.log("tmall_hd",tmall_hd);
let tmall_left = document.querySelectorAll(".tmall-opt .prev")[0];
let tmall_right = document.querySelectorAll(".tmall-opt .next")[0];
let wrap_bottom = document.getElementById("dongtai-two");

let index_bom = 0;
let dots_bom = document.querySelectorAll(".tmall-nav li");

function bottom_showCurrentDot() {
  for(var i = 0, len = dots_bom.length; i < len; i++){
    dots_bom[i].className = "";
  }
  dots_bom[index_bom].className = "selected";
  tmall_hd.innerHTML = index_bom +  1;
}


let dots_bom_a = document.querySelectorAll(".tmall-nav li a");
console.log("dots_bom_a ",dots_bom_a);
for (let i = 0; i < dots_bom_a.length; i++) {
  dots_bom[i].addEventListener("click", function () {
    index_bom = dots_bom_a[i].innerHTML-1;
    bottom_showCurrentDot();
    wrap_bottom.style.left = -520 * index_bom + "px";
  })
}

//点击左按钮时间
function tmall_btn_left() {
  index_bom--;
  if(index_bom < 0){
    index_bom = 5;
  }
  bottom_showCurrentDot();
  let newleft = parseInt(wrap_bottom.style.left) + 520;
  if (newleft > 0) {
    wrap_bottom.style.left = -2600 + "px";
  } else {
    wrap_bottom.style.left = newleft + "px";
  }
}

//点击右按钮时间
function tmall_btn_right() {
  index_bom++;
  if(index_bom > 5){
    index_bom = 0;
  }
  bottom_showCurrentDot();
  let newleft = parseInt(wrap_bottom.style.left) - 520;
  if (newleft == -3120) {
    wrap_bottom.style.left = 0 + "px";
  }else{
    wrap_bottom.style.left = newleft + "px";
  }
}


tmall_left.onclick = function () {
  tmall_btn_left();
}

tmall_right.onclick = function () {
  tmall_btn_right();
} 

var timer_bottom = null;
function bottom_autoPlay () {
  timer_bottom = setInterval(function () {
    tmall_btn_right();
  },3000);
}
bottom_autoPlay();


//
console.log(document.querySelectorAll(".cup .top .taobao-logo")[0].scrollHeight);
console.log(document.querySelectorAll(".cup .top .taobao-logo")[0].clientHeight);
//document.querySelectorAll(".cup .top .taobao-logo").getBoundingClientRect();

/*
let test_timer = null;
function test_autoPlay () {
  test_timer = setInterval(function () {
    console.log(document.querySelectorAll(".cup .top .taobao-logo")[0].scrollHeight);
    console.log(document.querySelectorAll(".cup .top .taobao-logo")[0].clientHeight);
    console.log(window.pageYOffset);
  },2000);
}
test_autoPlay();*/

/*给右侧跟随导航栏添加了跟随效果，以及动态选中当前所浏览的模块*/

function if_on(pageY) {
  if (pageY < 1497) {
    all_fixedtool_a.forEach(element => {
      element.classList.remove("on");
    });
    all_fixedtool_a[0].classList.add("on");
  } else if ( pageY < 2042) {
    all_fixedtool_a.forEach(element => {
      element.classList.remove("on");
    });
    all_fixedtool_a[1].classList.add("on");
  }else if (pageY < 3118) {
    all_fixedtool_a.forEach(element => {
      element.classList.remove("on");
    });
    all_fixedtool_a[2].classList.add("on");
  } else {
    all_fixedtool_a.forEach(element => {  
      element.classList.remove("on");
    });
    all_fixedtool_a[3].classList.add("on");
  }
}


let search_flexed = document.querySelectorAll(".cup")[0];
let fixedtool = document.getElementsByClassName("fixedtool")[0];
let all_fixedtool_a = document.querySelectorAll(".fixedtool a");
console.log("all_fixedtool_a",all_fixedtool_a);
//console.log("fixedtool",fixedtool);
window.addEventListener("scroll", function () {
  //console.log(document.querySelectorAll(".cup .top .taobao-logo")[0].scrollHeight);
  //console.log(document.querySelectorAll(".cup .top .taobao-logo")[0].clientHeight);
  console.log("window.pageYOffset", window.pageYOffset);
  let this_pageY = window.pageYOffset;
  if (this_pageY >= 190) {
    search_flexed.classList.add("wrap-fixed");
  } else {
    search_flexed.classList.remove("wrap-fixed");
  }
  if (this_pageY >= 518) {
    fixedtool.style.position = "fixed";
    fixedtool.style.top = "80px";
  }
  else {
    fixedtool.style.position = "absolute";
    fixedtool.style.top = "601px";
  }
  if_on(this_pageY);
});

/*给右侧跟随导航栏添加 click事件  跳转到指定窗口位置 */
function click_fixed(cl_fd) {
  if (cl_fd == 0) {
    console.log("我触发了！");
    window.scrollTo(100,1040);
  }
  console.log("我触发了click");
}

all_fixedtool_a[0].onclick = function () {
  window.scrollTo(100,742);
}
all_fixedtool_a[1].onclick = function () {
  window.scrollTo(100,1480);
}
all_fixedtool_a[2].onclick = function () {
  window.scrollTo(100,2038);
}
all_fixedtool_a[3].onclick = function () {
  window.scrollTo(100,3377);
}

 

/* 淘宝用户信息栏 公告栏部分*/
let notice_hd_li = document.querySelectorAll(".notice-hd li");
console.log(notice_hd_li);
let notice_bd_ul = document.querySelectorAll(".notice-bd ul");
for (let i = 0; i < notice_hd_li.length; i++) {
  notice_hd_li[i].addEventListener("mouseover", function () {
    notice_hd_li.forEach(el => {
      el.classList.remove("selected");
    });
    notice_bd_ul.forEach(el => {
      el.style.display = "none";
    });
    notice_hd_li[i].classList.add("selected");
    notice_bd_ul[i].style.display = "block";
  });
}