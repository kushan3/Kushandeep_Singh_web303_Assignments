// WEB303 Assignment 2
const loadContent = (page) => {
  $("#content").hide(100);
  $("#content").empty();

  //fetch is a async wrapper on the js's AJAX XMLHttpRequest
  fetch(page + ".html")
    .then((r) => r.text())
    .then((r) => {
      document.getElementById("content").innerHTML = r;
    });

  $("#content").toggle(100);
};

$("#prospect").click(() => {
  loadContent("prospect");
});

$("#convert").click(() => {
  loadContent("convert");
});

$("#retain").click(() => {
  loadContent("retain");
});
