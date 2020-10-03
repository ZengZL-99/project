
var lis = document.getElementsByClassName("nav-huakuai");
//console.log(lis)
var btm = document.getElementsByClassName("btm")[0];
//console.log(btm)
for (var i = 0; i < lis.length; i++) {
  lis[i].index = i;
  //console.log(i)
}
for (var i = 0; i < lis.length; i++) {
  lis[i].onmouseenter = function () {
    btm.style.left = 164 + 88 * -(this.index - 4) + "px";
  }
}

//读取网络源json文件
var week
var week_xAxis
var month
var month_xAxis

//1.创建ajax引擎对象----所有操作都是由ajax引擎完成
var xmlhttp_week = new XMLHttpRequest();
//2.为引擎对象绑定监听事件 onreadystatechange
xmlhttp_week.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    //  JSON.parse() 方法 把文本转换为 JavaScript 对象
    myObj = JSON.parse(this.responseText);
    //赋值对象
    week = myObj.data.series;
    week_xAxis = myObj.data.xAxis;
  }
};
xmlhttp_week.open("GET", "https://edu.telking.com/api/?type=week", false);
xmlhttp_week.send();
//console.log("week:", week);
//console.log("week_xAxis:", week_xAxis);



var xmlhttp_month = new XMLHttpRequest();
xmlhttp_month.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {

    myObj = JSON.parse(this.responseText);
    month = myObj.data.series;
    month_xAxis = myObj.data.xAxis;
  }
};
xmlhttp_month.open("GET", "https://edu.telking.com/api/?type=month", false);
xmlhttp_month.send();
//console.log("month:", month);
//console.log("month_xAxis:", month_xAxis);


var week_arry = [];
for (var i = 0; i < week.length; i++) {
  var dict = { 'value': week[i], 'name': week_xAxis[i] }
  week_arry.push(dict)
}

//Initialize failed: invalid dom错误
//参考文档https://blog.csdn.net/xb_2015/article/details/85337187

//line 图
var myChart_line = echarts.init(document.getElementById("main-line"))
var option_line = {
  title: {
    text: "曲线图数据 展示",
    left: 'center',
    top: '20'
  },
  xAxis: {
    type: 'category',
    data: month_xAxis,

  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      formatter: '{value}人'
    },
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  },
  series: [{
    data: month,
    type: 'line',
    smooth: 0.3,
    lineStyle: {
      color: '#4587ef'
    },
    areaStyle: {
      color: "#f3f6fd"
    }

  }]
};
myChart_line.setOption(option_line)

var myChart_pie = echarts.init(document.getElementById("main-pie"));
var option_pie = {
  title: {
    text: '饼状图数据展示',
    left: 'center',
    top: '47'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: week_arry,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
myChart_pie.setOption(option_pie);


var myChart_bar = echarts.init(document.getElementById("main-bar"));
var option_bar = {
  color: ['#3398DB'],
  title: {
    text: "柱状图展示",
    left: 'center',
    top: '27'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: week_xAxis,
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '商品数',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    }
  ],
  series: [
    {
      name: '商品数',
      type: 'bar',
      barWidth: '60%',
      data: week
    }
  ]
};

myChart_bar.setOption(option_bar);


