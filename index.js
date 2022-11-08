function getNews() {
  fetch(
    "https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=in&apiKey=5dd70a9853cb497ba12eece7ce571ece",
    { headers: new Headers({ "X-Requested-With": "abcd" }) }
  )
    .then((a) => a.json())
    .then((response) => {
      for (var i = 0; i < response.articles.length; i++) {
        document.getElementById("output").innerHTML +=
          "<div class='article'> <img class='image' src='" +
          response.articles[i].urlToImage +
          "' > <h1>" +
          response.articles[i].title +
          "</h1>" +
          response.articles[i].source.name +
          "<br> <p>" +
          response.articles[i].description +
          "</p> <a href='" +
          response.articles[i].url +
          "'target='_blank'>" +
          response.articles[i].url +
          "</a></div>";
      }
      console.log(response);
    });
}
