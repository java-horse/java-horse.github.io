/*
 * @Author: Mr.Horse
 * @Date: 2021-12-27 19:49:26
 * @LastEditTime: 2022-01-03 21:50:01
 * @Description: 自定义脚本
 */

// 随机背景图片数组,图片可以换成图床链接
var backimg =[
    "url(/images/cover01.jpg)",
    "url(/images/cover02.jpg)",
    "url(/images/cover03.jpg)",
    "url(/images/cover04.jpg)",
    "url(/images/cover05.jpg)",
    "url(/images/cover06.jpg)",
    "url(/images/cover07.jpg)",
    "url(/images/cover08.jpg)",
    "url(/images/cover09.jpg)",
    "url(/images/cover10.jpg)",
    "url(/images/cover11.jpg)",
    "url(/images/cover12.jpg)",
    "url(/images/cover13.jpg)",
    "url(/images/cover14.jpg)",
    "url(/images/cover15.jpg)",
    "url(/images/cover16.jpg)",
    "url(/images/cover17.jpeg)",
    "url(/images/cover18.jpg)",
    "url(/images/cover19.jpg)",
    "url(/images/cover20.jpg)",
    "url(/images/cover21.jpg)",
    "url(/images/cover22.jpg)",
    "url(/images/cover23.jpg)",
    "url(/images/cover24.jpg)",
    "url(/images/cover25.jpg)",
    "url(/images/cover26.jpg)",
    "url(/images/cover27.jpg)",
    "url(/images/cover28.jpg)",
    "url(/images/cover29.jpg)",
    "url(/images/cover30.jpg)",
    "url(/images/cover31.jpg)",
    "url(/images/cover32.jpg)",
    "url(/images/cover33.jpg)",
    "url(/images/cover34.jpg)",
    "url(/images/cover35.jpg)",
    "url(/images/cover36.jpg)",
    "url(/images/cover37.jpg)",
    "url(/images/cover38.jpg)",
    "url(/images/cover39.jpg)",
    "url(/images/cover40.jpg)",
    "url(/images/cover41.jpg)",
    "url(/images/cover42.jpg)",
    "url(/images/cover43.jpg)",
    "url(/images/cover44.jpg)",
    "url(/images/cover45.jpg)",
    "url(/images/cover46.jpg)",
    "url(/images/cover47.jpg)",
    "url(/images/cover48.jpg)",
    "url(/images/cover49.jpg)",
    "url(/images/cover50.jpg)",
    "url(/images/cover51.jpg)",
    "url(/images/cover52.jpg)",
    "url(/images/cover53.jpg)",
    "url(/images/cover54.jpg)",
    "url(/images/cover55.jpg)",
    "url(/images/cover56.jpg)",
    "url(/images/cover57.jpg)",
    "url(/images/cover58.jpg)",
    "url(/images/cover59.jpg)",
    "url(/images/cover60.jpg)",
    "url(/images/cover61.jpg)",
    "url(/images/cover62.jpg)",
    "url(/images/cover63.jpg)",
    "url(/images/cover64.jpg)",
    "url(/images/cover65.jpg)",
    "url(/images/cover66.jpg)",
    "url(/images/cover67.jpg)",
    "url(/images/cover68.jpg)",
    "url(/images/cover69.jpg)",
    "url(/images/cover70.jpg)",
    "url(/images/cover71.jpg)",
    "url(/images/cover72.jpg)",
    "url(/images/cover73.jpg)",
    "url(/images/cover74.jpg)",
    "url(/images/cover75.jpg)",
    "url(/images/cover76.jpg)",
    "url(/images/cover77.jpg)",
    "url(/images/cover78.jpg)",
    "url(/images/cover79.jpg)",
    "url(/images/cover80.jpg)",
    "url(/images/cover81.jpg)",
    "url(/images/cover82.jpg)",
    "url(/images/cover83.jpg)",
    "url(/images/cover84.jpg)",
    "url(/images/cover85.jpg)",
    "url(/images/cover86.jpg)",
    "url(/images/cover87.jpg)",
    "url(/images/cover88.jpg)",
    "url(/images/cover89.jpg)",
    "url(/images/cover90.jpg)",
    "url(/images/cover91.jpg)",
    "url(/images/cover92.jpg)",
    "url(/images/cover93.jpg)",
    "url(/images/cover94.jpg)",
    "url(/images/cover95.jpg)",
    "url(/images/cover96.jpg)",
    "url(/images/cover97.jpg)",
    "url(/images/cover98.jpg)",
    "url(/images/cover99.jpg)",
    "url(/images/cover100.jpg)"
];

//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[Math.floor(Math.random() * backimg.length)];

//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = 'w(ﾟДﾟ)w 不要走！再看看嘛！';
        clearTimeout(titleTime);
    }
    else {
        //返回当前页面时标签显示内容
        document.title = '♪(^∇^*)欢迎回来！' + OriginTitile;
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});

// 公祭日自动变灰脚本
if(PublicSacrificeDay()){
  document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
}
function PublicSacrificeDay(){
    var PSFarr=new Array("0403","0404","0405","0406","0414","0512","0707","0807","0814","0909","0918","0930","1025","1213");
    //2020年4月4日 新冠肺炎哀悼日，清明节
    //2010年4月14日，青海玉树地震
    //2008年5月12日，四川汶川地震
    //1937年7月7日,七七事变 又称卢沟桥事变
    //2010年8月7日，甘肃舟曲特大泥石流
	  //8月14日，世界慰安妇纪念日
    //1976年9月9日，毛主席逝世
  	//1931年9月18日，九一八事变
  	//烈士纪念日为每年9月30日
    //1950年10月25日，抗美援朝纪念日
    //1937年12月13日，南京大屠杀
    var currentdate = new Date();
    var str = "";
    var mm = currentdate.getMonth()+1;
    if(currentdate.getMonth()&gt;9){
      str += mm;
    }else{
      str += "0" + mm;
    }
    if(currentdate.getDate()&gt;9){
      str += currentdate.getDate();
    }else{
      str += "0" + currentdate.getDate();
    }
    if(PSFarr.indexOf(str)&gt;-1){
        return 1;
    }else{
        return 0;
    }
}

// 友情链接页面 头像找不到时 替换图片
if (location.href.indexOf("link") !== -1) {
    var imgObj = document.getElementsByTagName("img");
    for (i = 0; i &lt; imgObj.length; i++) {　　
        imgObj[i].onerror = function() { 
          this.src = "https://cdn.jsdelivr.net/gh/tzy13755126023/BLOG_SOURCE/theme_f/friend_404.gif" 
        }
    }
}

// 主页冒泡动效
$(function() {
    function bubble() {
        $('#page-header').circleMagic({
            radius: 10,
            density: .2,
            color: 'rgba(255,255,255,.4)',
            clearOffset: 0.99
        });
    }! function(p) {
        p.fn.circleMagic = function(t) {
            var o, a, n, r, e = !0,
                i = [],
                d = p.extend({ color: "rgba(255,0,0,.5)", radius: 10, density: .3, clearOffset: .2 }, t),
                l = this[0];

            function c() { e = !(document.body.scrollTop &gt; a) }

            function s() { o = l.clientWidth, a = l.clientHeight, l.height = a + "px", n.width = o, n.height = a }

            function h() {
                if (e)
                    for (var t in r.clearRect(0, 0, o, a), i) i[t].draw();
                requestAnimationFrame(h)
            }

            function f() {
                var t = this;

                function e() { t.pos.x = Math.random() * o, t.pos.y = a + 100 * Math.random(), t.alpha = .1 + Math.random() * d.clearOffset, t.scale = .1 + .3 * Math.random(), t.speed = Math.random(), "random" === d.color ? t.color = "rgba(" + Math.floor(255 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.random().toPrecision(2) + ")" : t.color = d.color }
                t.pos = {}, e(), this.draw = function() { t.alpha &lt;= 0 &amp;&amp; e(), t.pos.y -= t.speed, t.alpha -= 5e-4, r.beginPath(), r.arc(t.pos.x, t.pos.y, t.scale * d.radius, 0, 2 * Math.PI, !1), r.fillStyle = t.color, r.fill(), r.closePath() }
            }! function() {
                o = l.offsetWidth, a = l.offsetHeight,
                    function() {
                        var t = document.createElement("canvas");
                        t.id = "canvas", t.style.top = 0, t.style.zIndex = 0, t.style.position = "absolute", l.appendChild(t), t.parentElement.style.overflow = "hidden"
                    }(), (n = document.getElementById("canvas")).width = o, n.height = a, r = n.getContext("2d");
                for (var t = 0; t &lt; o * d.density; t++) {
                    var e = new f;
                    i.push(e)
                }
                h()
            }(), window.addEventListener("scroll", c, !1), window.addEventListener("resize", s, !1)
        }
    }(jQuery);

    bubble();
});