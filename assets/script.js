function startQuiz() {
    // Hide the "Start Quiz" button
    document.querySelector('.startBtn').style.display = 'none'; 
    // Get the time element
    const timeElement = document.querySelector('.time');

    // Determine the initial time from the element
    let timeLeft = parseInt(timeElement.textContent);

    // Start the countdown timer
    const countdownInterval = setInterval(function () {
        timeLeft--;

        // Update the time on the page
        timeElement.textContent = timeLeft;

        // Check if the timer has reached 0
        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            alert('Time is up!'); 
        }
    }, 1000); // Update the timer every 1000 milliseconds (1 second)
}

// Add an event listener to the "Start Quiz" button
document.querySelector('.startBtn').addEventListener('click', startQuiz);
