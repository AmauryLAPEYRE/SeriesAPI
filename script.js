document.querySelector('button').addEventListener('click', function () {
  const inputValue = document.querySelector('input').value;
  if(inputValue === "") {
} else {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.tvmaze.com/search/shows?q=" + inputValue, false)
    xhttp.send();
    let results = JSON.parse(xhttp.response)
    document.querySelector('main').innerHTML = "";
    for (let i = 0; i < results.length; i++) {
      displaySerie(results[i]);
    }
  }
})
document.querySelector('body').addEventListener('click', function(el) {
  if (el.target.classList.contains('image')) {
    el.target.parentElement.nextSibling.classList.toggle('hidden')

  }
})
function displaySerie(serie) {

  let target = document.querySelector('main');
  let div_flex = document.createElement('DIV');
  let name = document.createElement('H2');
  let div_img = document.createElement('DIV');
  let img = document.createElement('IMG');
  let summary = document.createElement('P');
  let div_genres = document.createElement('DIV')
  let genres = document.createElement('P');
  let div_status = document.createElement('DIV')
  let status = document.createElement('P');
  name.innerHTML = serie.show.name;
  if (serie.show.image === null) {
  } else {
    img.src = serie.show.image.medium;
    img.classList.add('image');
  }
  div_flex.classList.add("flex-container")
  div_img.classList.add("div_img");
  div_genres.classList.add("genres");
  div_status.classList.add("status");
  img.src = serie.show.image.medium;
  summary.innerHTML = serie.show.summary;
  summary.classList.add('summary');
  summary.classList.add('hidden');
  genres.innerHTML = "Genre : " + serie.show.genres;
  status.innerHTML = serie.show.status;


  div_flex.appendChild(name);
  div_img.appendChild(img);
  div_flex.appendChild(div_img);
  div_flex.appendChild(summary);
  div_genres.appendChild(genres);
  div_flex.appendChild(div_genres);
  div_status.appendChild(status);
  div_flex.appendChild(div_status);
  target.appendChild(div_flex);

}
