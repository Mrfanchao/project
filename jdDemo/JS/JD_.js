var swiper = new Swiper('.swiper-container',{
	pagination:'.jd_current',
	 paginationClickable: true,
	 pagination : '.jd_current',
	paginationType : 'custom',
	autoplay: 1000,
  autoplayDisableOnInteraction : false,
  	paginationCustomRender: function (swiper, current, total) {
      // console.log(current)
      var lis = document.querySelectorAll('.jd_current li');
      // console.log(lis);
      for (var i = 0; i < lis.length; i++) {
      	lis[i].className = '';
      }
      lis[current-1].className = 'jd_Selected';
  	},
       spaceBetween: 0,
       loop:true
});
// 倒计时
var time;
function getTimes() {
	

	var startTime = new Date();

	var endTime = new Date(2017,6,7,21,0,0);

	var t = endTime.getTime()-startTime.getTime(); //时间差
	var d = Math.floor(t/1000/60/60/24);
	// console.log(d);
	var h =Math.floor(t/1000/60/60%24)+d*24;//舍入舍去小数部分
  var m =Math.floor(t/1000/60%60);
  var s =Math.floor(t/1000%60);
   // 判断、时、秒、分的长度，然后截取
    if (h.toString().length == 1) {
    	document.getElementsByClassName("jd_t_h")[0].innerHTML = 0;
    	document.getElementsByClassName("jd_t_h")[1].innerHTML = h;
    }else  {
    	document.getElementsByClassName("jd_t_h")[0].innerHTML = h.toString().slice(0,1);
    	document.getElementsByClassName("jd_t_h")[1].innerHTML = h.toString().slice(1,2);
    }

    if (m.toString().length == 1) {
    	document.getElementsByClassName("jd_t_m")[0].innerHTML = 0;
    	document.getElementsByClassName("jd_t_m")[1].innerHTML = m;
    }else {
    	document.getElementsByClassName("jd_t_m")[0].innerHTML = m.toString().slice(0,1);
    	document.getElementsByClassName("jd_t_m")[1].innerHTML = m.toString().slice(1,2);
    }

    if (s.toString().length == 1) {
    	document.getElementsByClassName("jd_t_s")[0].innerHTML = 0;
    	document.getElementsByClassName("jd_t_s")[1].innerHTML = s;
    }else{
    	document.getElementsByClassName("jd_t_s")[0].innerHTML = s.toString().slice(0,1);
    	document.getElementsByClassName("jd_t_s")[1].innerHTML = s.toString().slice(1,2);
    }
 	// console.log(h,m,s); 
  // 冒号闪烁
    $(".jd_bling").toggleClass("jd_colon");
    // $(".jd_bling").toggle();
}; 
time = setInterval(getTimes,1000);
