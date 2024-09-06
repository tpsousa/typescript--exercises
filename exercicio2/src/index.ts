type coordenadas=[number,number,number]
type planet = {
 name:string,
 coordenadas: coordenadas,
 situacao: string,
 satelites:string[],
 [key:string]:any;

} 

let planets : planet[]=[]


function AddPlanet(name: string , coordenadas:coordenadas,situacao:string,satelites:String[]){
 planets.push( {
  name,
  coordenadas,
  situacao,
  satelites : []
 })
}

function findPlanet(name:string){
  const planet = planets.find(planet => planet.name===name)

  return planet ?? false
}

function editPlanet(name:string,propiedade: string,valor:any){
  const planet = findPlanet(name);
  if(planet){
    planet[propiedade]=valor
  }else{
    console.log(`planeta com o nome ${name} nao encontrado.`)
  }
}

function addSatelite(name:string,satelite:string){
  const planet = findPlanet(name)
  if(planet){
  planet.satelites.push(satelite)
  }else{
    console.log(`planeta com o nome ${name} nao encontrado`)
  }
}
function showAllPlanets(){
  console.log('planetas registrados')

  planets.forEach((planet,index)=>{
    console.log(`$index+1.name${planet.name},Planeta:${planet.name},coordenadas:${planet.coordenadas},situacao:${planet.situacao},satelites:${planet.satelites}`)
  })
}

interface CelestialBody {
  name:string,
  mass:number
}

interface Star extends CelestialBody{
  age:number,
  planets: Planet[]
}

interface Planet extends CelestialBody{
 population : number,
 createSatellite: (name:string)=> void
}

let sun : Star = {
  name: "Sol",
  mass: 1.989 * (10** 30),
  age: 4.603 * (10** 9),
  planets :[]
}

class MilkWayPlanet implements Planet {
  name: string
  mass: number
  population: number;

  constructor(name:string,mass:number,population:number){
    this.name = name
    this.mass=mass
    this.population = population
  }

  createSatellite: (name: string){
    // ...
  }
}

type Asteroid = CelestialBody &{
  size : number
}

class BigAsteroid implements Asteroid{
  name : string
  mass:number
  size: number

  constructor(name: string , mass: number,size:number){
    this.name = name
    this.mass=mass
    this.size= size
  }
}

