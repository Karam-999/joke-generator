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
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);

      // Clear previous joke
      joker.innerHTML = '';

      // Create and insert setup
      const setupEl = document.createElement('p');
      setupEl.textContent = response.setup;
      joker.appendChild(setupEl);

      // Create and insert punchline after delay
      setTimeout(() => {
        const punchlineEl = document.createElement('p');
        punchlineEl.textContent = response.punchline + ' 😂';
        punchlineEl.style.backgroundColor = '#b0ffb0';
        punchlineEl.style.display = 'inline-block';
        punchlineEl.style.padding = '5px 10px';
        punchlineEl.style.borderRadius = '5px';
        punchlineEl.style.marginTop = '10px';
        punchlineEl.style.maxWidth = '100%';
        punchlineEl.style.wordWrap = 'break-word';

        joker.appendChild(punchlineEl);
      }, 3000);
    }
  };

  karam.send();
};

jokeButn.addEventListener('click', theJoke);
document.addEventListener('DOMContentLoaded', theJoke);
