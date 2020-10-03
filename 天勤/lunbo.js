var left = document.getElementById("i-left");
var right = document.getElementById("i-right");
var img = document.getElementById("lunbo-img");
var lunbo = document.getElementById("lunbo");
var li = document.querySelectorAll(".xiaoquan ul li");
//console.log(li)
var img_arry = ["./images/bot-1.png", "./images/bot-2.png", "./images/bot-3.png", "./images/bot-4.png",
  "./images/bot-5.png", "./images/bot-6.png"];
var num = 0;
var timer = null;

left.onclick = function () {
  num--;
  if (num == -1) {
    num = 6;
  }
  changeImg();
}

right.onclick = function () {
  num++;
  if (num == img_arry.length) {
    num = 0;
  }
  changeImg();
}

for (var i = 0; i < img_arry.length; i++) {

  li[i].index = i;
  //console.log('输出', li[i] + '输出i', i)
  li[i].onclick = function (ev) {

    num = this.index;

    changeImg();

  }

}

//当点击小圆圈跳转页面后，延迟一秒执行自动切换
setTimeout(autoPlay(), 2000);


//当鼠标滑入的时候清空事件
lunbo.onmouseover = function (ev) {

  clearInterval(timer);

};

lunbo.onmouseout = autoPlay;

function changeImg() {
  img.src = img_arry[num];//改变图片src位置
  for (var i = 0; i < li.length; i++) {//改变原点样式
    li[i].className = "";
  }
  li[num].className = "active";

}

//设置定时器
function autoPlay() {
  timer = setInterval(function () {
    num++;
    //求余自己的数组长度，当num=数组长度时， num=0
    num %= img_arry.length;
    //console.log('定时器中的num:', num)
    changeImg();
  }, 2000)
}
