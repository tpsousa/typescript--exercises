document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const pilot = document.getElementById("pilot").value;
    const crewLimit = parseInt(document.getElementById("crewLimite").value, 10); // Corrigido para "crewLimite"
    const inMission = document.getElementById("inMission").checked;
    const crewMember = document.getElementById("crewMember").value;

    const spendShip = sendSpendShip(name, pilot, crewLimit, inMission);

    addCrew(spendShip, crewMember);

    verifyMission(spendShip);

    showAllShips(); // Adicionado os parênteses para executar a função
});

let allShips = [];

function sendSpendShip(name, pilot, crewLimit, inMission) { // Corrigido o nome do parâmetro "crewLimitte"
    const spendShip = {
        name,
        pilot,
        crewLimit: crewLimit, // Corrigido o nome da propriedade "crewLimitte"
        crew: [],
        inMission: inMission,
    };
    alert(`Uma nave chamada ${spendShip.name}, comandada pelo capitão ${spendShip.pilot}, foi lançada para o infinito e além!`);
    allShips.push(spendShip);
    return spendShip;
}

function addCrew(spendShip, crewMember) {
    if (spendShip.crew.length < spendShip.crewLimit) {
        spendShip.crew.push(crewMember);
        console.log(`O tripulante ${crewMember} foi adicionado à nave.`);
    } else {
        console.log(`Infelizmente, o limite da nave foi alcançado, e o tripulante ${crewMember} não está a bordo conosco.`);
    }
}

function verifyMission(spendShip) {
    if (spendShip.inMission) {
        console.log(`A nave chamada ${spendShip.name} já está em uma missão.`);
    } else {
        spendShip.inMission = true;
        console.log(`A nave chamada ${spendShip.name} acabou de ser enviada para uma missão.`);
    }
}

function showAllShips() {
    console.log('Naves registradas:');
    allShips.forEach((ship, index) => {
        console.log(`${index + 1}. Nome: ${ship.name}, Piloto: ${ship.pilot}, Tripulação: ${ship.crew.length}/${ship.crewLimit}, Em missão: ${ship.inMission}`);
    });
}
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value=''
    const pilot = document.getElementById("pilot").value=''
    const crewLimit = parseInt(document.getElementById("crewLimite").value=''); // Corrigido para "crewLimite"
    const inMission = document.getElementById("inMission").checked=''
    const crewMember = document.getElementById("crewMember").value=''; })