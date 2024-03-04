function startGame() {
    localStorage.setItem('readTutorial', true);
    let tutorial = document.getElementById('tutorial');
    tutorial.style.display = 'none';
    tutorial.ariaHidden = true;
}

let hunger = localStorage.getItem('hungervalue');
let happiness = localStorage.getItem('happinessvalue');
let hydration = localStorage.getItem('hydrationvalue');
let cleanliness = localStorage.getItem('cleanlinessvalue');
let pet = localStorage.getItem('petemoji');
let feedbutton = document.getElementById('feed');

function initializeGame() {
    if (localStorage.getItem('readTutorial')) {
        let tutorial = document.getElementById('tutorial');
        tutorial.style.display = 'none';
        tutorial.ariaHidden = true;
    }
    else return;
    if (localStorage.getItem('petselected')) {
        petSelection.ariaHidden = true;
        petSelection.style.display = 'none';
        document.getElementById('petimage').innerHTML = pet;
    }
    else return;
    if (localStorage.getItem('hungervalue')) {
        document.getElementById('hungervalue').value = hunger;
    }
    else return;
    if (localStorage.getItem('happinessvalue')) {
        document.getElementById('happinessvalue').value = happiness;
    }
    else return;
    if (localStorage.getItem('hydrationvalue')) {
        document.getElementById('hydrationvalue').value = hydration;
    }
    else return;
    if (localStorage.getItem('cleanlinessvalue')) {
        document.getElementById('cleanlinessvalue').value = cleanliness;
    }
    else return;
    if (localStorage.getItem('pet')) {
        document.getElementById('petimage').innerHTML = pet;
    }
    else return;
    if (localStorage.getItem('petemoji')) {
        document.getElementById('emoji').value = pet;
    }
    else return;
}

function resetGame() {
    localStorage.clear();
    location.reload();
}

let dog = document.getElementById("dog");
let cat = document.getElementById("cat");
let rabbit = document.getElementById("rabbit");
let hamster = document.getElementById("hamster");
let petSelection = document.getElementById('choosepet');

dog.addEventListener("click", function () {
    localStorage.setItem("pet", "dog");
    console.log('Woof! Dog selected')
    localStorage.setItem("petselected", "true");
    localStorage.setItem("petemoji", "🐶")
    localStorage.setItem("food", "🦴")
    location.reload();
    petSelection.style.display = 'none';
});
cat.addEventListener("click", function () {
    localStorage.setItem("pet", "cat");
    console.log('Meow! Cat selected')
    localStorage.setItem("petemoji", "😺")
    localStorage.setItem("food", "🐟")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
rabbit.addEventListener("click", function () {
    localStorage.setItem("pet", "rabbit");
    console.log('Rabbit selected')
    localStorage.setItem("petemoji", "🐰")
    localStorage.setItem("food", "🥕")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
hamster.addEventListener("click", function () {
    localStorage.setItem("pet", "hamster");
    console.log('Hamster selected')
    localStorage.setItem("petemoji", "🐹")
    localStorage.setItem("food", "🥜")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
bird.addEventListener("click", function () {
    localStorage.setItem("pet", "bird");
    console.log('Tweet! Bird selected')
    localStorage.setItem("petemoji", "🐦")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
duck.addEventListener("click", function () {
    localStorage.setItem("pet", "duck");
    console.log('Quack! Duck selected')
    localStorage.setItem("petemoji", "🦆")
    localStorage.setItem("food", "🍞")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
function feed() {
    document.getElementById('hungervalue').value += 20;
    let hungervaluenum = document.getElementById('hungervalue').value
    localStorage.setItem('hungervalue', hungervaluenum);
    setTimeout(() => {
        localStorage.setItem('hungervalue', hungervaluenum);
        document.getElementById('hungervalue').value -= 20;
    }, 300000);
}
function play() {
    document.getElementById('happinessvalue').value += 20;
    let happinessvaluenum = document.getElementById('happinessvalue').value
    localStorage.setItem('happinessvalue', happinessvaluenum);
    setTimeout(() => {
        localStorage.setItem('happinessvalue', happinessvaluenum);
        document.getElementById('happinessvalue').value -= 20;
    }, 300000);
}
function giveDrink() {
    document.getElementById('hydrationvalue').value += 20;
    let hydrationvaluenum = document.getElementById('hydrationvalue').value
    localStorage.setItem('hydrationvalue', hydrationvaluenum);
    setTimeout(() => {
        localStorage.setItem('hydrationvalue', hydrationvaluenum);
        document.getElementById('hydrationvalue').value -= 20;
    }, 300000);
}
function clean() {
    document.getElementById('cleanlinessvalue').value += 20;
    let cleanlinessvaluenum = document.getElementById('cleanlinessvalue').value
    localStorage.setItem('cleanlinessvalue', cleanlinessvaluenum);
    setTimeout(() => {
        localStorage.setItem('cleanlinessvalue', 20);
        document.getElementById('cleanlinessvalue').value -= 20;
    }, 300000);
}
function saveGame() {
    // export localstorage items 
    localStorage.getItem('hungervalue');
    localStorage.getItem('happinessvalue');
    localStorage.getItem('hydrationvalue');
    localStorage.getItem('cleanlinessvalue');
    localStorage.getItem('petemoji');

    // Create an object to hold the data
    var data = {};

    // Iterate over each item in localStorage
    for (var i = 0; i < localStorage.length; i++) {
        // Get the key for the current item
        var key = localStorage.key(i);

        // Get the value for the current item
        var value = localStorage.getItem(key);

        // Add the key-value pair to the data object
        data[key] = value;
    }

    // Convert the data object to a JSON string
    var json = JSON.stringify(data);

    // Create a Blob from the JSON string
    var blob = new Blob([json], { type: "application/json" });

    // Create a URL from the Blob
    var url = URL.createObjectURL(blob);

    // Create a link element
    var link = document.createElement('a');

    // Set the href of the link to the URL
    link.href = url;

    // Set the download attribute of the link
    link.download = 'game.json';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
}
function loadGame() {
    var input = document.createElement('input');

    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = function () {

        var file = input.files[0];
        var reader = new FileReader();

        reader.onload = function () {
            var data = JSON.parse(reader.result);

            for (var key in data) {
                localStorage.setItem(key, data[key]);
            }

            location.reload();
        };

        reader.readAsText(file);
    };

    input.click();
}