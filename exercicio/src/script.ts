
type ship = {
  name: string;
  pilot: string;
  crewLimitte:number;
  crew:string[];
  inMission:boolean;
}
let allShips : ship[]= []

function sendSpendShip(name : string,pilot: string,crewLimitte: number,inMission:boolean){
  const spendShip = {
    name,
    pilot,
    crewLimitte:crewLimitte,
    crew:[],
    inMission: false,
  }

  alert(`uma nave chamada  ${spendShip.name} comandada pelo capitao ${spendShip.pilot} foi lancada para o infinito e alem!`)

  allShips.push(spendShip)

  return spendShip
}

function addCrew(spendShip:{crew : string[] , crewLimitte:number},crewMember: string){
 if(spendShip.crew.length < spendShip.crewLimitte){
   spendShip.crew.push(crewMember)
   console.log(`o tripulante ${crewMember}`)
 }else{
  console.log(`infelizmente o limite da nave foi alcancado,e o tripulante ${crewMember} nao esta abordo conosco`)
 }
}
function verifyMission (spendShip:{name: string,inMission:boolean}){
  if(spendShip.inMission != false){
    console.log(`a nave chamada ${spendShip.name} ja esta em uma missao`)
  }else{
    spendShip.inMission = true
   console.log(`a nave chamada ${spendShip.name} acabou de ser enviada para uma missao`)
  }
}
function showAllShips(){
  console.log('Naves registradas:');

  allShips.forEach((ship,index)=>{
    console.log(`$index+1.name${ship.name},Piloto: ${ship.pilot},tripulacao: ${ship.crew.length}/${ship.crewLimitte},em missao : ${ship.inMission}`)
  })
}