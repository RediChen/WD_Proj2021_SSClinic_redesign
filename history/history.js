$("#news-box > div").click(function () {
    var i = $("#news-box").children("#news-box > div").index(this);//index
    i++ ;// from array index to nth
    $("#news-box > p:not(:nth-of-type(" + i + "))").slideUp() ;
    $("#news-box > p:nth-of-type(" + i + ")").slideToggle() ;
}) ;