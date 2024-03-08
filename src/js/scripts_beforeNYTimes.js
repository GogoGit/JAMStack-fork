/*
NY TIMES API
App Name:  testingAPI
App ID:  bb5b663b-15d5-44ca-83b7-bb9132c249fe
key: bb5b663b-15d5-44ca-83b7-bb9132c249fe

V2 = version 2

?is the search URL (see MDN)
*/


const api =
  "https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=bb5b663b-15d5-44ca-83b7-bb9132c249fe";



//This displays what you are clicking on in the browser console :)

// document.addEventListener("click", clickHandlers);
// function clickHandlers(event) {
//   console.log(event.target);
// }




function clickHandlers(event) {
  if (!event.target.matches("button")) return;
  // fetch("https://jsonplaceholder.typicode.com/posts")
  fetch("api")
    .then((response) => response.json())
    // .then((json) => console.log(json));
    .then((data) => showData(data));
}

// function showData(data){
//   document.querySelector('.stories').innerText = data[1].body;
// }


function showData(data) {
  // console.log(data);

  // let content = "";

  // for (let i = 0; i < data.length; i++) {
  //   // console.log("foo::", i, data[i]);
  //   // content += data[i].title;
  //   //content += `<h3>${data[i].title}</h3>`;
  //   content += `<h3>${data[i].title}</h3><p>${data[i].body}</p>`; // new
  // }

/*
  Better solution for above is to use a FOR of LOOP (works with arrays) vs FOR in LOOP (works with objects)
*/
// for (let post of data) {
//   console.log("foo::", post);
//   content += `<h3>${post.title}</h3><p>${post.body}</p>`; // new
// }

/* How about using a MAP FUNCTION!!!!
    they work on arrays, you define a function on what it does!
*/
  let content = data.map(
    (post) => `
          <h3>${post.title}</h3>
          <p>${post.body}</p>`
  
  ).join("");  //join is used becuase it would automatically add a ',' after each run



  // document.querySelector(".stories").innerText = content;
  // THIS IS A MASSIVE SECURITY PROBLEM!!!!
  // YOU SHOULD PURIFY this see npmjs.com/package/dompurify

  document.querySelector(".stories").innerHTML = content;
}


//Here is an example of fetching data when you click on this button :)
document.addEventListener("click", clickHandlers);
