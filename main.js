//* 全域共用區
const isMobile = window.matchMedia("(max-width: 767px)");
    //TODO 待研究這個變數到底是什麼
// 全域共用區 END
//* 滾動機制 ==========================//
//功能：藉由jQuery實現捲動前往指定位置
$("a").each(function () {
    //* Stage I : 收集參數
    var target = $(this).attr("data-s2-target");
    // (1) target 目標元素名稱，只有name、沒有sharp
    if (!target) return false;// 沒有設定此參數的就直接中止
    //====================//
    var offset = $("#" + target).offset();//jqGetOffset
    // (2-1) offset 元素在網頁上的座標
    var posY = offset.top;
    // (2-2) offset.top 元素在網頁上的y座標
    //====================//
    var posAdj = $(this).attr("data-s2-offset");
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
$("#care-board-3").slick(
    {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 3000,
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
// 治療頁面 END
//* 門診頁面 I : 表格單色化 ==========================//
// var egBtns = document.getElementsByClassName("table-eg-btns") ;
$(".table-eg-btns").each(function () {
    var color = this.attr("data-tt-label");
    if (!color) return false;// 沒有設定此參數的就直接中止
    
    //! 以下功能沒有成功
    if (isMobile.matches) {
        $(this).mousedown(addGray(color)) ;
        $(this).mouseup(removeGray()) ;
    } else {
        $(this).hover(addGray(color), removeGray());
    }
});

function addGray(colorLabel) {
    var i;//for 迴圈用的這個變數不會被關在for裡頭，而會被提昇到這裡。
    var cols = document.getElementsByClassName("tt-cols");
    for (i = 0; i < cols.length; i++) {
        if (cols.classList.contains(colorLabel)) {
            cols.classList.add("tt-deactivate");
        }
    }
}
function removeGray() {
    var i;//for 迴圈用的這個變數不會被關在for裡頭，而會被提昇到這裡。
    var cols = document.getElementsByClassName("tt-cols");
    if (!color) return false;// 沒有設定此參數的就直接中止
    for (i = 0; i < cols.length; i++) {
        cols.classList.remove("tt-deactivate");
    }
}

// 門診頁面 I : 表格單色化 END
//* 門診頁面 II : 小分頁 ==========================//
// 馬上執行區 =========
showPage(0);
// 函數宣告區 =========
function showPage(n) {
    var i;
    var pages = document.getElementsByClassName("note-pages");
    var btns = document.getElementsByClassName("note-btns");

    // hide all
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
        btns[i].classList.remove("note-btns-active");
    }
    pages[n].style.display = "block";
    btns[n].classList.add("note-btns-active");
}
// 門診頁面 II : 小分頁 END
