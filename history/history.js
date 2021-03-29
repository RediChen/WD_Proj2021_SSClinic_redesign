$("news-bars").each(function (index, bars) {
    var bricks = $(".news-bricks") ;
    console.log("知道了 " + bricks.length) ;
    bars[index].click(function () {
        bricks[index].slideToggle() ;
    }) ;
}) ;