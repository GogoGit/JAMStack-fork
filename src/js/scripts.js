const api = "https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=oPLG8YzOchvb5TKZ1nBt4wGD4EpD2NcB";

/*
NY TIMES API
App Name:  testingAPI
App ID:  bb5b663b-15d5-44ca-83b7-bb9132c249fe
key: bb5b663b-15d5-44ca-83b7-bb9132c249fe

need to remove the  dashes :(
V2 = version 2

?is the search URL (see MDN)
*/




// store the link plus the API key in a variable
// my key is not working :(


//const api = "https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=KgGi6DjX1FRV8AlFewvDqQ8IYFGzAcHM";
  


// function clickHandlers(event) {
function getStories(event) {
  // if (!event.target.matches("button")) return;
  fetch(api)
    .then((response) => response.json())
    .then((data) => showData(data.results));
}


function showData(stories) {
  var looped = stories
    .map(
      (story) => `
      <div class="item">
      <picture>
        <img src="${story.multimedia[2].url}" alt="" />
        <caption>${story.multimedia[2].caption}</caption>
      </picture>
        <h3><a href="${story.url}">${story.title}</a></h3>
        <p>${story.abstract}</p>
      </div>
  `
    )
    .join("");

  document.querySelector(".stories").innerHTML = looped;
}

// function showData(stories) {
//   console.log(stories[0].title);
//   // initialize an empty string
//   var looped = "";
//   // use += in a for loop that uses the length of the results
//   for (let story of stories) {
//     console.log(story);
//     looped =
//       looped +
//       `
//       <div class="item">
//         <h3>${story.title}</h3>
//         <p>${story.abstract}</p>
//       </div>
//       `;
//   }
//   console.log(looped);
// }

// document.addEventListener("click", clickHandlers);


if (document.querySelector('.home')){
  getStories();
}

