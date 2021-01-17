(function () {
  const moviesList = document.querySelector('.moviesList');
  const cards = [];

  for (let i = 0; i < movies.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card', 'col-md-4', 'col-lg-4');
    card.setAttribute('style', 'width: 18rem');

    const img = document.createElement('img');
    img.setAttribute('src', movies[i].Images[0]);
    // img.setAttribute('src', '#');
    img.classList.add('card-img-top');
    img.setAttribute('alt', 'picture name');

    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const cardTitle = document.createElement('h5');
    cardTitle.innerHTML = movies[i].Title;

    cardTitle.classList.add('card-title');
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardBody.appendChild(cardText);

    const actorsList = document.createElement('ul');
    actorsList.classList.add('actorsList', 'list-group', 'list-group-flush');
    card.appendChild(actorsList);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-body');
    card.appendChild(cardFooter);

    const link1 = document.createElement('a');
    const link1text = document.createTextNode('Card link');
    link1.setAttribute('href', '#');
    link1.classList.add('card-link');
    link1.appendChild(link1text);

    cardFooter.appendChild(link1);

    const link2 = document.createElement('a');
    const link2text = document.createTextNode('Card link');
    link2.setAttribute('href', '#');
    link2.classList.add('card-link');
    link2.appendChild(link2text);

    cardFooter.appendChild(link2);

    moviesList.appendChild(card);
    cards.push(card);
  }
}());
