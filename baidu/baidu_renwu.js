//定义一些初始化的长度
all_pjt_list = ["百度IFE项目", "毕业设计", "默认分类"];
all_pjt_subtitle = ["task1", "task2", "task3", "task4", "task5", "task6", "task7", "task8", "task9"];

let Data = [
  {
    "百度IFE项目": [
      {
        "task1": [
          {
            "2020-04-28": [
              ["to-do 1", "哈哈哈哈","no"],
              ["to-do 2", "噢噢噢噢","yes"]
            ]
          }
        ]
      },
      {
        "task2": [
          {
            "2020-05-03": [
              ["to-do 3", "我是to-do-3","no"],
              ["to-do 4", "我是to-do-4","no"]
            ]
          },
          {
            "2020-05-04": [
              ["to-do 5", "我是to-do-5","yes"],
              ["to-do 6", "我是to-do-6","no"],
              ["to-do 9", "我是to-do-9","yes"]
            ]
          }
          
        ]
      }
    ]
  },
  {
    "毕业设计": [
      {
        "task3": [
          {
            "2020-05-05": [
              ["to-do 7", "哈无人区无人情味若哈","no"],
              [ "to-do 8", "噢哇绕","yes"],
            ]
          }
        ]
      }
    ]
  },
  {
    "默认分类": []
  }
]

/*
for (let i in Data) {
  for (let k in i) {
    console.log("key", i);
    console.log("value",i[k]);
  }
}*/

/*获取整个的数据长度 */
function get_length() {
  let num = 0;
  for (let i = 0; i < Data.length; i++) {
    let name = Object.keys(Data[i])[0];
    for (let t = 0; t < Data[i][name].length; t++) {
      let pjt_name = Object.keys(Data[i][name][t])[0];
      for (let p = 0; p < Data[i][name][t][pjt_name].length; p++) {
        let title_date = Object.keys(Data[i][name][t][pjt_name][p])[0];
        //console.log(Data[i][name][t][pjt_name][p][title_date].length);
        num += Data[i][name][t][pjt_name][p][title_date].length;  
      }
    }
  }
  //console.log("长度为:",num);
  return num;
}

get_length();
//获取每个类的长度
function get_lei_length(name) {
  let lei_list = [];
  for (let i = 0; i < Data.length; i++) {
    let name = Object.keys(Data[i])[0];
    let num = 0;
    for (let t = 0; t < Data[i][name].length; t++) {
      let pjt_name = Object.keys(Data[i][name][t])[0];
      //console.log(pjt_name);
      for (let p = 0; p < Data[i][name][t][pjt_name].length; p++) {
        let title_date = Object.keys(Data[i][name][t][pjt_name][p])[0];
        //console.log(Data[i][name][t][pjt_name][p][title_date].length);
        num += Data[i][name][t][pjt_name][p][title_date].length;
        //console.log("当前num：",num);
      }
      //console.log("打印输出对象",[pjt_name, num]);
    }
    lei_list.push([name, num]);
  }
  //console.log("长度列表",lei_list);
  for (let l = 0; l < lei_list.length; l++) {
    if (lei_list[l][0] == name) {
      //console.log("判断成功类！", lei_list[l][1]);
      return lei_list[l][1];
    }
  }
}

//get_lei_length("百度IFE项目")

/*获取每个子类的长度*/
function get_zilei_length(name) {
  let num_list = [];
  for (let i = 0; i < Data.length; i++) {
    let name = Object.keys(Data[i])[0];
    for (let t = 0; t < Data[i][name].length; t++) {
      let pjt_name = Object.keys(Data[i][name][t])[0];
      //console.log(pjt_name);
      let num = 0;
      for (let p = 0; p < Data[i][name][t][pjt_name].length; p++) {
        let title_date = Object.keys(Data[i][name][t][pjt_name][p])[0];
        //console.log(Data[i][name][t][pjt_name][p][title_date].length);
        num += Data[i][name][t][pjt_name][p][title_date].length;
        //console.log("当前num：",num);
      }
      //console.log("打印输出对象",[pjt_name, num]);
      num_list.push([pjt_name, num]);
    }
  }
  //console.log("长度为:", num_list);
  for (let n = 0; n < num_list.length; n++) {
    //console.log("num_list[n][0]:", num_list[n][0]);
    //console.log("名字",name);
    if (num_list[n][0] == name) {
      //console.log("判断成功！");
      return num_list[n][1];
    }
    
  }
}
//console.log("task1:",get_zilei_length("task1")); 

/*渲染初始化数据*/
//给标题一个总数据
document.getElementById("all-pjt-length").innerHTML = "("+ get_length() + ")";

function Start_XuanRan() {
  for (let i = 0; i < Data.length; i++) {
    //console.log(Object.keys(Data[i])[0]);
    let name = Object.keys(Data[i])[0];
    //console.log(Data[i]); 
    append_fl_bd(name);
    for (let t = 0; t < Data[i][name].length; t++) {
      let pjt_name = Object.keys(Data[i][name][t])[0];
      //console.log("我爱我", pjt_name);
      //console.log(pjt_name.length);
      append_pjt_bd(pjt_name)
      //console.log(Object.keys(Data[i][name][t])[0]);
      //console.log(Object.keys(Data[i][t])[0]);
    }
  }
}
//调用渲染分类列表的函数
Start_XuanRan();

function append_fl_bd(bd_name) {
  let div_hd = document.createElement("div");
  let all_pjt = document.getElementById("all_pjt");
  div_hd.classList.add("fl-bd");
  div_hd.innerHTML = '<div class="fl-pjt">' +
    '<div class="pjt-hd">' +
    '<span>' +
    '<i class="iconfont icon-mulu"></i>' +
    '<span class="hd-name">' + bd_name +
    '</span > ' +
    '<i class="subtitle-length">(' + get_lei_length(bd_name) + ')</i>' +
    '<i class="iconfont icon-xinjianrenwu"></i>' +
    '<i class="iconfont icon-cha" id="drop_fl"></i>' +
    '</span></div></div>';
  all_pjt.append(div_hd);
}


//'<i class="iconfont icon-chushaixuanxiang" style=""></i>'
function append_pjt_bd(pjt_bd) {
  let fl_pjt = document.getElementsByClassName("fl-pjt"); 
  let bd_title = document.createElement("div"); 
  bd_title.classList.add("pjt-bd");
  bd_title.innerHTML = '<span>' +
    '<i class="iconfont icon-wenjian"></i>' +
    '<i>' + pjt_bd + '</i>' + 
    '<i>('+ get_zilei_length(pjt_bd)+')</i>' +
    '<span class="iconfont icon-chushaixuanxiang"><span>'+
    '</span> ';
  fl_pjt[fl_pjt.length - 1].append(bd_title);
}


/*渲染初始化 end*/

/*删除分类事件*/
let drop_fl = document.getElementsByClassName("icon-cha");
//console.log(drop_fl);
for (let i = 0; i < drop_fl.length; i++){
  drop_fl[i].addEventListener('click', drop_pjt);
  function drop_pjt() {
    //console.log(i)
    console.log(this);            
    let r = confirm("你确定要删除该项目吗？");
    if (r == true) {
      let drop_div = this.parentNode.parentNode.parentNode.parentNode;
      //console.log(drop_fl.length);
      
      
      let drop_class_name = drop_div.getElementsByClassName("hd-name")[0].innerHTML;
      console.log("他爸爸的爸爸",drop_class_name);
      for (let i = 0; i < Data.length; i++) {
        let class_name = Object.keys(Data[i])[0];
        if (class_name == drop_class_name) {
          Data.splice(i,1);
        }
      }
      document.getElementById("all-pjt-length").innerHTML = get_length();
      drop_div.parentNode.removeChild(drop_div);
    }
  }
}

/*删除子类*/
let drop_zi_fl = document.getElementsByClassName("icon-chushaixuanxiang");
for (let i = 0; i < drop_zi_fl.length; i++){
  drop_zi_fl[i].addEventListener('click', drop_zi_title);
}
function drop_zi_title() {
  //console.log(i)
  console.log(this);            
  let r = confirm("你确定要删除该子任务吗？");
  if (r == true) {
    let drop_div_bd = this.parentNode.parentNode;
    let drop_subclass_name = this.parentNode.parentNode.getElementsByTagName("i")[1].innerHTML;
    //console.log(drop_fl.length);
    //console.log(drop_fl.length);
    //let drop_subclass_name = document.querySelectorAll("#pjt-bd-id i");
    //let this_rw_title = document.querySelectorAll("#pjt-bd-id i");
    //console.log("wrawr",drop_subclass_name);
    //console.log("挖掘和",this_rw_title);
    for (let i = 0; i < Data.length; i++) {
      let class_name = Object.keys(Data[i])[0];
      for (let j = 0; j < Data[i][class_name].length; j++) {
        let subclass_name = Object.keys(Data[i][class_name][j])[0];
        console.log("subclass:", subclass_name, "drop_subclass_name", drop_subclass_name);
        console.log("Data[i][class_name]:", Data[i][class_name]);
        if (subclass_name == drop_subclass_name) {
          console.log("我删除了的东西", Data[i][class_name][j],"J=",j);
          Data[i][class_name].splice(j,1);
          //delete Data[i][class_name][j].subclass_name;
          
          console.log("新的长度",get_lei_length(class_name));
          console.log("删除后的当前对象",this);
          this.parentNode.parentNode.parentNode.getElementsByClassName("subtitle-length")[0].innerHTML = "(" + get_lei_length(class_name) + ")";
          document.getElementById("all-pjt-length").innerHTML = "(" + get_length() + ")";
          
        }
      }
    }
    drop_div_bd.parentNode.removeChild(drop_div_bd);
    document.getElementsByClassName("rw-all")[0].innerHTML = "";
    // 任务详情页数据的删除
    // 任务详细页header-title删除
    document.querySelectorAll(".bj-hd h2")[0].innerHTML = "";
    document.querySelectorAll(".bj-hd ul")[0].style.display = "none";
    document.querySelectorAll(".bj-date h2 span i")[0].innerHTML = "";
    document.querySelectorAll(".bj-neirong .neirong-text")[0].innerHTML = "";
    /*
    document.querySelectorAll(".gt-renwu .rw-hd span")[0].style.display = "flex";
    //console.log(document.querySelectorAll(".gt-renwu .rw-hd span")[0]);
    document.querySelectorAll(".gt-renwu .rw-hd span")[1].style.display = "none";
    document.querySelectorAll(".gt-renwu .rw-hd span")[2].style.display = "none";*/
  }
}


/*添加分类*/
let add_fl = document.getElementById("add_fl");
let all_pjt = document.getElementById("all_pjt");
add_fl.addEventListener('click', add_fenlei_pjt);
function add_fenlei_pjt() {
  let pjt_name = prompt("请输入您的名字", "Bill Gates");
  if (pjt_name != null && pjt_name != '') {
    //把数据添加进Data中
    append_new_pjt = {};
    append_new_pjt[pjt_name] = [];
    Data.push(append_new_pjt);
    console.log('啊啊啊',Data[3]);
    let div_hd = document.createElement("div"); 
    div_hd.className = "fl-bd";
    div_hd.innerHTML = '<div class="fl-pjt">' +
      '<div class="pjt-hd">' +
      '<span>' +
      '<i class="iconfont icon-mulu" ></i>' +
      '<span class="hd-name">' + pjt_name +'</span > ' +
      '<i class="subtitle-length">(' + get_lei_length(pjt_name) + ')</i>' +
      '<i class="iconfont icon-xinjianrenwu"></i>' +
      '<i class="iconfont icon-cha" id="drop_fl"></i>' +
      '</span ></div></div>';
    all_pjt.append(div_hd);
    //给新增的分类 添加删除事件
    let drop_fl = document.getElementsByClassName("icon-cha");
    drop_fl[drop_fl.length - 1].addEventListener('click', drop_pjt);
    let new_class = document.getElementsByClassName("icon-xinjianrenwu");
    new_class[new_class.length - 1].addEventListener("click", append_subclass);
  }
}

/*添加子分类*/
let btn_subclass = document.getElementsByClassName("icon-xinjianrenwu");
for (let s = 0; s < btn_subclass.length; s++) {
  btn_subclass[s].addEventListener("click", append_subclass);
}
function append_subclass() {
  let new_subclass_name = prompt("请输入任务名字:", "task-n");
  if (new_subclass_name!= null && new_subclass_name != '') {
    let class_name = this.parentNode.getElementsByClassName("hd-name")[0];
    console.log(class_name.innerHTML);
    for (let d = 0; d < Data.length; d++) {
      let Data_class_name = Object.keys(Data[d])[0];
      console.log(Data_class_name);
      if (Data_class_name == class_name.innerHTML) {
        let dict_new_subclass = {};
        dict_new_subclass[new_subclass_name] = [];
        console.log(dict_new_subclass);
        Data[d][Data_class_name].push(dict_new_subclass);              
        let this_fl_pjt = this.parentNode.parentNode.parentNode; 
        let bd_title = document.createElement("div"); 
        bd_title.classList.add("pjt-bd");
        bd_title.innerHTML = '<span>' +
            '<i class="iconfont icon-wenjian"></i>' +
            '<i>' + new_subclass_name + '</i>' + 
            '<i>('+ get_zilei_length(new_subclass_name)+')</i>' +
            '<span class="iconfont icon-chushaixuanxiang"><span>'+
            '</span> ';
        this_fl_pjt.append(bd_title);
        bd_title.addEventListener("click", xuanran_rw);
        bd_title.getElementsByClassName("icon-chushaixuanxiang")[0].addEventListener("click", drop_zi_title)
      }
    }
    //document.getElementById("all_pjt").innerHTML = "";
  }
}



function click_title() {
  document.getElementsByClassName("gt-bianji")[0].style.display = "block";
  let all_title = document.querySelectorAll(".rw-title");
  for (let i = 0; i < all_title.length; i++) { 
    all_title[i].classList.remove('back-color-f2');
  }
  let list_class = this.classList.value;
  //console.log(q);
  this.classList.add("back-color-f2");
  //console.log(this.parentNode.getElementsByTagName("em")[0].innerHTML);
  let header = this.innerHTML;
  //console.log(this.parentNode.parentNode.parentNode.getElementsByClassName("date")[0].innerHTML);
  let riqi = this.parentNode.parentNode.parentNode.getElementsByClassName("date")[0].innerHTML;
  //console.log(this.innerHTML);
  let neirong = this.parentNode.getElementsByTagName("em")[0].innerHTML;
  if (list_class.indexOf("yes") != -1) {
    document.getElementsByClassName("icon-gou")[0].classList.remove("no");
    document.getElementsByClassName("icon-gou")[0].classList.add("yes");
  } else {
    document.getElementsByClassName("icon-gou")[0].classList.remove("yes");
    document.getElementsByClassName("icon-gou")[0].classList.add("no");
  }
  document.querySelectorAll(".bj-hd h2")[0].innerHTML = header;
  //console.log(document.querySelectorAll(".bj-date .riqi")[0]);
  document.querySelectorAll(".bj-date .riqi")[0].innerHTML = riqi;
  document.querySelectorAll(".bj-hd ul")[0].style.display = "block";
  document.querySelectorAll(".bj-neirong .neirong-text")[0].innerHTML = neirong;
}

/*点击分类中的子类，渲染到中间任务栏*/
let all_pjt_bd = document.getElementsByClassName("pjt-bd");
for (let i = 0; i < all_pjt_bd.length; i++) {
  all_pjt_bd[i].addEventListener("click", xuanran_rw);
}
function xuanran_rw () {
    document.querySelectorAll(".gt-renwu .rw-hd span")[0].style.display = "block";
    document.querySelectorAll(".gt-renwu .rw-hd span")[1].style.display = "block";
    document.querySelectorAll(".gt-renwu .rw-hd span")[2].style.display = "block";
    let all_pjt_bd = document.getElementsByClassName("pjt-bd");
    for (let z = 0; z < all_pjt_bd.length; z++) {
      all_pjt_bd[z].id = "";
    }
    //console.log("当前对象：",this);
    this.id = "pjt-bd-id";
    let this_title = this.getElementsByTagName("i")[1].innerHTML;
    //console.log(this_title);
    for (let i = 0; i < Data.length; i++) {
      //console.log(Object.keys(Data[i])[0]);
      let name = Object.keys(Data[i])[0];
      //console.log(Data[i]);
      for (let t = 0; t < Data[i][name].length; t++) {
        let pjt_name = Object.keys(Data[i][name][t])[0];
        if (pjt_name == this_title) {
          let rw_all = document.getElementById("rw-all");
          rw_all.innerHTML = "";
          for (let e = 0; e < Data[i][name][t][pjt_name].length; e++) {
            //let xr_data = Data[i][name][t][pjt_name][e];
            let date = Object.keys(xr_data = Data[i][name][t][pjt_name][e])[0];
            //console.log("key:", date);
            renwu_riqi(date);
            for (let x = 0; x < Data[i][name][t][pjt_name][e][date].length; x++) {
              //const element = array[x];
              let xr_data = Data[i][name][t][pjt_name][e][date][x]
              //console.log("");
              //console.log("xr_data撘完爱人",xr_data);
              renwu_data(xr_data)
            }
            //let xr_date = Data[i][name][t][pjt_name][e][date]
          }
          let all_title = document.querySelectorAll(".rw-title");
          //console.log(all_title);
          for (let q = 0; q < all_title.length; q++) {
            //console.log("对象all_title:",all_title[q]);
            all_title[q].addEventListener("click", click_title);
          }
        }
        //console.log(Object.keys(Data[i][name][t])[0]);
        //console.log(Object.keys(Data[i][t])[0]);
      }
    }
}


function renwu_riqi(date) {
  let rw_all = document.getElementById("rw-all");
  let div_rw_bd = document.createElement("div");
  div_rw_bd.classList.add("rw-bd");
  div_rw_bd.innerHTML =
    '<div class="rw-date">' +
    ' <p class="date">' + date + '</p>' +
    '</div>';
  rw_all.append(div_rw_bd);
}

function renwu_data(xr_data) {
  let rw_bd = document.getElementsByClassName("rw-bd");
  let div_name = document.createElement("div");
  div_name.classList.add("rw-name");
  div_name.innerHTML =
    '<div>' +
      '<p class="rw-title '+ xr_data[2] +'">' + xr_data[0] + '</p>' +
      '<em style="display: none;">' + xr_data[1] + '</em>' +
    '</div>';
  rw_bd[rw_bd.length - 1].append(div_name);
}

/**
 '<div class="rw-date">'+
    ' <p class="date">' + xr_data[2] + '</p>' +
  '</div>' +
    '<div class="rw-name">' +
      '<div>' +
          '<p class="rw-title">' + xr_data[0] + '</p>' +
          '<em style="display: none;">' + xr_data[1] + '</em>' +
      '</div>' +
  '</div>';
 */


/*新增任务*/
let add_renwu = document.getElementById("add-renwu");
let new_renwu = document.getElementById("new-renwu");

add_renwu.onclick = function () {
  new_renwu.style.display = "block";
  let date_time = new Date(); 
  let Year = date_time.getFullYear();
  let Month = date_time.getMonth() + 1;
  let Day = date_time.getDay();
  let this_date = Year + "-" + Month + "-" + Day;
  document.getElementById("new-rw-date").valueAsDate = new Date();
  console.log(this_date);
}

/* 输入任务信息*/
let btn_yes = document.getElementById("yes");
let btn_no = document.getElementById("no");
let rw_all = document.getElementById("rw-all")
//点击取消，隐藏窗口
btn_no.onclick = function () {
  new_renwu.style.display = "none";
}

//点击确定，保存数据 并且隐藏窗口
btn_yes.onclick = function () {
  let new_rw_date = document.getElementById("new-rw-date");
  //console.log(new_rw_date.value);
  let new_rw_title = document.getElementById("new-rw-title");
  //console.log(new_rw_title.value);
  let new_rw_text = document.getElementById("new-rw-text");
  //console.log(new_rw_text.value);
  let new_div_rw = document.createElement("div");

  // 将新增数据 push进Data
  let this_rw_title = document.querySelectorAll("#pjt-bd-id i")[1].innerHTML;
  let all_pjt_name = []
  let www = 0;
  for (let i = 0; i < Data.length; i++) {
    //console.log(Data);
    //console.log(Object.keys(Data[i])[0]);
    let name = Object.keys(Data[i])[0];
    //console.log(Data[i]); 
    //append_fl_bd(name);
    // 给没有任何日期数据的新任务项目做特殊化处理
    for (let t = 0; t < Data[i][name].length; t++) {      
      let pjt_name = Object.keys(Data[i][name][t])[0];
      all_pjt_name.push(pjt_name);
      console.log('名字:',pjt_name);
      if (this_rw_title == pjt_name) {
        //console.log("判断成功:", this_rw_title + "and" + pjt_name);
        //console.log("长度:",Data[i][name][t][pjt_name].length);
        let riqi_list = [];
        for (let r = 0; r < Data[i][name][t][pjt_name].length; r++) {
          //console.log("你为什么不执行这块代码");
          //console.log("r的长度",Data[i][name][t][pjt_name].length);

          let rw_date = Object.keys(Data[i][name][t][pjt_name][r])[0];
          
          riqi_list.push(rw_date);
          //console.log("rw_data:",rw_date);
          //console.log(new_rw_date.value);
        }
        for (let r = 0; r < Data[i][name][t][pjt_name].length; r++) {
          let rw_date = Object.keys(Data[i][name][t][pjt_name][r])[0];
          //console.log("new_rw_date", new_rw_date.value + "rw_date", rw_date);
          //console.log("我在判断:",riqi_list.indexOf(new_rw_date.value));
          if (riqi_list.indexOf(new_rw_date.value) == -1) {
            let subtitle_date = new_rw_date.value;
            console.log(subtitle_date)
            /*let add_shuju = [
              {
                subtitle_date : [
                  
                ]
              }
            ];*/
            var o = {}
            o[subtitle_date] = [[new_rw_title.value, new_rw_text.value,"no"]];
            
            //console.log("为什么添加不进去",o);
            Data[i][name][t][pjt_name].push(o);
            www += 1;
            break;
          } else if (new_rw_date.value == rw_date) {
            www += 1;
            //console.log("我执行了后面的这个");
            Data[i][name][t][pjt_name][r][rw_date].push([new_rw_title.value, new_rw_text.value,"no"]);
            break;
         }
        }
      }
    }
  }
  //console.log("总列表:", all_pjt_name);
  //console.log("判断？：", all_pjt_name.indexOf(this_rw_title));
  //console.log(www);
  if (www == 0) {
    let this_pjt_title = document.querySelectorAll("#pjt-bd-id i")[1].parentNode.parentNode.parentNode.getElementsByClassName("hd-name")[0].innerHTML;
    let task_xiangxi = {};
    task_xiangxi[new_rw_date.value] = [[new_rw_title.value, new_rw_text.value,"no"]]
    //console.log((this_rw_title));
    //console.log("我执行了当原数据中没有我的存在的时候！应该执行的代码！");
    for (let u = 0; u < Data.length; u++) {
      let name = Object.keys(Data[u])[0];
      //console.log("Data[u][name]",Data[u][name]);
      if (name == this_pjt_title) {
        for (let q = 0; q < Data[u][name].length; q++) {
          let pjt_name = Object.keys(Data[u][name][q])[0];
          //console.log("pjt_name",pjt_name);
          if (pjt_name == this_rw_title) {
            //console.log("this_rw_title",this_rw_title,"pjt_name",pjt_name);
            //console.log(Data[u][this_pjt_title][q][this_rw_title]);
            //console.log("task_xiangxi",task_xiangxi);
            Data[u][this_pjt_title][q][this_rw_title].push(task_xiangxi)
            break;
          }
          
        }
      }
    }
  }
  /*
  console.log("总列表:",all_pjt_name);
    for (let t = 0; t < Data[i][name].length; t++) {
      console.log("我每次的判断：",all_pjt_name.indexOf(this_rw_title),"我的this_rw_title",this_rw_title,"all_pjt_list",all_pjt_name);
      if (all_pjt_name.indexOf(this_rw_title) == -1) {
        let task_xiangxi = {};
        task_xiangxi[new_rw_date.value] = [[new_rw_title.value, new_rw_text.value, "no"]]
        console.log((this_rw_title));
        console.log("我执行了当原数据中没有我的存在的时候！应该执行的代码！");
        console.log(Data[i][name][t]);
        Data[i][name][t][this_rw_title][0].push(task_xiangxi)
      }
    }
  */
  /*新增一个给Data按日期排序的函数*/
  function Sort_Data_date() {
    for (let i = 0; i < Data.length; i++) {
      let class_name = Object.keys(Data[i])[0];
      for (let s = 0; s < Data[i][class_name].length; s++) {
        let subclass_name = Object.keys(Data[i][class_name][s])[0];
        console.log("subclass_name:", subclass_name);
        console.log("排序之前的数据,",Data[i][class_name][s][subclass_name]) ;
        Data[i][class_name][s][subclass_name].sort(function (a, b) {
          return Object.keys(a)[0]>Object.keys(b)[0] ? 1 : -1;;
        });
        console.log("排序后的数据,",Data[i][class_name][s][subclass_name]) ;
        //let subclass_date = Object.keys(Data[i][class_name][s][subclass_name][d])[0];
        //console.log(subclass_date);  
      }  
    }
  }
  //调用Sort_Data_date 按创建日期排序
  Sort_Data_date()
  
  let pjt_bd_id = document.getElementById("pjt-bd-id");
  function add_xuanran() {
    let this_title = pjt_bd_id.getElementsByTagName("i")[1].innerHTML;
    //console.log(this_title);
    //重新给任务长度渲染  调用 get_length函数。
    let this_pjt_name = pjt_bd_id.parentNode.getElementsByClassName("hd-name")[0].innerHTML
    document.getElementById("all-pjt-length").innerHTML = get_length();
    pjt_bd_id.parentNode.getElementsByClassName("subtitle-length")[0].innerHTML = "(" + get_lei_length(this_pjt_name) + ")";
    pjt_bd_id.getElementsByTagName("i")[2].innerHTML = "("+get_zilei_length(this_title)+")";
    for (let i = 0; i < Data.length; i++) {
      //console.log(Object.keys(Data[i])[0]);
      let name = Object.keys(Data[i])[0];
      //console.log(Data[i]);
      for (let t = 0; t < Data[i][name].length; t++) {
        let pjt_name = Object.keys(Data[i][name][t])[0];
        if (pjt_name == this_title) {
          let rw_all = document.getElementById("rw-all");
          rw_all.innerHTML = "";
          for (let e = 0; e < Data[i][name][t][pjt_name].length; e++) {
            //let xr_data = Data[i][name][t][pjt_name][e];
            let date = Object.keys(xr_data = Data[i][name][t][pjt_name][e])[0];
            //console.log("key:", date);
            renwu_riqi(date);
            for (let x = 0; x < Data[i][name][t][pjt_name][e][date].length; x++) {
              //const element = array[x];
              let xr_data = Data[i][name][t][pjt_name][e][date][x]
              //console.log("");
              //console.log("xr_data撘完爱人",xr_data);
              renwu_data(xr_data)
            }
            //let xr_date = Data[i][name][t][pjt_name][e][date]
          }
          let all_title = document.querySelectorAll(".rw-title");
          //console.log(all_title);
          for (let q = 0; q < all_title.length; q++) {
            //console.log("对象all_title:",all_title[q]);
            all_title[q].addEventListener("click", click_title);
          }
        }
        //console.log(Object.keys(Data[i][name][t])[0]);
        //console.log(Object.keys(Data[i][t])[0]);
      }
    }
  }
  //调用用户点击确定后 重新渲染一次数据
  add_xuanran();
  /*
  console.log(this_rw_title);
  new_div_rw.className = "rw-bd";
  new_div_rw.innerHTML =
    '<div class="rw-date">' +
    '<p class="date">' + new_rw_date.value + '</p>' +
    '</div>' +
    '<div class="rw-name">' +
    '<div>'+
    '<p class="rw-title">' + new_rw_title.value + '</p>' +
    '<em style="display: none;">'+new_rw_text.value+'</em>'
    '</div>'+
    '</div>';
  rw_all.append(new_div_rw);*/
  new_renwu.style.display = "none";
  //清空上次输入的任务数据
  new_rw_date.value = "";
  new_rw_title.value = "";
  new_rw_text.value = "";

  /*
  let all_title = document.querySelectorAll(".rw-title");
  all_title[all_title.length-1].addEventListener('click', click_title);*/
  
}

/*用户点击任务标题 查看具体内容 */


/* 用户点击完成任务按钮*/
let wancheng = document.getElementsByClassName("icon-gou")[0];
//console.log(wanccheng.innerHTML);
wancheng.onclick = function () {
  //console.log(this.style.value);
  let css_class = wancheng.classList.value;
  console.log(css_class);
  if (css_class.indexOf("yes") == -1) {
    console.log("我判断成功了：",document.getElementsByClassName("icon-gou")[0].classList)
    document.getElementsByClassName("icon-gou")[0].classList.remove("no");
    document.getElementsByClassName("icon-gou")[0].classList.add("yes");
  } else {
    console.log("我判断失败了：",document.getElementsByClassName("icon-gou")[0].classList)
    document.getElementsByClassName("icon-gou")[0].classList.remove("yes");
    document.getElementsByClassName("icon-gou")[0].classList.add("no");
  }
  let xuanzhong = document.getElementsByClassName("back-color-f2")[0];
  //console.log(xuanzhong.classList.value.indexOf("yes"));

  let this_rw_title = document.querySelectorAll("#pjt-bd-id i")[1].innerHTML;
  
  function xiugai_status(status){
    for (let i = 0; i < Data.length; i++) {
      let name = Object.keys(Data[i])[0];
      for (let t = 0; t < Data[i][name].length; t++) {
        let pjt_name = Object.keys(Data[i][name][t])[0];
        if (this_rw_title == pjt_name) {
          for (let r = 0; r < Data[i][name][t][pjt_name].length; r++) {
            let rw_date = Object.keys(Data[i][name][t][pjt_name][r])[0];
            for (let b = 0; b < Data[i][name][t][pjt_name][r][rw_date].length; b++) {
              let shuju_list = Data[i][name][t][pjt_name][r][rw_date][b];
              //console.log("原标题",shuju_list[0],"当期标题",xuanzhong.innerHTML);
              if (shuju_list[0] == xuanzhong.innerHTML) {
                Data[i][name][t][pjt_name][r][rw_date][b][2] = status;
                break;
              }            
            }
          }
            
        }
      }
    }
  }


  if (xuanzhong.classList.value.indexOf("yes") == -1) {
    xuanzhong.classList.remove("no");
    xuanzhong.classList.add("yes");
    xiugai_status("yes");
  } else {
    xuanzhong.classList.remove("yes");  
    xuanzhong.classList.add("no");
    xiugai_status("no");
  }
}

/*当用户筛选完成和未完成的部分处理 */
let sx_span = document.querySelectorAll(".rw-hd span");
for (let i = 0; i < sx_span.length; i++) {
  sx_span[i].addEventListener("click", click_span);
  function click_span() {
    for (let i = 0; i < sx_span.length; i++) {
      sx_span[i].classList.remove("select_rw");
    }
    this.classList.add("select_rw");
  }
}

let span_all = document.getElementById("span-all");
span_all.onclick = function () {
  let all_title = document.querySelectorAll(".rw-title");
  for (let i = 0; i < all_title.length; i++) {
    all_title[i].style.display = "block";
  }
}


let span_yes = document.getElementById("span-yes");
//console.log(span_yes);
span_yes.onclick = function () {
  let all_title = document.querySelectorAll(".rw-title");

  for (let i = 0; i < all_title.length; i++) {
    //console.log("all_title[i]",all_title[i].classList);
    if (all_title[i].classList.value.indexOf("yes") != -1) {
       all_title[i].style.display = "block";
    } else {
      all_title[i].style.display = "none";
    }
    
  }
}
let span_no = document.getElementById("span-no");
span_no.onclick = function () {
  let all_title = document.querySelectorAll(".rw-title");
  for (let i = 0; i < all_title.length; i++) {
    if (all_title[i].classList.value.indexOf("no") != -1) {
       all_title[i].style.display = "block";
    } else {
      all_title[i].style.display = "none";
    }
    
  }
}


/*用户点击编辑按钮  修改数据*/
let bj_xiugai = document.getElementsByClassName("icon-bianji")[0];
bj_xiugai.onclick = function () {
  let xiugai_neirong = document.getElementsByClassName("xiugai-neirong")[0];
  let neirong_text = document.getElementsByClassName("neirong-text")[0];
  neirong_text.style.display = "none";
  let text_neirong = document.querySelectorAll(".xiugai-neirong")[0];
  //console.log(text_neirong);
  text_neirong.style.display = "block";
  document.querySelectorAll(".xiugai-neirong textarea")[0].value = neirong_text.innerHTML;
  
  let btn_xiugai = document.getElementById("xiugai-text-data");
  btn_xiugai.onclick = function () {
    let xiugai_window = document.querySelectorAll(".xiugai-neirong")[0];
    let xuanzhong = document.getElementsByClassName("back-color-f2")[0];
    
    //console.log(xuanzhong.classList.value.indexOf("yes"));

    let this_rw_title = document.querySelectorAll("#pjt-bd-id i")[1].innerHTML;
    
    function update_text(text){
      for (let i = 0; i < Data.length; i++) {
        let name = Object.keys(Data[i])[0];
        for (let t = 0; t < Data[i][name].length; t++) {
          let pjt_name = Object.keys(Data[i][name][t])[0];
          if (this_rw_title == pjt_name) {
            for (let r = 0; r < Data[i][name][t][pjt_name].length; r++) {
              let rw_date = Object.keys(Data[i][name][t][pjt_name][r])[0];
              for (let b = 0; b < Data[i][name][t][pjt_name][r][rw_date].length; b++) {
                let shuju_list = Data[i][name][t][pjt_name][r][rw_date][b];
                //console.log("原标题",shuju_list[0],"当期标题",xuanzhong.innerHTML);
                if (shuju_list[0] == xuanzhong.innerHTML) {
                  Data[i][name][t][pjt_name][r][rw_date][b][1] = text;
                  break;
                }            
              }
            }
          }
        }
      }
    }
    let neirong_text = document.getElementsByClassName("neirong-text")[0];
    //console.log(neirong_text,"和up_text");
    let up_text = document.querySelectorAll(".xiugai-neirong textarea")[0];
    update_text(up_text.value);
    neirong_text.innerHTML = up_text.value;
    xuanzhong.parentNode.getElementsByTagName("em")[0].innerHTML = up_text.value;
    up_text.value = "";
    xiugai_window.style.display = "none";
    neirong_text.style.display = "block";
    
    console.log("我已经执行完了！");
  }
  //xiugai_neirong.value = "";
  
}





/*
<div class="rw-bd">
            <div class="rw-date">
              <p>2015-05-04</p>
            </div>
            <div class="rw-name">
              <p>to-do&nbsp;7</p>
            </div>
          </div>
           */




