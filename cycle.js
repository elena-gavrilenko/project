const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privet: false,
};
for (let i = 0; i < 2; i++) {
  (a = prompt("Один из последних просмотренных фильмов?", "")),
    (b = prompt("На сколько оцените его?", ""));
  personalMovieDB.movies[a] = b;
}
