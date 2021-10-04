// let personalMovieDB.count;
// function start() {
//   personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");
//   while (personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count == "") {
//     personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");
//   }
// }
// start();
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privet: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");
    while (
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count) ||
      personalMovieDB.count == ""
    ) {
      personalMovieDB.count = +prompt(
        "Сколько фильмов вы уже просмотрели?",
        ""
      );
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre == null || genre == "") {
        console.log("Некорректный ввод");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((element, i) => {
      console.log(`Любимый жанр № ${i + 1}-${element}`);
          });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privet) {
      personalMovieDB.privet = false;
    } else personalMovieDB.privet = true;
  },
};
// personalMovieDB.start();
// console.log(personalMovieDB.count);
// personalMovieDB.rememberMyFilms();
// console.log(personalMovieDB.movies);
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB.privet);
// const str = "А роза упала на лапу Азора";
// console.log(str.slice(7, 12));
// console.log(str.slice(21, 26));
// console.log(str.slice(7));

// const option = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   color: {
//     border: "red",
//     bg: "black",
//   },
// };
// console.log(Object.keys(option).length);
// // let counter = 0;
// // for (let key in option) {
// //   if (typeof option[key] === "object") {
// //     for (let i in option[key]) {
// //       console.log(`Свойство ${i} имеет значение ${option[key][i]} `);
// //       counter++;
// //     }
// //   } else {
// //     console.log(`Свойство ${key} имеет значение ${option[key]} `);
// //     counter++;
// //   }
// // }
// // console.log(counter);
// const { border, bg } = option.color;
// console.log(border);
// const obj = {
//   a: "big",
//   b: "small",
//   c: "among",
//   d: {
//     f: "red",
//     j: "blue",
//   },
// };
// objNew = { ...obj };
// objNew.a = "biggest";
// objNew.d.f = "yellow";
// console.log(objNew);
// console.log(obj);
