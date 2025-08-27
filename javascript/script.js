
let heartCount = 0;
const heartCounter = document.getElementById("heart-count");

const hearts = document.querySelectorAll(".heart");

    
for (const heart of hearts) {
    heart.addEventListener("click", function() {
    heartCount = heartCount + 1  
    heartCounter.innerText = heartCount
});
}

