//* 全域共用區
// 可以使用 isMobile
// 全域共用區 END
//* 門診頁面 I : 表格單色化 ==========================//
// var egBtns = document.getElementsByClassName("table-eg-btns") ;
$(".table-eg-btns").each(function () {
    var color = $(this).attr("data-tt-label");
    if (color === undefined) return true;// 沒有設定此參數的就直接中止
    if (isMobile.matches) {
        var cols = document.getElementsByClassName("tt-cols");
        // $(this).stop().on("tap",function () {
        //     var i;
        //     for (i = 0; i < cols.length; i++) {
        //         if (!cols[i].classList.contains(color)) {
        //             cols[i].classList.add("tt-deactivate");
        //         }
        //     }
        // }).delay(2000).()
        // $(this).on("taphold",function () {
        //     var i;
        //     for (i = 0; i < cols.length; i++) {
        //         cols[i].classList.remove("tt-deactivate");
        //     }
        // });
    }

    //* 以下的是會失敗的外包版本
    // $(this).hover(addGray(color), removeGray());
    //* 以下的是會成功的嵌入版本
    $(this).hover(
        function () {
            var i;
            var cols = document.getElementsByClassName("tt-cols");
            for (i = 0; i < cols.length; i++) {
                if (!cols[i].classList.contains(color)) {
                    cols[i].classList.add("tt-deactivate");
                }
            }
        },
        function () {
            var i;
            var cols = document.getElementsByClassName("tt-cols");
            for (i = 0; i < cols.length; i++) {
                cols[i].classList.remove("tt-deactivate");
            }
        }
    );
});
//* 以下的是會失敗的外包版本
function addGray(colorLabel) {
    var i;
    var cols = document.getElementsByClassName("tt-cols");
    for (i = 0; i < cols.length; i++) {
        if (!cols[i].classList.contains(colorLabel)) {
            cols[i].classList.add("tt-deactivate");
            // console.log("add i = " + i);
        }
    }
}
function removeGray() {
    var i;
    var cols = document.getElementsByClassName("tt-cols");
    for (i = 0; i < cols.length; i++) {
        cols[i].classList.remove("tt-deactivate");
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