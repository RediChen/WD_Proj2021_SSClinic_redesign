//board-3非所有裝置皆採用輪播圖，待思考作法。
$("#care-board-3").slick(
    {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1200
    }
);

//* 團隊頁面 ==========================//
// 全域變數區 ===================

// 馬上執行區 ===================
showCard(0);

// 函數宣告區 ===================
function showCard(n) {
    var i;//for 迴圈用的這個變數不會被關在for裡頭，而會被提昇到這裡。
    var cards = document.getElementsByClassName("team-card");
    var btns = document.getElementsByClassName("team-btn");
    var isMobile = window.matchMedia("(max-width: 767px)");
    //TODO 待研究這個變數到底是什麼

    //全部卡片隱藏，全部按鈕還原
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = "none" ;
        cards[i].style.display = "none";
        btns[i].classList.remove("team-btn-active");
    }
    //顯示指定卡片，啟動對應按鈕
    if (isMobile.matches) cards[n].style.display = "flex";
    else cards[n].style.display = "grid";
    btns[n].classList.add("team-btn-active");
}
// 團隊頁面 END
