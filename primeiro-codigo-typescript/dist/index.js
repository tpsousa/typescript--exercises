function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("a nave ".concat(spaceship.name, " comandada pelo capitao ").concat(spaceship.captain, " foi enviada em uma missao."));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("mantendo a velocidade da ".concat(spaceship.name, "..."));
    }
}
var spaceshipName = prompt('Insira o nome da nave a ser enviada:');
var spaceshipCaptain = prompt('Insira o nome do capitão da nave:');
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt('Insira a velocidade para a qual deseja acelerar:'));
accelerate(speed, currentShip);
