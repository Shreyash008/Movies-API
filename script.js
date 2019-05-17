const dev = document.getElementById('main');
const image = document.createElement('img');
image.src = 'logo.png';
const data = document.createElement('div');
data.setAttribute('class', 'data');
dev.appendChild(image);
dev.appendChild(data);
var R1 = new XMLHttpRequest();
R1.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
R1.onload = function () {
  var ele = JSON.parse(this.response);
  if (R1.status >= 200 && R1.status < 400) {
    ele.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;
      const info = document.createElement('info');
      movie.description = movie.description.substring(0, 300);
      info.textContent = `${movie.description}...`;
      data.appendChild(card);
      card.appendChild(h1);
      card.appendChild(info);
    })
  } 
}
R1.send();
