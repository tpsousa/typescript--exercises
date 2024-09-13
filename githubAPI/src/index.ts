interface GitHubUser {
   id:number;
   login:string;
   name:string;
   bio:string;
   public_repos: number;
   repos_url: string;
   message?:"not found"
}

interface gitHubRepoResponse{
  name:string;
  description:string;
  fork:boolean;
  stargazers_count:number;
}

const users : GitHubUser[]=[] // --

async function searchGitHubUser(username:string){
  const response = await fetch(`https://api.github.com/users/${username}`)
  const user: GitHubUser= await response.json()

  if(user.message){
    console.log('o usuario nao foi  encontrado')
  }else{
    users.push(user)
    alert(
      `O usuário ${user.login} foi salvo.\n` +
      `\nid: ${user.id}` +
      `\nlogin: ${user.login}` +
      `\nNome: ${user.name}` +
      `\nBio: ${user.bio}` +
      `\nRepositórios públicos: ${user.public_repos}`
    )
  }
}
async function showUser(username:string){
 const user = users.find(user => user.login=== username) // --

 if(typeof user==='undefined'){
  alert('usuario nao encontrado')
 }else{
  const response = await fetch(user.repos_url)
  const repos: gitHubRepoResponse[] = await response.json()

  let message = `id: ${user.id}\n` +
  `\nlogin: ${user.login}` +
  `\nNome: ${user.name}` +
  `\nBio: ${user.bio}` +
  `\nRepositórios públicos: ${user.public_repos}`
  
  repos.forEach(repo =>{
    message += `\nNome: ${repo.name}`+ `\n Descricao: ${repo.description}` + `\nE     um fork : ${repo.fork ? 'sim' : 'nao'}\n`
  })
  alert(message)
 }
}


function showAllUsers(){
  let message= 'Usuarios:\n'

  users.forEach(user=>{
    message += `\n - ${user.login}`
  })
  alert(message)
}
function showReposTotal(){
  const reposTotal = users.reduce((accumulator,user)=>(accumulator + user.public_repos),0)

  alert(`o grupo possui um total de ${reposTotal} repositorios publicos` )
}
function showTopFive(){
  const topFive = users.slice().sort((a,b)=>b.public_repos - a.public_repos)

  let message = 'top 5 usuarios com mais repositorios publicos'

  topFive.forEach((user,index)=>{
    message += `\n ${index + 1} - ${user.login}:${user.public_repos} repositorios`
  })
  alert(message)
}

async function main(){ // --
  await searchGitHubUser('isaacpontes')
  await searchGitHubUser('julianaconde')
  await searchGitHubUser('pcaldass')
  await searchGitHubUser('lucasqueirogaa')
  await searchGitHubUser('frans203')
  await searchGitHubUser('leDragox')

  await showUser('isaacpontes')
  await showUser('julianaconde')

  showAllUsers()
  showReposTotal()
  showTopFive()
}

main()
