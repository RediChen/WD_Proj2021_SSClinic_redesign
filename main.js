//board-3非所有裝置皆採用輪播圖，待思考作法。
$("#care-board-3").slick(
    {
        slidesToShow: 1,
        slidesToScroll: 1
    }
);

//* 團隊頁面
// 全域變數區 ===================
var i_card = 0;// index of card = 0 ~ 8；預設顯示總院長

// 馬上執行區 ===================
showCard(i_card);

// 函數宣告區 ===================
function showCard(n) {
    var i;//for 迴圈用的這個變數不會被關在for裡頭，而會被提昇到這裡。
    var cards = document.getElementsByClassName("team-card");
    var btns = document.getElementsByClassName("team-btn");
    var ifMobile = window.matchMedia("(max-width: 767px)");
    //TODO 待研究

    // 處理超出值域的n
    if (n >= cards.length) {
        i_card = 0;
    } else if (n < 0) {
        i_card = cards.length - 1;
    }
    //全部卡片隱藏，全部按鈕還原
    for (i = 0; i < cards.length; i++) {
        cards[i].classList.remove("team-card-active");
        cards[i].style.display = "none";
        btns[i].classList.remove("team-btn-active");
    }
    //顯示指定卡片，啟動對應按鈕
    cards[i_card].classList.add("team-card-active");
    // if (ifMobile) cards[i_card].style.display = "flex";
    // else cards[i_card].style.display = "grid";
    btns[i_card].classList.add("team-btn-active");
}
// 團隊頁面 END
