
let coins = 100;
let hearts = 0;
let copies = 0;


let heartCount = document.getElementById("heart-count");
let coinCount = document.getElementById("coin_count");
let copyCount = document.getElementById("copy-count");
let callHistory = document.getElementById("call_history");
let clearBtn = document.getElementById("clear_btn");

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


let allCopyBtns = document.getElementsByClassName("copyBtn");

// when click copy btn
for (let btn of allCopyBtns) {
  btn.addEventListener("click", function () {
    let parentCard = btn.closest(".card, .rounded-2xl");
    let number = parentCard.querySelector(".hotline_number").innerText;

    navigator.clipboard.writeText(number);

    copies = copies + 1;
    copyCount.innerText = copies;

    alert("✅ Number " + number + " copied!");
  });
}

// when click call btn
let allCallBtns = document.getElementsByClassName("callBtn");

for (let btn of allCallBtns) {
  btn.addEventListener("click", function () {
    let parentCard = btn.closest(".card, .rounded-2xl");
    let serviceName = parentCard.querySelector(".hotline_title").innerText;
    let number = parentCard.querySelector(".hotline_number").innerText;

  
    if (coins < 20) {
      alert("❌ Not enough coins, need 20 coin for each call");
      return;
    }

    coins = coins - 20;
    coinCount.innerText = coins;

    alert("📞 Calling " + serviceName + " (" + number + ")...");

    // add to call history
    let time = new Date().toLocaleTimeString();
    let div = document.createElement("div");
    

    div.innerHTML = `
    <div class="flex justify-between items-center  w-full mb-4 bg-[#FAFAFA] p-2">
      <div>
        <h4 class="text-[15px] font-medium">${serviceName}</h4>
        <p class="mt-2 font-medium'">${number}</p>
      </div>
      <div>
      <h5 class="text-[12px]">${time}</h5>
      </div>
    </div>
    `;

    callHistory.appendChild(div);
  });
}

clearBtn.addEventListener("click", function () {
  callHistory.innerHTML = "";
});