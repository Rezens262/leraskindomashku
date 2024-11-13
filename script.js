function sendRequest() {
    const alertBox = document.getElementById("alert");
    const randomResponse = Math.random();

    if (randomResponse > 0.5) {
        alertBox.textContent = "Yay! You're a lifesaver! 📚💡";
        alertBox.style.display = "block";
        alertBox.style.color = "#32cd32"; // green
        alertBox.classList.remove('sad');
    } else {
        alertBox.textContent = "Oops, no homework for you... 😭";
        alertBox.style.display = "block";
        alertBox.style.color = "#dc143c"; // red
        alertBox.classList.add('sad');
    }
}
