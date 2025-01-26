// JavaScript functionality for the Test Website
document.getElementById('magic-button').addEventListener('click', function () {
    const welcomeText = document.getElementById('welcome-text');
    welcomeText.textContent = "You just clicked the button! 🎉";
    alert("Magic happened!");
});
