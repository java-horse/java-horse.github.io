/*
 * @Author: Mr.Horse
 * @Date: 2021-12-27 19:49:26
 * @LastEditTime: 2022-01-02 23:48:24
 * @Description: 自定义脚本
 */

// 随机背景图片数组,图片可以换成图床链接
var backimg =[
  "url(/images/cover01.jpg)",
  "url(/images/cover02.jpg)",
  "url(/images/cover03.jpg)",
  "url(/images/cover04.jpg)",
  "url(/images/cover05.jpg)"
];

//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[Math.floor(Math.random() * backimg.length)];

