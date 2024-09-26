document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('button-container');
    const audioPlayer = document.getElementById('audioPlayer'); // Get the audio element
    
    // Array to keep track of selected songs
    let songs = [];
    // Index of the currently played song
    let current_song_index = 0;

    // Creates an event listener to find any sort of input that may have changed
    document.getElementById("filepicker").addEventListener(
        "change",
        (event) => {
            // Clears the existing buttons
            container.innerHTML = '';

            // Loop through the selected files
            for (const file of event.target.files) {
                // Create a button for each song
                const button = document.createElement('button');
                button.textContent = file.name;

                // Create a link to the file location for each button
                const fileUrl = URL.createObjectURL(file);
                button.setAttribute('data-url', fileUrl);

                // Insert a link for each button
                button.addEventListener('click', function() {
                    // Get the stored URL
                    const mp3Url = button.getAttribute('data-url');
                    // Set the source of the audio player to the MP3
                    audioPlayer.src = mp3Url;
                    // Play the audio
                    audioPlayer.play();
                });
                // Append the button to the container
                container.appendChild(button);
                
                // Append the button to the container
                container.appendChild(document.createElement('br'));
            }
        },
        false
    );
});


