const jokeContainer = document.querySelector("#joke");
const jokeBtn = document.querySelector("#btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getJoke() {
  jokeContainer.classList.remove("fade");
  const res = await fetch(url);
  const data = await res.json();
  jokeContainer.textContent = `${data.joke}`;
  jokeContainer.classList.add("fade");
}
jokeBtn.addEventListener("click", getJoke);
getJoke();

// let getJoke = () => {
//   jokeContainer.classList.remove("fade");
//   fetch(url)
//     .then((data) => {
//       return data.json();
//     })
//     .then((item) => {
//       jokeContainer.textContent = `${item.joke}`;
//       jokeContainer.classList.add("fade");
//     });
// };
