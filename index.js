const excuses = [
    "A slow merchant threw my computer on the street",
    "My dog ate my homework",
    "I got stuck in traffic",
    "My alarm didn't go off",
    "There was a power outage"
];

function getRandomExcuse() {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    return excuses[randomIndex];
}

document.getElementById("excuse").innerText = getRandomExcuse();
