// The script.js file can be left empty or removed if no other JavaScript is needed.
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");
    audio.volume = 0.5; // Set volume to 50%
    
    // Play the audio only when user interacts (to comply with autoplay policies)
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        }
    });
});
