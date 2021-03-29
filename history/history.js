// $("news-bars").each(function (index, bars) {
//     var bricks = $(".news-bricks") ;
//     console.log("知道了 " + bricks.length) ;
//     bars[index].click(function () {
//         bricks[index].slideToggle() ;
//     }) ;
// }) ;

for ( let i = 0 ; i < 5 ; i++) {
    var bars = document.getElementsByClassName(".news-bars") ;
    var bricks = document.getElementsByClassName(".news-bricks") ;
    bars[i].click(function () {
        $bricks[i].slideToggle("normal") ;
    })
}