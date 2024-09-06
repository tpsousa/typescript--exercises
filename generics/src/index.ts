function retornaValor<t>(valor: t):t{
  return valor
}

const numero = retornaValor(10);
const texto= retornaValor("ola")

function mergeObjects<t,u>(obj1:t, obj2:u):t & u{
  return {...obj1,...obj2}
}

const result = mergeObjects({name:'thiago'},{age:25})

console.log(result.name)
console.log(result.age)

class caixa <t> {
  private _conteudo:t;

  constructor(conteudo:t){
    this._conteudo = conteudo;
  }

  getConteudo(): t{
    return this._conteudo;
  }

  setConteudo(conteudo:t):void{
    this._conteudo = conteudo
  }
}

const caixaString = new caixa <string> ("ola mundo");

console.log(caixaString.getConteudo());

const caixaDeNumero = new caixa<number>(123)


interface Par <k,v> {
  chave: k;
  valor: v;
}
const par1 : Par<string,number> = {chave:"idade",valor:25}

const par2: Par<number,string> = {chave:1,valor: "thiago"}

console.log(par1)
console.log(par2)

function adicionaTimestamp(constructor: Function){
  constructor.prototype.timestamp=new Date()}

  @adicionaTimestamp
  class pessoa{
    nome:string

    constructor(nome:string){
      this.nome = nome
    }
  }