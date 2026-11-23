//基本設定
var is_forPC = document.body.clientWidth > 767; //forPC
var sw = {};


$(function () { 

	
 /* -------版頭副標輪播公版(線上入稿)---------*/	
  $('.titile02 .PD_layout ul').addClass('swiper-wrapper');
  $('.titile02 .PD_layout ul > li').addClass('swiper-slide');

  var Area_titile02_swiper = new Swiper('.titile02 .PD_layout .btclass', {
	  
    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.Area_title .box .layout_titile02 .swiper-pagination',
      clickable: true, //觸擊切換
    },
    //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
    navigation:{
      nextEl: '.titile02 .PD_layout .swiper-button-next',
      prevEl: '.titile02 .PD_layout .swiper-button-prev',
    },
	  
    //★5.2.1★基本
    watchOverflow: true, //只有1個slide時，不啟動swiper
    roundLengths: true, //寬高四捨五入不出現小數點   
    //initialSlide: Math.floor( Math.random() * $('.Area_01 .PD_layout .btclass .swiper-slide').length ) , //初始險是第幾個(亂數)
	  
	//★5.2.1★切換特效(淡化)
    effect: 'fade',     //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌)
    fadeEffect: {
      crossFade: true //打開自動淡出
    },
  
	  
	  
//    //循環
//    loop: true, //無限循環
	  
    //抵亢反彈
    freeMode: true, //取消只滑動1格,但不會貼齊(要貼齊要再加Sticky)
	freeModeMomentumVelocityRatio: 1, //移動慣性-滑行速度
	  
    //★5.2.1★自動撥放
    autoplay: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, //觸擊後不再自動輪播
    },
	  
    //★5.2.1★RWD(換成大於)
    breakpoints: {
      0:{
        //排版
        slidesPerView:1, //顯示幾個
        spaceBetween: 5, //間距
        slidesPerColumn: 1, //一次顯示幾行
      },
      768: {
        //排版
        slidesPerView:1, //顯示幾個
        spaceBetween: 5, //間距
        slidesPerColumn: 1, //一次顯示幾行
        //centeredSlides: true, //當前區塊居中
        centeredSlidesBounds: true, //當前區塊居中還可以貼齊左右邊
      },
    },	  
	  
	  
	  
    //★5.2.1★↓動作↓
    on: {
      //輪播開始時觸發
      transitionStart: function() {
        //更新延遲讀圖
        lazyLoadInstance.update();
	       this.update();
      },  
    }, //↑動作↑ 
  
	  





    
	  
	  
  });   
	
	






 /* -------Area_title 版頭品(線上入稿)---------*/	
 $('.Area_title .box .PD_layout ul').addClass('swiper-wrapper');
 $('.Area_title .box .PD_layout ul > li').addClass('swiper-slide');

 var Area_beauty_swiper = new Swiper('.Area_title .box .btclass', {
   
   //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
   pagination: {
     el: '.Area_title .box .PD_layout .swiper-pagination',
     clickable: true, //觸擊切換
   },
   //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
   navigation:{
     nextEl: '.Area_title .box .swiper-button-next',
     prevEl: '.Area_title .box .swiper-button-prev',
   },
   
   //★5.2.1★基本
   watchOverflow: true, //只有1個slide時，不啟動swiper
   roundLengths: true, //寬高四捨五入不出現小數點   
   //initialSlide: Math.floor( Math.random() * $('.Area_01 .PD_layout .btclass .swiper-slide').length ) , //初始險是第幾個(亂數)
   
//    //循環
//    loop: true, //無限循環
   
   //抵亢反彈
   freeMode: true, //取消只滑動1格,但不會貼齊(要貼齊要再加Sticky)
 freeModeMomentumVelocityRatio: 1, //移動慣性-滑行速度
   
   //★5.2.1★自動撥放
   autoplay: false,
   //autoplay: {
   //  delay: 2500,
   //  disableOnInteraction: false, //觸擊後不再自動輪播
   //},
   
   //★5.2.1★RWD(換成大於)
   breakpoints: {
     0:{
       //排版
       slidesPerView: 2.2, //顯示幾個
       spaceBetween: 5, //間距
       slidesPerColumn: 1, //一次顯示幾行
     },
     768: {
       //排版
       slidesPerView: 4, //顯示幾個
       spaceBetween: 5, //間距
       slidesPerColumn: 1, //一次顯示幾行
       //centeredSlides: true, //當前區塊居中
       centeredSlidesBounds: true, //當前區塊居中還可以貼齊左右邊
     },
   },	  
   
   
   
   //★5.2.1★↓動作↓
   on: {
     //輪播開始時觸發
     transitionStart: function() {
       //更新延遲讀圖
       lazyLoadInstance.update();
        this.update();
     },  
   }, //↑動作↑ 
 
   
   
   
 });   





	




 /* -------Area_discount02 (線上入稿)---------*/	
 $('.Area_discount02 .box .PD_layout ul').addClass('swiper-wrapper');
 $('.Area_discount02 .box .PD_layout ul > li').addClass('swiper-slide');

 var Area_beauty_swiper = new Swiper('.Area_discount02 .box .btclass', {
   
   //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
   pagination: {
     el: '.Area_discount02 .box .PD_layout .swiper-pagination',
     clickable: true, //觸擊切換
   },
   //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
   navigation:{
     nextEl: '.Area_discount02 .box .swiper-button-next',
     prevEl: '.Area_discount02 .box .swiper-button-prev',
   },
   
   //★5.2.1★基本
   watchOverflow: true, //只有1個slide時，不啟動swiper
   roundLengths: true, //寬高四捨五入不出現小數點   
   //initialSlide: Math.floor( Math.random() * $('.Area_01 .PD_layout .btclass .swiper-slide').length ) , //初始險是第幾個(亂數)
   
//    //循環
//    loop: true, //無限循環
   
   //抵亢反彈
   freeMode: true, //取消只滑動1格,但不會貼齊(要貼齊要再加Sticky)
 freeModeMomentumVelocityRatio: 1, //移動慣性-滑行速度
   
   //★5.2.1★自動撥放
   autoplay: false,
   //autoplay: {
   //  delay: 2500,
   //  disableOnInteraction: false, //觸擊後不再自動輪播
   //},
   
   //★5.2.1★RWD(換成大於)
   breakpoints: {
     0:{
       //排版
       slidesPerView: 2.2, //顯示幾個
       spaceBetween: 5, //間距
       slidesPerColumn: 1, //一次顯示幾行
     },
     768: {
       //排版
       slidesPerView: 4, //顯示幾個
       spaceBetween: 5, //間距
       slidesPerColumn: 1, //一次顯示幾行
       //centeredSlides: true, //當前區塊居中
       centeredSlidesBounds: true, //當前區塊居中還可以貼齊左右邊
     },
   },	  
   
   
   
   //★5.2.1★↓動作↓
   on: {
     //輪播開始時觸發
     transitionStart: function() {
       //更新延遲讀圖
       lazyLoadInstance.update();
        this.update();
     },  
   }, //↑動作↑ 
 
   
   
   
 });   












  
  



  





	

/**六折券時段 **/
var advtabTitle1 =".Act_02 .kind li";

var now = new Date();
var now_d = now.getDate();
var now_d_activeIndex = 0;
if( now_d === 22 ){ now_d_activeIndex = 0 ;}
if( now_d === 23 ){ now_d_activeIndex = 1 ;}
if( now_d === 24 ){ now_d_activeIndex = 2 ;}
if( now_d === 25 ){ now_d_activeIndex = 3 ;}
if( now_d === 26 ){ now_d_activeIndex = 4 ;}

$(advtabTitle1).eq(now_d_activeIndex).addClass("selected");	

  




  /* -------折價券---------*/
  $('.Area_coupon_sw .PD_layout ul').addClass('swiper-wrapper');
  $('.Area_coupon_sw .PD_layout ul > li').addClass('swiper-slide');
  	
  var Area_coupon_sw = new Swiper('.Area_coupon_sw .PD_layout', {
      
    
    
    
    //★5.2.1★基本  
    watchOverflow: true, //只有1個slide時，不啟動swiper
      
    
    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.Area_coupon_sw .PD_layout .swiper-pagination',
      clickable: true, //觸擊切換
    },

    //★5.2.1★RWD(換成大於)
    breakpoints: {
      0: {
        //手機版
        slidesPerView: 1.1,
        spaceBetween: 5,
        slidesPerGroup:1, //一次切換幾個
      },
      768: {
        //電腦版
        slidesPerView:1.2,
        spaceBetween: 5,
        slidesPerGroup:1, //一次切換幾個
      },
    },

    //★5.2.1★↓動作↓
    on: {
      //初始化
      init: function() {
        lazyLoadInstance.update();
	       this.update();
      },  
      //輪播開始時觸發
      transitionStart: function() {
        lazyLoadInstance.update();
	       this.update();
      },  
    },






    

  });
    
    
    



   
   	


		
	
   
   
   




 /* --------------------------------------
   * 限搶頁籤公版:: Page 頁籤_202405291900
   * -------------------------------------- */
 $('.Area_brand .tab_swiper ul').addClass('swiper-wrapper');
 $('.Area_brand .tab_swiper li').addClass('swiper-slide');
 var tabSwiper = new Swiper('.Area_brand .tab_swiper .btclass', { 
   //initialSlide: Math.floor(Math.random() * $('.Area_K1 .tab_swiper ul > li').length), //初始險是第幾個(亂數)  
   spaceBetween: 0, //間距  
   slidesPerView: 4, //顯示幾個  
   watchSlidesVisibility: true,
   watchSlidesProgress: true,
   slideToClickedSlide: true, //點擊區塊移動到中間   
   centeredSlides: true, //當前區塊居中
 });
 $('.Area_brand .content_swiper .page_box').addClass('swiper-wrapper');
 $('.Area_brand .content_swiper .page').addClass('swiper-slide');
 var contentSwiper = new Swiper('.Area_brand .content_swiper', {
   spaceBetween: 10, //間距  
   autoHeight: true, //自動高度
 });
 tabSwiper.controller.control = contentSwiper;
 contentSwiper.controller.control = tabSwiper;
     
 

  
	
	
	  /* --------------------------------------
   * 限搶頁籤公版:: Page 頁籤_202405291900
   * -------------------------------------- */
    $('.Area_sale .tab_swiper ul').addClass('swiper-wrapper');
    $('.Area_sale .tab_swiper li').addClass('swiper-slide');
    var tabSwiper = new Swiper('.Area_sale .tab_swiper .btclass', { 
      //initialSlide: Math.floor(Math.random() * $('.Area_K1 .tab_swiper ul > li').length), //初始險是第幾個(亂數)  
      spaceBetween: 0, //間距  
      slidesPerView: 4, //顯示幾個  
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true, //點擊區塊移動到中間   
      centeredSlides: true, //當前區塊居中
    });
    $('.Area_sale .content_swiper .page_box').addClass('swiper-wrapper');
    $('.Area_sale .content_swiper .page').addClass('swiper-slide');
    var contentSwiper = new Swiper('.Area_sale .content_swiper', {
      spaceBetween: 0, //間距  
      autoHeight: true, //自動高度
    });
    tabSwiper.controller.control = contentSwiper;
    contentSwiper.controller.control = tabSwiper;
        
    
	
	
	
	
	
	
	
	
	
	
})