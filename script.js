let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
  while (numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms == "") {
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
  }
}
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privet: false,
};
/*for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");*/
function rememberMyFilms() {
  let i = 0;
  while (i < 2) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

    if (a.length < 50 && a != "" && b != "" && a != null && b != null) {
      personalMovieDB.movies[a] = b;
      i++;
    } else {
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
detectPersonalLevel();
function showMyDB() {
  if (!personalMovieDB.privet) {
    console.log(personalMovieDB);
  }
}
/*showMyDB();*/
function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
  console.log(personalMovieDB);
}
writeYourGenres();
const str = "А роза упала на лапу Азора";
console.log(str.slice(7, 12));
console.log(str.slice(21, 26));
console.log(str.slice(7));

const option = {
  name: "test",
  width: 1024,
  height: 1024,
  color: {
    border: "red",
    bg: "black",
  },
};
console.log(Object.keys(option).length);
// let counter = 0;
// for (let key in option) {
//   if (typeof option[key] === "object") {
//     for (let i in option[key]) {
//       console.log(`Свойство ${i} имеет значение ${option[key][i]} `);
//       counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${option[key]} `);
//     counter++;
//   }
// }
// console.log(counter);
const { border, bg } = option.color;
console.log(border);