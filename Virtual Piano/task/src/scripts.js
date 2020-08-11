document.addEventListener("keypress", function (event) {
    let letter = event.key;
    let eventCode = event.code;
    let whiteKeys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ'];
    let blackKeys = ['KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU'];
    if (whiteKeys.includes(eventCode)) {
        let audio = new Audio(`Audio/white_keys/${letter.toUpperCase()}.mp3`);
        audio.play();
    } else if (blackKeys.includes(eventCode)) {
        let audio = new Audio(`Audio/black_keys/${letter.toUpperCase()}.mp3`);
        audio.play();
    }
});


