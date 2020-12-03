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
              ["to-do 3", "大大大大啊","no"],
              ["to-do 4", "大大大大啊","no"]
            ]
          }, 
          {
            "2020-10-28": [
              ["to-do 3", "大大大大啊","no"],
              ["to-do 4", "大大大大啊","no"]
            ]
          },
          {
            "2020-08-03": [
              ["to-do 3", "大大大大啊","no"],
              ["to-do 4", "大大大大啊","no"]
            ]
          },
          {
            "2020-05-04": [
              ["to-do 5", "大大大大啊","yes"],
              ["to-do 6", "大大大大啊","no"],
              ["to-do 9", "我afraid","yes"]
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
response.sort(function (a, b) {
    return a.createtime<b.createtime?1:-1;
});*/
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