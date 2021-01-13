(function () {
  movies.forEach((movie) => {
    const moviesList = document.querySelector('.moviesList');
    // const card = document.createElement('div');
    // const img = document.createElement('img');
    // card.classList.add('card');

    // img.setAttribute('src', movie.Images[0]);
    // card.appendChild(img);
    const card = document.querySelector('.card');
    const img = card.querySelector('img');
    img.setAttribute('src', movie.Images[0]);

    card.appendChild(img);

    moviesList.appendChild(card);
  });
}());
