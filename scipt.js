document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('send-details-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const phoneNumber = document.getElementById('family-number').value;
        if (phoneNumber) {
            alert(`Details will be sent to ${phoneNumber}.`);
            // Here, you can add code to actually send the details to the family members
            // For example, using AJAX to send data to a server
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('location-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const duration = document.getElementById('duration').value;
        const contacts = document.getElementById('contacts').value.split(',').map(contact => contact.trim());

        // Validate the form
        if (contacts.length === 0) {
            alert('Please enter at least one contact.');
            return;
        }

        // Simulate sending location data
        alert(`Location will be shared with ${contacts.join(', ')} for ${duration} hours.`);

        // Implement actual sharing logic here
        // For example, you might want to send this data to your server

        // Clear the form
        form.reset();
    });
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const totalVideos = 4; // Number of videos
    let watchedVideos = 0; // Number of watched videos

    // Function to update the progress bar
    function updateProgressBar() {
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        const percentage = (watchedVideos / totalVideos) * 100;
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${Math.round(percentage)}% completed`;
    }

    // Function to mark a video as watched
    function markVideoAsWatched(event) {
        const button = event.target;
        const videoId = button.getAttribute('data-video');

        // Avoid multiple clicks
        if (!button.classList.contains('watched')) {
            watchedVideos += 1; // Increment watched videos count
            button.classList.add('watched'); // Mark button as watched
            updateProgressBar(); // Update progress bar
        }
    }

    // Add event listeners to all "Mark as Watched" buttons
    const watchButtons = document.querySelectorAll('.mark-watched');
    watchButtons.forEach(button => {
        button.addEventListener('click', markVideoAsWatched);
    });

    // Initialize progress bar on page load
    updateProgressBar();
});
