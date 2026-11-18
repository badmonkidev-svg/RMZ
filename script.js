const actionBtn = document.getElementById('actionBtn');
const displayMessage = document.getElementById('displayMessage');
let isActive = false;

actionBtn.addEventListener('click', function() {
    if (!isActive) {
        displayMessage.textContent = "🌟 Let's create something amazing!";
        isActive = true;
        actionBtn.textContent = "✨ Keep Going!";
    } else {
        displayMessage.textContent = "💪 Every step counts — you've got this!";
    }
});

console.log("RMZ site is live! 🚀");
