// scripts.js

// Show the popup
// Show the popup
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
}

// Close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Redirect to the selected level page
function goToLevel(level) {
    // Redirect to the corresponding level page
    window.location.href = `${level}.html`;  // For example, "A1.html"
}
