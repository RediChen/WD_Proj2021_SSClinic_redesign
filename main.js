//* 全域共用區
const isMobile = window.matchMedia("(max-width: 767px)");
//TODO 待研究這個變數到底是什麼
AOS.init() ;
// 全域共用區 END

//* 漢堡選單 ==========================//
$("#nav-hbger").click(function () {
    $("#nav-link-wrap").fadeToggle();
    // $("#nav-link-wrap").toggle('slide',{direction: 'left'}, 1000);
});
$(".nav-link").click(function () {
    if (isMobile.matches) $("#nav-link-wrap").hide();
})
// 漢堡選單 END

//* 滾動機制 ==========================//
//功能：藉由jQuery實現捲動前往指定位置
$("a").each(function () {
    //* Stage I : 收集參數
    var target = $(this).attr("data-s2-target");
    // (1) target 目標元素名稱，只有name、沒有sharp
    if (!target) return true;// 沒有設定此參數的就直接中止
    //====================//
    var offset = $("#" + target).offset();//jqGetOffset
    // (2-1) offset 元素在網頁上的座標
    //! 內捲動空間會跟著算入
    var posY = offset.top;
    // (2-2) offset.top 元素在網頁上的y座標
    //====================//
    var posAdj = parseInt($(this).attr("data-s2-offset"));
    // (3) posAdj = position adjust 微調目標的座標
    //TODO 希望可以自動算效果的時間

    //* Stage II : 參數操作
    if (posAdj) posY += posAdj;
    // 有要求才改，以免undefined礙事

    //* Stage III : 前往至目的地
    $(this).click(function (e) {
        e.preventDefault();//關閉 a 原本的連結功能
        $("html, body").stop().animate({
            //(1) UX : 插入stop() 讓點選其他按鈕可以中止機制
            //(2) html, body 是為了跨平台的以防萬一
            scrollTop: posY
        }, 800);
    });
    $("html, body").on("mousewheel", function () {
        $("html, body").stop();
    });
    //(3) UX : 讓滾輪可以中止機制
})
// 滾動機制 END
//* 形象頁面 ==========================//
$("#home>h1").delay(1000).fadeIn("normal") ;
console.log("有沒有問題啊？") ;
// 形象頁面 END
//* 團隊頁面 ==========================//
// 功能：按鈕點選式呈現
// 馬上執行區 =========
showCard(0);
// 函數宣告區 =========
function showCard(n) {
    var i;//for 迴圈用的這個變數不會被關在for裡頭，而會被提昇到這裡。
    var cards = document.getElementsByClassName("team-card");
    var btns = document.getElementsByClassName("team-btn");

    //全部卡片隱藏，全部按鈕還原
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
        btns[i].classList.remove("team-btn-active");
    }
    //顯示指定卡片，啟動對應按鈕
    if (isMobile.matches) cards[n].style.display = "flex";
    else cards[n].style.display = "grid";
    btns[n].classList.add("team-btn-active");
}
// 團頁面 END
//* 治療頁面 ==========================//
// 功能：slick
var tablet = 1024; //upper bound ; w < 1024
var mobile = 767; //upper bound ; w < 767
$('#care-board-2').slick(
    {
        autoplay: true,
        autoplaySpeed: 4500,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 3000,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3,
                    swipeToSlide: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 3000,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    swipeToSlide: true
                }
            }
        ]
    }
);

$("#care-board-3").slick(
    {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 3000,
        responsive: [
            {
                breakpoint: tablet,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: false,
                    speed: 400
                }
            }
        ]
    }
);
// 治療頁面 END