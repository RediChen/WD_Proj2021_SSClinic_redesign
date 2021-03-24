//*
var tablet = 1024; //upper bound ; w < 1024
var mobile = 767; //upper bound ; w < 767
$("#care-board-3").slick(
    {
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: true,
        speed: 1200,
        responsive: [{
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

//* 團隊頁面 ==========================//
// 馬上執行區 =========
showCard(0);
// 函數宣告區 =========
function showCard(n) {
    var i;//for 迴圈用的這個變數不會被關在for裡頭，而會被提昇到這裡。
    var cards = document.getElementsByClassName("team-card");
    var btns = document.getElementsByClassName("team-btn");
    var isMobile = window.matchMedia("(max-width: 767px)");
    //TODO 待研究這個變數到底是什麼

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
// 團隊頁面 END
//* 門診頁面 ==========================//
// 馬上執行區 =========
showPage(0);
// 函數宣告區 =========
function showPage(n) {
    var i ;
    var pages = document.getElementsByClassName("note-pages") ;
    var btns = document.getElementsByClassName("note-btns");

    // hide all
    for(i = 0 ; i < pages.length ; i++) {
        pages[i].style.display = "none" ;
        btns[i].classList.remove("note-btns-active") ;
    }
    pages[n].style.display = "block" ;
    btns[n].classList.add("note-btns-active") ;
}
// 門診頁面 END
