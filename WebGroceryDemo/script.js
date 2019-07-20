function myFunction() {
    var input, filter, cards, h5, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector("h5");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

