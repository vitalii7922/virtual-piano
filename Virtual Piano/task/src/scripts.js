document.addEventListener("keypress", function (event) {
    switch (event.code) {
        case 'KeyA':
            print('A');
            break;
        case 'KeyS':
            print('S');
            break;
        case 'KeyD':
            print('D');
            break;
        case 'KeyF':
            print('F');
            break;
        case 'KeyG':
            print('G');
            break;
        case 'KeyH':
            print('H');
            break;
        case 'KeyJ':
            print('J');
            break;
        default:
            console.warn(`\'${event.key}\' isn\'t used in the piano`);
            break;
    }
});

let print = (key) => console.log(`The \'${key}\' key is pressed.`);
