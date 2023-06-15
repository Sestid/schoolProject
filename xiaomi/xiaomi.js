	var download = $(".download");
	var box = $(".box");
	download.mouseover(function(){
		box.show();
	download.mouseout(function(){
		box.hide();
	});
	});

	var shopping = $(".shopping");
	var cartMini = $(".cart-mini");
	cartMini.mouseover(function(){
		shopping.stop().slideDown();
	cartMini.mouseout(function(){
		shopping.stop().slideUp()
	});
	});

	var a1 = $(".a1");
	var s1 = $(".s1");
	a1.mouseover(function(){
		s1.stop().slideDown();
	a1.mouseout(function(){
		s1.stop().slideUp();
	});
	});

	var l1 = $(".l1");
	var childrenCategory = $(".children-category");
	l1.mouseover(function(){
		childrenCategory.show();
	childrenCategory.mouseover(function(){
		childrenCategory.show();
	l1.mouseout(function(){
		childrenCategory.hide();
	childrenCategory.mouseout(function(){
		childrenCategory.hide();
	});
	});
    });
    });


	var photoCategory = $(".photo-category");
    var leftBtn = $(".btnleft");
    var rightBtn = $(".btnright");
	var ul = $(".photo-category ul");
	 leftBtn.click(function(){
      clickLeft()
    });
	 rightBtn.click(function(){
      clickRight();
    });
    function clickLeft() {
      ul.stop().animate({
        left: '-=1250px'
      }, 100, function(){
        ul.css("left", "-1250px");
        var first = $(".photo-category ul li").first();
        var last = $(".photo-category ul li").last();
        first.insertAfter(last);
      });
    };
    function clickRight() {
      ul.stop().animate({
        left: '+=1250px'
      }, 100, function(){
        ul.css("left", "-1250px");
        var first = $(".photo-category ul li").first();
        var last = $(".photo-category ul li").last();
        last.insertBefore(first);
      });
    };
     var intervalClick = setInterval(function(){
      clickLeft();
    }, 1000)

    photoCategory.mouseover(function(){
      clearInterval(intervalClick);
    })
    photoCategory.mouseout(function(){
      intervalClick = setInterval(function(){
        clickLeft();
      }, 1000)
    })

    var carouselWrapper = $(".carousel-wrapper");
    var left = $(".left");
    var right = $(".right");
	var ul = $(".carousel-wrapper ul");
	 left.click(function(){
      clickLeft1()
    });
	 right.click(function(){
      clickRight1();
    });
    function clickLeft1() {
      ul.stop().animate({
        left: '-=1015px'
      }, 100, function(){
        ul.css("left", "1015px");
        var first = $(".carousel-wrapper .ul1 ").first();
        var last = $(".carousel-wrapper ul2 ").last();
        first.insertAfter(last);
      });
    };
    function clickRight1() {
      ul.stop().animate({
        left: '+=1015px'
      }, 100, function(){
        ul.css("left", "-1015px");
        var first = $(".carousel-wrapper .ul1").first();
        var last = $(".carousel-wrapper .ul2").last();
        last.insertBefore(first);
      });
    };

    