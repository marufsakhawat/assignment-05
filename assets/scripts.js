// Heart button for increasing hearcount
let heartBalance = 0;
let hearts = document.getElementsByClassName("heart");
for (let i = 0; i < hearts.length; i++) {
    hearts[i].onclick = function () {
        heartBalance = heartBalance + 1;
        document.getElementById("heart-balance").innerText = heartBalance;
    }
}

// Copy function
let copyBalance = 0;
let copyBtns = document.getElementsByClassName("copy-btn"); 
for (let i = 0; i < copyBtns.length; i++) {
    copyBtns[i].onclick = function () {
        copyBalance = copyBalance + 1;
        document.getElementById("copy-balance").innerText = copyBalance;

        let card = copyBtns[i].parentNode.parentNode;  
        let copyNumber = card.getElementsByClassName("service-number")[0].innerText;

        navigator.clipboard.writeText(copyNumber);

        alert("This Number copied: " + copyNumber);
    }
}

// Call Function
let transactionData = [];
const callBtns = document.querySelectorAll(".call-btn");
const coinBalanceEl = document.getElementById("coin-balance");
const transactionContainer = document.getElementById("container");

callBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".card"); // safer than parentNode.parentNode
        const serviceName = card.querySelector(".service-name").innerText;
        const serviceNumber = card.querySelector(".service-number").innerText;

        let coinBalance = parseInt(coinBalanceEl.innerText);

        if (coinBalance < 20) {
            alert("You don't have enough coins for call");
            return;
        }

        coinBalanceEl.innerText = coinBalance - 20;

        alert(`Calling... ${serviceName} at: ${serviceNumber}`);

        const data = {
            name: serviceName,
            num: serviceNumber,
            time: new Date().toLocaleTimeString()
        };

        transactionData.push(data);

        // Add transaction history block
        const div = document.createElement("div");
        div.style.marginTop = "12px";
        div.style.padding = "10px";
        div.style.background = "#f1f1f1";
        div.style.borderRadius = "10px";

        div.innerHTML = `
            <b>${data.name}</b><br>
            ${data.num}<br>
            <small>${data.time}</small>
        `;

        transactionContainer.appendChild(div);
    });
});


// Clear call history function
document.getElementById("history-clear").onclick = function () {
    transactionData = []; 
    document.getElementById("container").innerHTML = "";
}