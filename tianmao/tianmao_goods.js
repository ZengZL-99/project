/*鼠标划过切换图片事件 */

// 大图小图的url
small_img = [
  "https://img.alicdn.com/imgextra/i1/196993935/O1CN01l2fT6G1ewH9JYNpxT_!!0-item_pic.jpg_430x430q90.jpg",
  "https://img.alicdn.com/imgextra/i1/196993935/O1CN012lE1aB1ewH9Ii9By9-196993935.jpg_430x430q90.jpg",
  "https://img.alicdn.com/imgextra/i4/196993935/O1CN01VsdImA1ewH9LeQQ0B-196993935.jpg_430x430q90.jpg",
  "https://img.alicdn.com/imgextra/i3/196993935/O1CN01t7a9LR1ewH9NzL9zN-196993935.jpg_430x430q90.jpg",
  "https://img.alicdn.com/imgextra/i2/196993935/O1CN01E4y6Fu1ewH9N9v4td-196993935.jpg_430x430q90.jpg"
]
big_img = [
  "https://img.alicdn.com/imgextra/i1/196993935/O1CN01l2fT6G1ewH9JYNpxT_!!0-item_pic.jpg",
  "https://img.alicdn.com/imgextra/i1/196993935/O1CN012lE1aB1ewH9Ii9By9-196993935.jpg",
  "https://img.alicdn.com/imgextra/i4/196993935/O1CN01VsdImA1ewH9LeQQ0B-196993935.jpg",
  "https://img.alicdn.com/imgextra/i3/196993935/O1CN01t7a9LR1ewH9NzL9zN-196993935.jpg",
  "https://img.alicdn.com/imgextra/i2/196993935/O1CN01E4y6Fu1ewH9N9v4td-196993935.jpg",
]

let ul_img = document.querySelectorAll(".tb-thumb-warp ul li");
let min_img = document.querySelector("#small a span img");
let max_img = document.getElementById("look_girl");
//console.log(ul_img);
for (let i = 0; i < ul_img.length; i++) {
  ul_img[i].addEventListener("mouseover", function () {
    ul_img.forEach(el => {
      el.classList.remove("tb-selected");
    });
    ul_img[i].classList.add("tb-selected");
    min_img.src = small_img[i];
    max_img.src = big_img[i];
  });
}



/* 放大镜效果部分 */
let move = document.getElementById("move");
let small = document.querySelectorAll("#small a")[0];
//console.log("small",small);
let big = document.getElementById("big");
let look_girl = document.getElementById("look_girl");

small.onmouseover = function () {
  move.style.display = "block";
  document.getElementById("ks-component1196").style.display = "block";
  //big.style
}
small.onmouseout = function () {
  move.style.display = "none";
  document.getElementById("ks-component1196").style.display = "none";
} 


// 定义一个offset方法 获取所需的offsetLeft 和 offsetTop 值
function offset(curEle) {
  let totalleft = null, totaltop = null, par = curEle.offsetParent;
  //首先加自己本身的左偏移和上偏移
  totalleft += curEle.offsetLeft;
  totaltop += curEle.offsetTop;
  //只要没有找到body，我们就把父级参照物的边框和偏移也进行累加
  while (par) {
    totalleft += par.offsetLeft;
    totaltop += par.offsetTop;
    par = par.offsetParent;
  }
  return {
    left: totalleft,
    top: totaltop
  }
}

small.onmousemove = function (event) {
  event = event || window.event;
  //console.log(this);
  this.style.cursor = "move";
  
  move = document.getElementById("move");
  // 计算 move 移动块的left值/
  let l_t = offset(this);
  //console.log(l_t);
  //pageX 鼠标指针相对于整个文档的X坐标；
  let move_left = event.pageX - l_t.left - move.offsetWidth / 2;
  
  let move_top = event.pageY- l_t.top - move.offsetHeight / 2;
  // 超出左边界赋值为0
  
  move_left = move_left < 0 ? 0 : move_left;
  // 超出右边界赋值为盒子宽度-移动块的宽度
  //console.log("this.offsetWidth - move.offsetWidth ==",this.offsetWidth - move.offsetWidth);
  move_left = move_left > this.offsetWidth - move.offsetWidth ? this.offsetWidth - move.offsetWidth : move_left;


  // 超出上边界 赋值为0
  move_top = move_top < 0 ? 0 : move_top;
  // 超出下边界 赋值为盒子高度-移动块高度
  move_top = move_top > this.offsetHeight - move.offsetHeight ? this.offsetHeight - move.offsetHeight : move_top;
  // 修改移动块 left top 的值
  move.style.left = move_left + "px";
  move.style.top = move_top + "px";
  //console.log("move_left:", move_left);
  //console.log("move_top:", move_top);
  //console.log("big_x=>move_left / (small.offsetWidth - move.offsetWidth)", move_left / (small.offsetWidth - move.offsetWidth));
  //console.log("big_x=>(look_girl.offsetWidth - big.offsetWidth)",(look_girl.offsetWidth - big.offsetWidth));
  //console.log("big_y=>move_top / (small.offsetWidth - move.offsetWidth)", move_top / (small.offsetWidth - move.offsetWidth));
  //console.log("big_x=>(look_girl.offsetWidth - big.offsetWidth)",(look_girl.offsetWidth - big.offsetWidth));
  let big_x = move_left / (small.offsetWidth - move.offsetWidth) * (look_girl.offsetWidth - big.offsetWidth);
  let big_y = move_top / (small.offsetHeight - move.offsetHeight) * (look_girl.offsetHeight - big.offsetHeight);
  look_girl.style.left = - big_x + "px";
  look_girl.style.top = - big_y + "px";
}


/*天猫 滚动事件 */
let tab_bar_box = document.getElementsByClassName("tab-bar-box")[0];
let srl_fff = document.getElementById("scroll-fff");
let tabbar_bg = document.getElementsByClassName("tabbar-bg")[0];
let tm_bd_side = document.getElementsByClassName("tm-bd-side")[0];
let tm_floatcart = document.getElementsByClassName("tm-floatcart-link")[0];
let shop_intro_h3 = document.querySelectorAll(".shop-intro h3")[0];



// 右侧跟随栏 点击跳转事件

/*
 */
let tm_idsItem = document.querySelectorAll(".tm-idsItem");
//console.log("我执行了",tm_idsItem);
for (let i = 0; i < tm_idsItem.length; i++) {
  //console.log("我没执行for");
  //tm_idsItem[i].removeEventListener("scroll", top_scroll);
  //console.log("tm_idsItem",i,tm_idsItem[i]);
  
  tm_idsItem[i].addEventListener("click", function () {
    tm_idsItem.forEach(el => {
      el.classList.remove("tm-selected-dh");
    });
    //console.log("我就不执行。无论你点了没点。");
    tm_idsItem[i].classList.add("tm-selected-dh");
    right_click_scroll(i);
  });
}

function right_click_scroll(index) {
  if (index == 0) {
    window.scrollTo(100,1592);
  } else if (index == 1) {
    window.scrollTo(100,2659);
  } else if (index == 2) {
    window.scrollTo(100,8096);
  } else {
     window.scrollTo(100,11584);
  }
}

//top固定栏方法
function top_scroll(page) {
  if (page < 950) {
    tab_bar_box.style = "";
    srl_fff.style.height = "0";
    tabbar_bg.style.display = "none";
    tm_bd_side.style = "";
    tm_floatcart.style.display = "none";
    shop_intro_h3.style = "";
  } else {
    //width: 788px; position: fixed; top: 0px;
    tab_bar_box.style = "width: 788px; position: fixed; top: 0px;";
    srl_fff.style.height = "50px";
    tabbar_bg.style.display = "block";
    tm_bd_side.style = "position: fixed; top: 0px; right:357px";
    tm_floatcart.style.display = "block"; 
    shop_intro_h3.style = "position: fixed; top: 0px; width: 184px;";
  }
}
function scroll_tiaozhuan(page) {
  tm_idsItem.forEach(el => {
    el.classList.remove("tm-selected-dh");
  });
  if (page < 1592 ) {
    tm_idsItem[0].classList.add("tm-selected-dh");
  } else if (page < 2659) {
    tm_idsItem[1].classList.add("tm-selected-dh");
  } else if (page < 8096) {
    tm_idsItem[2].classList.add("tm-selected-dh");
  } else {
    tm_idsItem[3].classList.add("tm-selected-dh");
  }
}


window.addEventListener("scroll", function () {
  //console.log("window.pageYOffset", window.pageYOffset);
  let page = window.pageYOffset;
  top_scroll(page);
  scroll_tiaozhuan(page)
});



/*点击事件， 切换商品详细 规格参数 累计评价 */

let tab_bar_li = document.querySelectorAll(".tab-bar li");
//console.log(tab_bar_li);
for (let i = 0; i < tab_bar_li.length-1; i++) {
  tab_bar_li[i].addEventListener("click", function () {
    tab_bar_li.forEach(el => {
      el.classList.remove("tm-selected");
    });
    tab_bar_li[i].classList.add("tm-selected");
  });
}

//商品详细的东西  attributes
let attributes = document.getElementsByClassName("attributes")[0];
let J_DcTopRightWrap = document.getElementsByClassName("J_DcTopRightWrap")[0];
let description = document.getElementById("description");
let col_extra = document.getElementsByClassName("col-extra")[0];
let tm_descCate = document.getElementsByClassName("tm-descCate")[0];
// 规格参数中的东西
let J_Attrs = document.getElementById("J_Attrs");

// 累计评价的东西
let pinglun = document.getElementsByClassName("pinglun")[0];

tab_bar_li[0].onclick = function () {
  attributes.style.display = "block";
  J_DcTopRightWrap.style.display = "blcok";
  description.style.display = "block";
  J_Attrs.classList.remove("tm-curTab");
  pinglun.style.display = "block";
  col_extra.style.backgroundColor = "#fafafa"; 
  tm_descCate.style.display = "block";
}

tab_bar_li[1].onclick = function () {
  J_Attrs.classList.add("tm-curTab");
  attributes.style.display = "none";
  J_DcTopRightWrap.style.display = "none";
  pinglun.style.display = "none";
  description.style.display = "none";
  col_extra.style.backgroundColor = "#fff"; 
  tm_descCate.style.display = "none";
}

tab_bar_li[2].onclick = function () { 
  
  J_Attrs.classList.remove("tm-curTab");
  attributes.style.display = "none";
  J_DcTopRightWrap.style.display = "none";
  pinglun.style.display = "block";
  description.style.display = "none";
  col_extra.style.backgroundColor = "#fff"; 
  tm_descCate.style.display = "none";
}



/* 商检店铺商品大全点击事件 */

function jianhao_click() {
  this.classList.remove("icon-jianhao");
  this.classList.add("icon-jiahao");
  let this_parent = this.parentNode.parentNode;
  //console.log(this_parent);
  let bb_ul = this_parent.getElementsByClassName("fst-cat-bd")[0];
  bb_ul.style.display = "none";
  this.removeEventListener("click", jianhao_click);
  this.addEventListener("click", jiahao_click);
}

function jiahao_click() {
  this.classList.remove("icon-jiahao");
  this.classList.add("icon-jianhao");
  let this_parent = this.parentNode.parentNode;
  //console.log(this_parent);
  let bb_ul = this_parent.getElementsByClassName("fst-cat-bd")[0];
  bb_ul.style.display = "block";
  this.removeEventListener("click", jiahao_click);
  this.addEventListener("click", jianhao_click);
}

//减号的事件
let icon_jianhao = document.getElementsByClassName("icon-jianhao");
for (let i = 0; i < icon_jianhao.length; i++) {
  icon_jianhao[i].addEventListener("click", jianhao_click);
}

//加号事件
let icon_jiahao = document.getElementsByClassName("icon-jiahao");
for (let i = 0; i < icon_jiahao.length; i++) {
  icon_jiahao[i].addEventListener("click", jiahao_click);
}


// 配送地点选择
address_list = 
  [
    {
      "广州": [
        ["天河区", "白云区", "花都区"]
      ]
    },
    {
      "梅州": [
        ["兴宁市", "梅县区", "五华县", "丰顺县"]
      ]
    }
  ]



let address_warp = document.getElementsByClassName("address_warp")[0];
let address_title = document.getElementsByClassName("address_title");
let address_name = document.getElementsByClassName("address_name");
let address_content = document.getElementsByClassName("address_content")[0];

//配送地点
let cu_po = document.getElementsByClassName("cu-po");
//console.log(cu_po);

let tb_postAge = document.querySelectorAll(".tb-postAge span")[1];
tb_postAge.addEventListener("click", function () {
  address_warp.style.display = "block";
})

console.log(address_name);

function render_data(data,city_name) {
  address_content.innerHTML = "";
  cu_po[0].innerHTML = "";
  cu_po[1].innerHTML = "";
  data.forEach(el => {
    let li_html = document.createElement("li");
    li_html.classList.add("address_name");
    li_html.innerHTML = el;
    console.log(li_html);
    address_content.append(li_html)
    
    
    li_html.addEventListener("click", function () {
      address_warp.style.display = "none";
      //address_warp.style.display = "none";
      cu_po[0].innerHTML = `&nbsp; ${city_name} <i class="iconfont icon-xia-copy"></i>`;
      cu_po[1].innerHTML = `&nbsp; ${el} <i class="iconfont icon-xia-copy"></i>`;
    });
  });
}

function render_city(index) {
  console.log(address_name);
  let this_city_name = address_name[index].innerHTML;
  console.log("this_city_name",this_city_name);
  for (let i = 0; i < address_list.length; i++) {
    let city_name = Object.keys(address_list[i])[0];
    console.log("city_name",city_name);
    if (city_name == this_city_name) {
      //console.log("我判断成功了",city_name);
      let area_name_list = address_list[i][city_name][0];
      //console.log("area_name",area_name);
      address_title[1].innerHTML = "";
      address_title[1].innerHTML = city_name;
      render_data(area_name_list,city_name);
    }
  }
}

for (let i = 0; i < address_name.length; i++) {
  address_name[i].addEventListener("click", function () {
    render_city(i);
  });
}

address_title[0].addEventListener("click", function () {
  address_content.innerHTML = "";
  for (let i = 0; i < address_list.length; i++) {
    let city_name = Object.keys(address_list[i])[0];
    let li_html = document.createElement("li");
    li_html.classList.add("address_name");
    li_html.innerHTML = city_name;
    //console.log(li_html);
    address_content.append(li_html)
  }

  let address_name = document.getElementsByClassName("address_name");
  for (let i = 0; i < address_name.length; i++) {
    address_name[i].addEventListener("click", function () {
      render_city(i);
    });
  }
});

