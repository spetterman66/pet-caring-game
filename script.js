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
fish.addEventListener("click", function () {
    localStorage.setItem("pet", "fish");
    console.log('Fish selected')
    localStorage.setItem("petemoji", "🐠")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
turtle.addEventListener("click", function () {
    localStorage.setItem("pet", "turtle");
    console.log('Turtle selected')
    localStorage.setItem("petemoji", "🐢")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
lizard.addEventListener("click", function () {
    localStorage.setItem("pet", "lizard");
    console.log('Lizard selected')
    localStorage.setItem("petemoji", "🦎")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
snake.addEventListener("click", function () {
    localStorage.setItem("pet", "snake");
    console.log('Snake selected')
    localStorage.setItem("petemoji", "🐍")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
pig.addEventListener("click", function () {
    localStorage.setItem("pet", "pig");
    console.log('Pig selected')
    localStorage.setItem("petemoji", "🐷")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
cow.addEventListener("click", function () {
    localStorage.setItem("pet", "cow");
    console.log('Cow selected')
    localStorage.setItem("petemoji", "🐮")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
horse.addEventListener("click", function () {
    localStorage.setItem("pet", "horse");
    console.log('Horse selected')
    localStorage.setItem("petemoji", "🐴")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
sheep.addEventListener("click", function () {
    localStorage.setItem("pet", "sheep");
    console.log('Sheep selected')
    localStorage.setItem("petemoji", "🐑")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
dragon.addEventListener("click", function () {
    localStorage.setItem("pet", "dragon");
    console.log('Dragon selected')
    localStorage.setItem("petemoji", "🐲")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
monkey.addEventListener("click", function () {
    localStorage.setItem("pet", "monkey");
    console.log('Monkey selected')
    localStorage.setItem("petemoji", "🐵")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
panda.addEventListener("click", function () {
    localStorage.setItem("pet", "panda");
    console.log('Panda selected')
    localStorage.setItem("petemoji", "🐼")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
koala.addEventListener("click", function () {
    localStorage.setItem("pet", "koala");
    console.log('Koala selected')
    localStorage.setItem("petemoji", "🐨")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
tiger.addEventListener("click", function () {
    localStorage.setItem("pet", "tiger");
    console.log('Tiger selected')
    localStorage.setItem("petemoji", "🐯")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
bear.addEventListener("click", function () {
    localStorage.setItem("pet", "bear");
    console.log('Bear selected')
    localStorage.setItem("petemoji", "🐻")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
elephant.addEventListener("click", function () {
    localStorage.setItem("pet", "elephant");
    console.log('Elephant selected')
    localStorage.setItem("petemoji", "🐘")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
rhino.addEventListener("click", function () {
    localStorage.setItem("pet", "rhino");
    console.log('Rhino selected')
    localStorage.setItem("petemoji", "🦏")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
hippo.addEventListener("click", function () {
    localStorage.setItem("pet", "hippo");
    console.log('Hippo selected')
    localStorage.setItem("petemoji", "🦛")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
crocodile.addEventListener("click", function () {
    localStorage.setItem("pet", "crocodile");
    console.log('Crocodile selected')
    localStorage.setItem("petemoji", "🐊")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
penguin.addEventListener("click", function () {
    localStorage.setItem("pet", "penguin");
    console.log('Penguin selected')
    localStorage.setItem("petemoji", "🐧")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
octopus.addEventListener("click", function () {
    localStorage.setItem("pet", "octopus");
    console.log('Octopus selected')
    localStorage.setItem("petemoji", "🐙")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
shark.addEventListener("click", function () {
    localStorage.setItem("pet", "shark");
    console.log('Shark selected')
    localStorage.setItem("petemoji", "🦈")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
whale.addEventListener("click", function () {
    localStorage.setItem("pet", "whale");
    console.log('Whale selected')
    localStorage.setItem("petemoji", "🐳")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
dolphin.addEventListener("click", function () {
    localStorage.setItem("pet", "dolphin");
    console.log('Dolphin selected')
    localStorage.setItem("petemoji", "🐬")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
unicorn.addEventListener("click", function () {
    localStorage.setItem("pet", "unicorn");
    console.log('Unicorn selected')
    localStorage.setItem("petemoji", "🦄")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
frog.addEventListener("click", function () {
    localStorage.setItem("pet", "frog");
    console.log('Frog selected')
    localStorage.setItem("petemoji", "🐸")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
seal.addEventListener("click", function () {
    localStorage.setItem("pet", "seal");
    console.log('Seal selected')
    localStorage.setItem("petemoji", "🦭")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
deer.addEventListener("click", function () {
    localStorage.setItem("pet", "deer");
    console.log('Deer selected')
    localStorage.setItem("petemoji", "🦌")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
antelope.addEventListener("click", function () {
    localStorage.setItem("pet", "antelope");
    console.log('Antelope selected')
    localStorage.setItem("petemoji", "🦌")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
kangaroo.addEventListener("click", function () {
    localStorage.setItem("pet", "kangaroo");
    console.log('Kangaroo selected')
    localStorage.setItem("petemoji", "🦘")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
bat.addEventListener("click", function () {
    localStorage.setItem("pet", "bat");
    console.log('Bat selected')
    localStorage.setItem("petemoji", "🦇")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
owl.addEventListener("click", function () {
    localStorage.setItem("pet", "owl");
    console.log('Owl selected')
    localStorage.setItem("petemoji", "🦉")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
eagle.addEventListener("click", function () {
    localStorage.setItem("pet", "eagle");
    console.log('Eagle selected')
    localStorage.setItem("petemoji", "🦅")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
parrot.addEventListener("click", function () {
    localStorage.setItem("pet", "parrot");
    console.log('Parrot selected')
    localStorage.setItem("petemoji", "🦜")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
peacock.addEventListener("click", function () {
    localStorage.setItem("pet", "peacock");
    console.log('Peacock selected')
    localStorage.setItem("petemoji", "🦚")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
flamingo.addEventListener("click", function () {
    localStorage.setItem("pet", "flamingo");
    console.log('Flamingo selected')
    localStorage.setItem("petemoji", "🦩")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
swan.addEventListener("click", function () {
    localStorage.setItem("pet", "swan");
    console.log('Swan selected')
    localStorage.setItem("petemoji", "🦢")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
turkey.addEventListener("click", function () {
    localStorage.setItem("pet", "turkey");
    console.log('Turkey selected')
    localStorage.setItem("petemoji", "🦃")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
chicken.addEventListener("click", function () {
    localStorage.setItem("pet", "chicken");
    console.log('Chicken selected')
    localStorage.setItem("petemoji", "🐔")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
rooster.addEventListener("click", function () {
    localStorage.setItem("pet", "rooster");
    console.log('Rooster selected')
    localStorage.setItem("petemoji", "🐓")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
fox.addEventListener("click", function () {
    localStorage.setItem("pet", "fox");
    console.log('Fox selected')
    localStorage.setItem("petemoji", "🦊")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
crow.addEventListener("click", function () {
    localStorage.setItem("pet", "crow");
    console.log('Crow selected')
    localStorage.setItem("petemoji", "🦅")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
butterfly.addEventListener("click", function () {
    localStorage.setItem("pet", "butterfly");
    console.log('Butterfly selected')
    localStorage.setItem("petemoji", "🦋")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
jellyfish.addEventListener("click", function () {
    localStorage.setItem("pet", "jellyfish");
    console.log('Jellyfish selected')
    localStorage.setItem("petemoji", "🪼")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
crab.addEventListener("click", function () {
    localStorage.setItem("pet", "crab");
    console.log('Crab selected')
    localStorage.setItem("petemoji", "🦀")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
lobster.addEventListener("click", function () {
    localStorage.setItem("pet", "lobster");
    console.log('Lobster selected')
    localStorage.setItem("petemoji", "🦞")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
shrimp.addEventListener("click", function () {
    localStorage.setItem("pet", "shrimp");
    console.log('Shrimp selected')
    localStorage.setItem("petemoji", "🦐")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
squid.addEventListener("click", function () {
    localStorage.setItem("pet", "squid");
    console.log('Squid selected')
    localStorage.setItem("petemoji", "🦑")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
snail.addEventListener("click", function () {
    localStorage.setItem("pet", "snail");
    console.log('Snail selected')
    localStorage.setItem("petemoji", "🐌")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
bee.addEventListener("click", function () {
    localStorage.setItem("pet", "bee");
    console.log('Bee selected')
    localStorage.setItem("petemoji", "🐝")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
ladybug.addEventListener("click", function () {
    localStorage.setItem("pet", "ladybug");
    console.log('Ladybug selected')
    localStorage.setItem("petemoji", "🐞")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
ant.addEventListener("click", function () {
    localStorage.setItem("pet", "ant");
    console.log('Ant selected')
    localStorage.setItem("petemoji", "🐜")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
spider.addEventListener("click", function () {
    localStorage.setItem("pet", "spider");
    console.log('Spider selected')
    localStorage.setItem("petemoji", "🕷")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
scorpion.addEventListener("click", function () {
    localStorage.setItem("pet", "scorpion");
    console.log('Scorpion selected')
    localStorage.setItem("petemoji", "🦂")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
grasshopper.addEventListener("click", function () {
    localStorage.setItem("pet", "grasshopper");
    console.log('Grasshopper selected')
    localStorage.setItem("petemoji", "🦗")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
beetle.addEventListener("click", function () {
    localStorage.setItem("pet", "beetle");
    console.log('Beetle selected')
    localStorage.setItem("petemoji", "🐞")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
raccoon.addEventListener("click", function () {
    localStorage.setItem("pet", "raccoon");
    console.log('Raccoon selected')
    localStorage.setItem("petemoji", "🦝")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
wolf.addEventListener("click", function () {
    localStorage.setItem("pet", "wolf");
    console.log('Wolf selected')
    localStorage.setItem("petemoji", "🐺")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
}); 
polarbear.addEventListener("click", function () {
    localStorage.setItem("pet", "polarbear");
    console.log('Polar Bear selected')
    localStorage.setItem("petemoji", "🐻‍❄️")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
chick.addEventListener("click", function () {
    localStorage.setItem("pet", "chick");
    console.log('Chick selected')
    localStorage.setItem("petemoji", "🐥")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
dove.addEventListener("click", function () {
    localStorage.setItem("pet", "dove");
    console.log('Dove selected')
    localStorage.setItem("petemoji", "🕊")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
tropicalfish.addEventListener("click", function () {
    localStorage.setItem("pet", "tropicalfish");
    console.log('Tropical Fish selected')
    localStorage.setItem("petemoji", "🐠")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
blowfish.addEventListener("click", function () {
    localStorage.setItem("pet", "blowfish");
    console.log('Blowfish selected')
    localStorage.setItem("petemoji", "🐡")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
goose.addEventListener("click", function () {
    localStorage.setItem("pet", "goose");
    console.log('Goose selected')
    localStorage.setItem("petemoji", "🪿")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
mouse.addEventListener("click", function () {
    localStorage.setItem("pet", "mouse");
    console.log('Mouse selected')
    localStorage.setItem("petemoji", "🐭")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
rat.addEventListener("click", function () {
    localStorage.setItem("pet", "rat");
    console.log('Rat selected')
    localStorage.setItem("petemoji", "🐀")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
hedgehog.addEventListener("click", function () {
    localStorage.setItem("pet", "hedgehog");
    console.log('Hedgehog selected')
    localStorage.setItem("petemoji", "🦔")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
black_cat.addEventListener("click", function () {
    localStorage.setItem("pet", "black_cat");
    console.log('Black Cat selected')
    localStorage.setItem("petemoji", "🐈‍⬛")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
black_bird.addEventListener("click", function () {
    localStorage.setItem("pet", "black_bird");
    console.log('Black Bird selected')
    localStorage.setItem("petemoji", "🐦‍⬛")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
gorilla.addEventListener("click", function () {
    localStorage.setItem("pet", "gorilla");
    console.log('Gorilla selected')
    localStorage.setItem("petemoji", "🦍")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
orangutan.addEventListener("click", function () {
    localStorage.setItem("pet", "orangutan");
    console.log('Orangutan selected')
    localStorage.setItem("petemoji", "🦧")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
sloth.addEventListener("click", function () {
    localStorage.setItem("pet", "sloth");
    console.log('Sloth selected')
    localStorage.setItem("petemoji", "🦥")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
otter.addEventListener("click", function () {
    localStorage.setItem("pet", "otter");
    console.log('Otter selected')
    localStorage.setItem("petemoji", "🦦")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
beaver.addEventListener("click", function () {
    localStorage.setItem("pet", "beaver");
    console.log('Beaver selected')
    localStorage.setItem("petemoji", "🦫")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
badger.addEventListener("click", function () {
    localStorage.setItem("pet", "badger");
    console.log('Badger selected')
    localStorage.setItem("petemoji", "🦡")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
donkey.addEventListener("click", function () {
    localStorage.setItem("pet", "donkey");
    console.log('Donkey selected')
    localStorage.setItem("petemoji", "🫏")
    localStorage.setItem("petselected", "true");
    location.reload();
    petSelection.style.display = 'none';
});
bison.addEventListener("click", function () {
    localStorage.setItem("pet", "bison");
    console.log('Bison selected')
    localStorage.setItem("petemoji", "🦬")
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

function showMore() {
    let page1 = document.getElementById('page1')
    let page2 = document.getElementById('page2')
    let page3 = document.getElementById('page3')
    let page4 = document.getElementById('page4')
    let page5 = document.getElementById('page5')
    let page6 = document.getElementById('page6')

    // If the first page is visible, hide it and show the second page
    // If the second page is visible, hide it and show the third page
    // If the third page is visible, hide it and show the fourth page
    // If the fourth page is visible, hide it and show the fifth page
    // If the fifth page is visible, hide it and show the sixth page
    // if the sixth page is visible, hide it and show the first page
    // begin!
    if (page1.style.display !== "none") {
        page1.style.display = "none";
        page2.style.display = "block";
    } else if (page2.style.display !== "none") {
        page2.style.display = "none";
        page3.style.display = "block";
    } else if (page3.style.display !== "none") {
        page3.style.display = "none";
        page4.style.display = "block";
    } else if (page4.style.display !== "none") {
        page4.style.display = "none";
        page1.style.display = "block";
    } else if (page5.style.display !== "none") {
        page5.style.display = "none";
        page6.style.display = "block";
    } else if (page6.style.display !== "none") {
        page6.style.display = "none";
        page1.style.display = "block";
    }
}
function randomPet() {
    let pets = ['dog', 'cat', 'rabbit', 'hamster', 'bird', 'duck', 'fish', 'turtle', 'lizard', 'snake', 'pig', 'cow', 'horse', 'sheep', 'dragon', 'monkey', 'panda', 'koala', 'tiger', 'bear', 'elephant', 'rhino', 'hippo', 'crocodile', 'penguin', 'octopus', 'shark', 'whale', 'dolphin', 'unicorn', 'frog']
    let random = pets[Math.floor(Math.random() * pets.length)];
    localStorage.setItem('pet', random);
    if (random == 'dog'){
        localStorage.setItem('petemoji', '🐶');
    }
    if (random == 'cat'){
        localStorage.setItem('petemoji', '😺')
    }
    if (random == 'rabbit'){
        localStorage.setItem('petemoji', '🐰')
    }
    if (random == 'hamster'){
        localStorage.setItem('petemoji', '🐹')
    }
    if (random == 'bird'){
        localStorage.setItem('petemoji', '🐦')
    }
    if (random == 'duck'){
        localStorage.setItem('petemoji', '🦆')
    }
    if (random == 'fish'){
        localStorage.setItem('petemoji', '🐠')
    }
    if (random == 'turtle'){
        localStorage.setItem('petemoji', '🐢')
    }
    if (random == 'lizard'){
        localStorage.setItem('petemoji', '🦎')
    }
    if (random == 'snake'){
        localStorage.setItem('petemoji', '🐍')
    }
    if (random == 'pig'){
        localStorage.setItem('petemoji', '🐷')
    }
    if (random == 'cow'){
        localStorage.setItem('petemoji', '🐮')
    }
    if (random == 'horse'){
        localStorage.setItem('petemoji', '🐴')
    }
    if (random == 'sheep'){
        localStorage.setItem('petemoji', '🐑')
    }
    if (random == 'dragon'){
        localStorage.setItem('petemoji', '🐲')
    }
    if (random == 'monkey'){
        localStorage.setItem('petemoji', '🐵')
    }
    if (random == 'panda'){
        localStorage.setItem('petemoji', '🐼')
    }
    if (random == 'koala'){
        localStorage.setItem('petemoji', '🐨')
    }
    if (random == 'tiger'){
        localStorage.setItem('petemoji', '🐯')
    }
    if (random == 'bear'){
        localStorage.setItem('petemoji', '🐻')
    }
    if (random == 'elephant'){
        localStorage.setItem('petemoji', '🐘')
    }
    if (random == 'rhino'){
        localStorage.setItem('petemoji', '🦏')
    }
    if (random == 'hippo'){
        localStorage.setItem('petemoji', '🦛')
    }
    if (random == 'crocodile'){
        localStorage.setItem('petemoji', '🐊')
    }
    if (random == 'penguin'){
        localStorage.setItem('petemoji', '🐧')
    }
    if (random == 'octopus'){
        localStorage.setItem('petemoji', '🐙')
    }
    if (random == 'shark'){
        localStorage.setItem('petemoji', '🦈')
    }
    if (random == 'whale'){
        localStorage.setItem('petemoji', '🐳')
    }
    if (random == 'dolphin'){
        localStorage.setItem('petemoji', '🐬')
    }
    if (random == 'unicorn'){
        localStorage.setItem('petemoji', '🦄')
    }
    if (random == 'frog'){
        localStorage.setItem('petemoji', '🐸')
    }
    localStorage.setItem('petselected', 'true');
    location.reload();
    petSelection.style.display = 'none';
}