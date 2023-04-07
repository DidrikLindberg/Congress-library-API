var example = document.querySelector("#exampleFormControlSelect1");
var userSearch = document.querySelector("#exampleFormControlInput1");
var userSearch2 = document.querySelector("#user-input");
var example2 = document.querySelector("#exampleFormControlSelect2");
var homeSubmit = document.querySelector("#home-submit");

homeSubmit.addEventListener("submit", getFeaturedRepos());
var test = example.value;
var test2 = userSearch.value;

  var getFeaturedRepos = function (event) {
    // https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-repositories
    var apiUrl = 'https://www.loc.gov/' + test + '/?q=' + userSearch + 'war&fo=json';
   
  
    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          displayRepos(data.items, language);
          console.log(apiUrl);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    });
  };