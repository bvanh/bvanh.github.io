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

[url=https://flic.kr/p/2h2ftKe][img]https://live.staticflickr.com/65535/48584542231_f1a75476cb_c.jpg[/img][/url][url=https://flic.kr/p/2h2ftKe]ngu[/url] by [url=https://www.flickr.com/photos/183616357@N05/]anh bui[/url], trên Flickr