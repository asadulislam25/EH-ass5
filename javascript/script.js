
let hearts = 0;

let heartCount = document.getElementById("heart-count");

// when heart btn clicked
let allHearts = document.getElementsByClassName("heart-btn");

for (let heart of allHearts) {
  heart.addEventListener("click", function () {
    hearts = hearts + 1;
    heartCount.innerText = hearts;
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid");
    heart.style.color = "red";
  });
}