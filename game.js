// windgame is a clicker game
// INIT //
let difficultyScale = {
    easy: 1.25,
    medium: 1.5,
    hard: 2,
    extreme: 3,
    impossible: 5
};
let difficulty = difficultyScale.medium;
let $$$ = 0;
let $$$total = 0;
let add = 1;
let prestiges = 0;
let prestigeMult = 1.5;
let prestigePrice = 100000;
let multiplier = {
    artist: 1,           // draws a banknote every second
    farm: 2,             // farms 2 banknotes every second
    mine: 5,             // mines 5 banknotes every second
    factory: 10,         // produces 10 banknotes every second
    // bank
        local: 20,       // local bank recieves 20 banknotes every second
        city: 75,        // city bank recieves 75 banknotes every second
        country: 2500,   // country bank recieves 2500 banknotes every second
    temple: 50,          // 50 banknotes are discovered every second
    orphanage: 100,      // 100 banknotes are paid every second
    moneyPrinter: 250,   // prints 250 banknotes every second
    // moneyGenerator
        wooden: 300,     // generates 300 banknotes every second
        stone: 700,      // generates 700 banknotes every second
        metal: 2000,     // generates 2000 banknotes every second
        gold: 8000,      // generates 8000 banknotes every second
        diamond: 13500,  // generates 13500 banknotes every second
        platinum: 35000, // generates 35000 banknotes every second
    
    // company
        small: 500,      // generates 500 banknotes every second
        medium: 1000,    // generates 1000 banknotes every second
        large: 5000,     // generates 5000 banknotes every second
        huge: 25000,     // generates 25000 banknotes every second
        massive: 50000   // generates 50000 banknotes every second
}

let prices = {
    artist: 25,
    farm: 50,
    mine: 100,
    factory: 200,
    // bank
        local: 600,
        city: 2000,
        country: 125000,
    temple: 1000,
    orphanage: 3000,
    moneyPrinter: 10000,
    // moneyGenerator
        wooden: 15000,
        stone: 50000,
        metal: 100000,
        gold: 200000,
        diamond: 400000,
        platinum: 800000,
    // company
        small: 25000,
        medium: 75000,
        large: 150000,
        huge: 500000,
        massive: 1000000
}

/* every item:
 * artist - 10$ - produces 1$
 * farm - 50$ - produces 2$
 * mine - 100$ - produces 5$    
 * factory - 200$ - produces 10$
 * local bank - 600$ - produces 20$
 * temple - 1000$ - produces 50$
 * city bank - 2000$ - produces 75$
 * orphanage - 3000$ - produces 100$
 * money printer - 10000$ - produces 250$
 * wooden money generator - 15000$ - produces 300$
 * small company - 25000$ - produces 500$
 * stone money generator - 50000$ - produces 700$
 * medium company - 75000$ - produces 1000$
 * metal money generator - 100000$ - produces 2000$
 * country bank - 125000$ - produces 2500$
 * large company - 150000$ - produces 5000$
 * gold money generator - 200000$ - produces 8000$
 * diamond money generator - 400000$ - produces 13500$
 * huge company - 500000$ - produces 25000$
 * platinum money generator - 800000$ - produces 35000$
 * massive company - 1000000$ - produces 50000$
 */

let owned = {
    artist: 0,
    farm: 0,
    mine: 0,
    factory: 0,
    // bank
        local: 0,
        city: 0,
        country: 0,
    temple: 0,
    orphanage: 0,
    moneyPrinter: 0,
    // moneyGenerator
        wooden: 0,
        stone: 0,
        metal: 0,
        gold: 0,
        diamond: 0,
        platinum: 0,
    // company
        small: 0,
        medium: 0,
        large: 0,
        huge: 0,
        massive: 0
}

let currentMult = 0;

// FUNCTIONS //
function click() {
    $$$ += prestiges + 1;
    $$$total += prestiges + 1;
    document.getElementById("money").innerHTML = $$$ + "$";
}

function prestige() {
    // god forgive me for this absolutely disgusting code
    if ($$$ >= prestigePrice) {
        add *= prestigeMult;
        prestigeMult *= 1.5;
        prestiges++;
        prestigePrice *= difficulty;
        prestigePrice = Math.round(prestigePrice);
        document.getElementById("prestiges").innerHTML = prestiges + " prestige" + (prestiges == 1 ? "" : "s");
        document.getElementById("prestige").innerHTML = "Prestige (" + prestigePrice + "$)";
        $$$ = 0;
        $$$total = 0;
        document.getElementById("money").innerHTML = $$$ + "$";
        prices["artist"] = 10;
        prices["farm"] = 50;
        prices["mine"] = 100;
        prices["factory"] = 200;
        prices["local"] = 600;
        prices["temple"] = 1000;
        prices["city"] = 2000;
        prices["orphanage"] = 3000;
        prices["moneyPrinter"] = 10000;
        prices["wooden"] = 15000;
        prices["stone"] = 50000;
        prices["metal"] = 100000;
        prices["gold"] = 200000;
        prices["diamond"] = 400000;
        prices["platinum"] = 800000;
        prices["small"] = 25000;
        prices["medium"] = 75000;
        prices["large"] = 150000;
        prices["huge"] = 500000;
        prices["massive"] = 1000000;
        owned["artist"] = 0;
        owned["city"] = 0;
        owned["farm"] = 0;
        owned["mine"] = 0;
        owned["factory"] = 0;
        owned["local"] = 0;
        owned["temple"] = 0;
        owned["orphanage"] = 0;
        owned["moneyPrinter"] = 0;
        owned["wooden"] = 0;
        owned["stone"] = 0;
        owned["metal"] = 0;
        owned["gold"] = 0;
        owned["diamond"] = 0;
        owned["platinum"] = 0;
        owned["small"] = 0;
        owned["medium"] = 0;
        owned["large"] = 0;
        owned["huge"] = 0;
        owned["massive"] = 0;
        currentMult = 0;
        document.getElementById("currentMult").innerHTML = currentMult + "$/s";

        document.getElementById("artist").innerHTML = "0 owned";
        document.getElementById("city").innerHTML = "0 owned";
        document.getElementById("farm").innerHTML = "0 owned";
        document.getElementById("mine").innerHTML = "0 owned";
        document.getElementById("factory").innerHTML = "0 owned";
        document.getElementById("local").innerHTML = "0 owned";
        document.getElementById("temple").innerHTML = "0 owned";
        document.getElementById("orphanage").innerHTML = "0 owned";
        document.getElementById("moneyPrinter").innerHTML = "0 owned";
        document.getElementById("wooden").innerHTML = "0 owned";
        document.getElementById("stone").innerHTML = "0 owned";
        document.getElementById("metal").innerHTML = "0 owned";
        document.getElementById("gold").innerHTML = "0 owned";
        document.getElementById("diamond").innerHTML = "0 owned";
        document.getElementById("platinum").innerHTML = "0 owned";
        document.getElementById("small").innerHTML = "0 owned";
        document.getElementById("medium").innerHTML = "0 owned";
        document.getElementById("large").innerHTML = "0 owned";
        document.getElementById("huge").innerHTML = "0 owned";
        document.getElementById("massive").innerHTML = "0 owned";
        document.getElementById("price-artist").innerHTML = prices["artist"] + "$";
        document.getElementById("price-city").innerHTML = prices["city"] + "$";
        document.getElementById("price-farm").innerHTML = prices["farm"] + "$";
        document.getElementById("price-mine").innerHTML = prices["mine"] + "$";
        document.getElementById("price-factory").innerHTML = prices["factory"] + "$";
        document.getElementById("price-local").innerHTML = prices["local"] + "$";
        document.getElementById("price-temple").innerHTML = prices["temple"] + "$";
        document.getElementById("price-orphanage").innerHTML = prices["orphanage"] + "$";
        document.getElementById("price-moneyPrinter").innerHTML = prices["moneyPrinter"] + "$";
        document.getElementById("price-wooden").innerHTML = prices["wooden"] + "$";
        document.getElementById("price-stone").innerHTML = prices["stone"] + "$";
        document.getElementById("price-metal").innerHTML = prices["metal"] + "$";
        document.getElementById("price-gold").innerHTML = prices["gold"] + "$";
        document.getElementById("price-diamond").innerHTML = prices["diamond"] + "$";
        document.getElementById("price-platinum").innerHTML = prices["platinum"] + "$";
        document.getElementById("price-small").innerHTML = prices["small"] + "$";
        document.getElementById("price-medium").innerHTML = prices["medium"] + "$";
        document.getElementById("price-large").innerHTML = prices["large"] + "$";
        document.getElementById("price-huge").innerHTML = prices["huge"] + "$";
        document.getElementById("price-massive").innerHTML = prices["massive"] + "$";
    }
}

function start() {
    document.getElementById("difficultyPick").remove();
    document.getElementById("click").onclick = click;
    document.getElementById("prestige").onclick = prestige;
    if (difficulty == difficultyScale.easy) {
        document.getElementById("difficulty").innerHTML = "Difficulty: Easy";
    }
    else if (difficulty == difficultyScale.medium) {
        document.getElementById("difficulty").innerHTML = "Difficulty: Medium";
    }
    else if (difficulty == difficultyScale.hard) {
        document.getElementById("difficulty").innerHTML = "Difficulty: Hard";
    }
    else if (difficulty == difficultyScale.extreme) {
        document.getElementById("difficulty").innerHTML = "Difficulty: Extreme";
    }
    else if (difficulty == difficultyScale.impossible) {
        document.getElementById("difficulty").innerHTML = "Difficulty: Impossible";
    }
    update();
}

function update() {
    $$$ += Math.round(currentMult * (prestiges+1));
    $$$total += Math.round(currentMult * (prestiges+1));
    document.getElementById("money").innerHTML = $$$ + "$";
    document.getElementById("moneyTotal").innerHTML = "This prestige: " + $$$total + "$";
    document.getElementById("currentMult").innerHTML = (currentMult * (prestiges+1)) + "$/s";
    setTimeout(update, 1000);
}

function purchase(id) {
    if ($$$ >= prices[id]) {
        $$$ -= prices[id];
        owned[id]++;
        prices[id] *= difficulty;
        prices[id] = Math.round(prices[id]);
        document.getElementById(id).innerHTML = owned[id] + " owned";
        document.getElementById("money").innerHTML = $$$ + "$";
        document.getElementById(`price-${id}`).innerHTML = prices[id] + "$";
        currentMult += multiplier[id];
        document.getElementById("currentMult").innerHTML = currentMult * (prestiges+1) + "$/s";
    }
}