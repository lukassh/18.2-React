var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'images/harry-potter.jpg'
  },
    {
    id: 2,
    title: 'Skazani na Shawshank ',
    desc: 'film o wiezieniu',
    img: 'images/skazani.jpg'
  },
    {
    id: 3,
    title: 'Nietykalni ',
    desc: 'film o niepelnosprawnosci',
    img: 'images/nietykalni.jpeg'
  },
    {
    id: 4,
    title: 'Zielona mila',
    desc: 'film o falszywym oskarzeniu',
    img: 'images/Zielona-mila.jpg'
  },
    {
    id: 5,
    title: 'Ojciec chrzestny ',
    desc: 'film o mafii',
    img: 'images/Ojciec-chrzestny.jpg'
  },
  {
    id: 6,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'images/krol-lew.jpg'
  }
];


var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', { src: movie.img })
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
