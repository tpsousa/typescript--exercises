class SpacesShip {
  private _name: string;
  protected captain: string;
  protected speed: number;

  get name() {
    return this._name;
  }
  
  set name(name: string) {
    this._name = name;
  }

  constructor(name: string, captain: string) {
    this._name = name;
    this.captain = captain;
    this.speed = 0;
  }

  public accelerate(rate: number, time: number) {
    this.speed = rate * time;
  }
}

class Fighter extends SpacesShip {
  weapons: number;

  constructor(name: string, captain: string, weapons: number) {
    super(name, captain);
    this.weapons = weapons;
  }

  shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log('Pew!');
    }
  }

  erase() {
    this.name = '';
    this.captain = '';
  }
}

let ship = new Fighter('USS Enterprise', 'James T. Kirk', 10);

// Acelerando a nave
ship.accelerate(50, 10);

// Atirando com a nave
ship.shoot();

// Limpando as informações da nave
ship.erase();

console.log(ship.name); // ''
console.log(ship.captain); // ''
