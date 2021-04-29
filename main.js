//* 全域共用區
const isNotPC = window.matchMedia("(max-width: 1024px)");
const isMobile = window.matchMedia("(max-width: 767px)");
//TODO 待研究這個變數到底是什麼
// 全域共用區 END

//* 漢堡選單 ==========================//
$("#nav-toggle").click(function () {
    $(this).toggleClass("active") ;
    $("#nav-link-wrap").fadeToggle();
    // $("#nav-link-wrap").toggle('slide',{direction: 'left'}, 1000);
});
$(".nav-link").click(function () {
    if (isNotPC.matches) {
        $("#nav-link-wrap").hide();
        $("#nav-toggle").removeClass("active") ;
    }
    // else $("#nav-link-wrap").show();
})
// 漢堡選單 END
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