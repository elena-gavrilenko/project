const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privet: false,
};
for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");

  if (a.length < 50 && a != "" && b != "" && a != null && b != null) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}
console.log(personalMovieDB);
