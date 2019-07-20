$('input[type="checkbox"]').click(function () {
    var $checked = $('input[type="checkbox"]:checked');
    var $productItem = $('.productItem');

    if ($checked.length > 0) {
        $productItem.hide();

        $checked.each(function () {
            $('.productItem[data-level=' + this.value + ']').show();
            $('.productItem[data-price=' + this.value + ']').show();
            $('.productItem[data-network=' + this.value + ']').show();
        });
    } else {
        $productItem.show();
    }
});
function anNoidung() {
    let x = document.getElementById("noidung-an");
    let y = document.getElementById("btn");
    let v = document.getElementById("z");
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
};
;
function sortPriceLowHigh() {
    let divList = $(".productItem");
    divList.sort(function (a, b) { return $(a).data("popularity") - $(b).data("popularity") });
    $(".products").html(divList);
}
function sortDanhgia() {
    let divList = $(".productItem");
    divList.sort(function (a, b) { return $(b).data("comment") - $(a).data("comment") });
    $(".products").html(divList);
}
function myFunction() {
    var input, filter, cards, h5, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName("productItem");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector("b");
        if (title.innerText.toUpperCase().search(filter) > -1) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

