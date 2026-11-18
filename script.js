const actionBtn = document.getElementById('actionBtn');
const displayMessage = document.getElementById('displayMessage');
let isActive = false;

actionBtn.addEventListener('click', function() {
    if (!isActive) {
        displayMessage.textContent = "❤️ Welcome to our family website — so glad you're here!";
        isActive = true;
        actionBtn.textContent = "💙 Thank You";
    } else {
        displayMessage.textContent = "Family — where life begins and love never ends.";
    }
});

console.log("RAMIREZ FAM website ❤️");
