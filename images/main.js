//20200114-滑動到指定位置 javascript:goto('物件','速度','偏移')
function goto(val,tSpeed,fixstart) {
	if(!fixstart){ fixstart = 0 }; //無偏移時
	if(!tSpeed){ tSpeed = 0 }; //無速度時
	$('html,body').animate({scrollTop:$(val).offset().top - fixstart },tSpeed);
  };
  
  
  

	  /* --------------------------------------
	   * ECM入稿機制--進階功能-v20210315
	   * --------------------------------------
	   * ecmWriter_removeArea('.fixarea'); //針對ECM入稿區 (0)編輯模式時刪除
	   * ecmWriter_showArea(''); //針對ECM入稿區 (0)編輯模式時顯示(純手機版位)
	   * PdLayout_removeLi('.Area_AD,.Area_hoteven1,.Area_hoteven2'); //針對ECM入稿區 (1)沒入品隱藏
	   * PdLayout_removeArea('.Area_AD'); //針對ECM入稿區 (2)全部品都沒有時整區隱藏
	   * -------------------------------------- */
	  //基本設定
	  var is_trigger = false; //重覆觸發
	  var is_forPC = document.body.clientWidth > 767; //forPC
	  var is_Online = (location.protocol).indexOf('http') === 0; //線上
	  var is_EcmWriter = document.querySelectorAll('input[id^="eWriterBtn"]').length > 0; //ECM編輯模式
  
	  //啟動器
	  ecmWriter_removeArea('.fixarea'); 
	  //ecmWriter_showArea(''); //針對ECM入稿區 (0)編輯模式時顯示(純手機版位)
	  PdLayout_removeLi('.Area_danji, .danji002, .Area_btn, .Area_item, .Area_logo, .hide'); //針對ECM入稿區 (1)沒入品隱藏 
	  PdLayout_removeArea('.Area_danji, .danji002, .Area_btn, .Area_item, .Area_logo, .hide'); //針對ECM入稿區 (2)全部品都沒有時整區隱藏
	  //PdLayout_highlightLi('.A      rea _AD')
  
  
	  //針對ECM入稿區進階功能
	  function ecmWriter_removeArea(val){  //(0)編輯模式時刪除物件
	   if(is_EcmWriter){ //執行時機
		 let _self = $(val);
		 //console.log(_self)
		 if(_self.length>0){
		   _self.remove();
		   console.log(val,'在ECM編輯模式下暫持刪除');
		 }
	   }
	  };
	  function ecmWriter_showArea(val){  //(0)編輯模式時顯示(純手機版位)
	   if(is_EcmWriter){ //執行時機
		 let _self = $(val);
		 //console.log(_self)
		 if(_self.length>0){
		   _self.attr('style','display:block !important');
		   console.log(val,'在ECM編輯模式下暫持顯示(純手機版位)');
		 }
	   }
	  };
	  function PdLayout_removeLi(val){  //(1)沒入品刪除
		if(!is_EcmWriter && is_Online){ //執行時機
		  $(val).find('.PD_slide').each(function(){
			var _this = $(this);
			(_this.attr('data-id') === '')? _this.remove():''
		  });
		}
	  };
	  function PdLayout_removeArea(val){ //(2)全部品都沒有時整區刪除
		if(!is_EcmWriter && is_Online){ //執行時機
		  $(val).each(function(){ 
			var _this = $(this);
			(_this.find('li').length === 0)? _this.remove():''
		  })
		}
	  };
	  function PdLayout_highlightLi(val){ //(3)高亮當日日期	
		var now = new Date();
		var nowDate = now.toLocaleDateString(undefined, {month:'numeric', day:'numeric'})
		var activeIndex 
		
		$(val).find('.PD_slide .js-PD_val.setDate').each(function(index){
		  var _this = $(this).context.innerHTML;
		  if(nowDate == _this){
			return activeIndex = index
		  }
		});
	
		$(val).find('li').eq(activeIndex).addClass('cate-hover')
		 
	  };
		



  
  
  
  /* 回版頭 */
  jQuery(function(){
	  jQuery("#gotop").click(function(){
		  jQuery("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
		  return false;	
	  });
	  jQuery(window).scroll(function() {
		  if ( jQuery(this).scrollTop() >300){ //設定大於300px才顯示浮層
			  jQuery('#gotop').stop(true,true).fadeIn("fast");
		  } else {
			  jQuery('#gotop').stop(true,true).fadeOut("fast");
		  }
	  });
  });
  
  /* 滑動的GOTO */
  function goTop(val) {
	  if($(window).width() > 767 ){
		  var gotop_i = 150;
	  } else {
		  var gotop_i = 100;
	  }
	  jQuery('html,body').animate({scrollTop: jQuery(val).offset().top - gotop_i },700);
  }
  
  
  
  /* 浮層區*/
  function agree(val) {
	  var blackBox = $(".blackBox");
	  $(blackBox).fadeOut();
	  $(val).fadeIn();
	  var winST =  jQuery(window).scrollTop(); //目前位置
	  var winH =  jQuery(window).height(); //裝置高度
	  //浮層高度
	  $(val).find('.agreeArea .txtArea').css('height', winH * 60 / 100 );
	  var this_agreeH = $(val).find('.agreeArea').height();
	  //浮層top定位
	  // $('.agreeArea').css('top', winST + winH/2 - this_agreeH/2 );
	  // removeEditBtn()
  
  }
  $(function(){
	  var blackBox = $(".blackBox");
	  var blackBox_close = $(".blackBox .close , .blackBox .but-close");
	  var blackBox_BOXclose = ".Boxclose , .fixedfooterArea_B ";
	  //點按鈕關閉
	  blackBox_close.delegate( "a" ,"touchstart click",function(e){
		  $(blackBox).fadeOut();
		  e.preventDefault();
	  });
	  //點黑區關閉
	  blackBox.delegate( blackBox_BOXclose ,"touchstart click",function(e){
		  $(blackBox).fadeOut();
		  e.preventDefault();
	  });
  });
   
   
   
  /* 浮層區2(浮層不限高度，內容全部顯示)*/
  function agree2(val) {
	  $(val).css('opacity','1');
	  $(val).css('pointer-events','auto');
	  imglazyload();
	  var winST =  jQuery(window).scrollTop(); //目前位置
	  var winH =  jQuery(window).height(); //裝置高度
	  var this_agreeH = $(val).find('.agreeArea2').height();
	  $(val).height( $('body').height() );
	  
	  //浮層top定位
	  if( this_agreeH < winH ){
		  //內容小於裝置高度，居中
		  $('.agreeArea2').css('top', winST + winH/2 - this_agreeH/2 );
	  } else {
		  //內容大於裝置高度，置上
		  $('.agreeArea2').css('top', winST + winH/100*2 );
	  }
  
  }
  $(function(){
	  var blackBox2 = $(".blackBox2");
	  var blackBox2_close = $(".close2 , .but-close2");
	  var blackBox2_BOXclose = ".Boxclose2 ";
	  //點按鈕關閉
	  blackBox2_close.delegate( "a" ,"touchstart click",function(e){
		  $(blackBox2).attr('style','');
		  $(blackBox2).find('.agreeArea2').attr('style','');
		  e.preventDefault();
	  });
	  //點黑區關閉
	  blackBox2.delegate( blackBox2_BOXclose ,"touchstart click",function(e){
		  $(blackBox2).attr('style','');
		  $(blackBox2).find('.agreeArea2').attr('style','');
		  e.preventDefault();
	  });
  }); 
   
  
  
  /*背景互動*/
  function bgscroll(val,top,num) { //背景互動(物件,起始top位置,速度)
	var $win = $(window);
	var $doc = $(document);
	var $bg  = $(val);
	var handler = $.throttle(function(e) {
	  var dTop = $doc.scrollTop()
	  highLight(dTop);
	}, 100);
	function highLight(docTop) {
	  $bg.css('background-position', 'center '+  -1*( top + docTop * num) +'px' );
	};
	$win.scroll(handler)
  };
  $(function(){ 
	bgscroll('.js-Area_bgtop_00',0,0.1);
	//bgscroll('.js-Area_bgtop_01',-500,0.25);
  });  
  
  