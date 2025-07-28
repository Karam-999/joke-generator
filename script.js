// const jokeEl = document.getElementById('joke');
// const jokeBtn = document.getElementById('joke-btn');

// const generateJoke = () => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'https://official-joke-api.appspot.com/random_joke');

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4) {
//       if (this.status === 200) {
//         // console.log(JSON.parse(this.responseText).value);
//         jokeEl.innerHTML =
//           JSON.parse(this.responseText).setup +
//           ' - ' +
//           JSON.parse(this.responseText).punchline;
//       } else {
//         jokeEl.innerHTML = 'Something Went Wrong (Not Funny)';
//       }
//     }
//   };

//   xhr.send();
// };

// jokeBtn.addEventListener('click', generateJoke);
// document.addEventListener('DOMContentLoaded', generateJoke);

const joker = document.getElementById('joke');
const jokeButn = document.getElementById('joke-btn');

const theJoke = () => {
  const karam = new XMLHttpRequest();
  karam.open('GET', 'https://official-joke-api.appspot.com/random_joke');

  karam.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        // console.log(JSON.parse(this.responseText).value);
        // joke.innerHTML =
        //   JSON.parse(this.responseText).setup +
        //   ' - ' +
        //   JSON.parse(this.responseText).punchline;
        console.log(this.readyState);
        console.log(this.status);
        // console.log(
        //   `${JSON.parse(this.responseText).setup}-${
        //     JSON.parse(this.responseText).punchline
        //   }`
        // );
        joker.innerHTML = JSON.parse(this.responseText).setup;

        setTimeout(() => {
          // joker.innerHTML =
          // JSON.parse(this.responseText).setup +
          // ' - ' +
          punchln = document.createElement('div');
          punchln.innerHTML = JSON.parse(this.responseText).punchline + ' 😂 ';
          joker.appendChild(punchln);
          punchln.style.backgroundColor = '#b7ffabff';
        }, 3000);
        // addJokeToThePage();
      } else {
        console.log('what is this?');
      }
    }
  };
  karam.send();
};
// function addJokeToThePage() {
//   joke.innerHTML =
//     JSON.parse(this.responseText).setup +
//     '-' +
//     JSON.parse(this.responseText).punchline;
// }
// joke.appendChild(joke);

jokeButn.addEventListener('click', theJoke);
document.addEventListener('DOMContentLoaded', theJoke);
