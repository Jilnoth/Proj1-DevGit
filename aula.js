
/** Variaveis */

let idade1 = 5;
console.log("O número é : "+idade);

/** Regras de nomeação de variaveis 

Use camelCase
Variaveis são case sensitive*/

/** como exemplo apresente o valor de três variaveis diferentes */
let n1=1,n2=2,n3=3;

console.log("var 1: "+n1+" var 2: "+n2+" var 3: "+n3);

/** Constante */

const pi = 3.14;
pi = 34.5; /** Uma constante não posedra ser alterada   */

console.log("constante : "+pi);

/*Tipos primitivos (tipos por valores)

String, number, boolean, undefined, null, obj*/

let nome = 'Rafael';
let idade = 25;
let aprovado = 'true';
let sobreNome =  undefined;
let corSelecionado = null;

/** Tipagem dinámica */

/** Objectos (tipos por referência)*/


let pessoa = {
     nome: 'Samuel',
     idade: 25,
     aprovado:'true',
     sobreNome:  undefined,
     corSelecionado: null
   }
   
   console.log(pessoa);

   /** ARRAYS conjunto de dados que pode ser acessado por um indice */

   let familia = [26,45,50,17];

console.log(familia);

  console.log(familia.length);

  /** Array associativo em Javascript não existe <> Objecto*/

let pessoaObject = [ 
nome ='Samuel', 
idade = 25,
aprovado='true',
sobreNome= undefined,
corSelecionado=null
]

console.log(familia.nome);  

/** Funções */

let corSite = "azul";
function resetarCor (cor, tonalidade){
   corSite = cor + " " +tonalidade;
}

console.log(corSite)

resetarCor("vermelho","claro");
console.log(corSite);


/** Tipos de  Funções */

function dizerNome(){
    console.log("Samuel");
  }
  dizerNome();
  
  function multiplicar(valor){
    return valor * 2;
  }
  
  console.log(multiplicar(3));



/** OPERADORES

1. Aritméticos  +,-,*,/,**
2. Atribuição
3. Comparação
4.Lógicos
5. Betwise
*/

/** Operadores 1 */

let salario = 100;

console.log(salario + salario)
console.log(salario - salario)
console.log(salario * salario)
console.log(salario ** salario)
console.log(5**5);


/** Operadores de Atribuição */

let nota = 10;

/** Operadores de incremento e decremento */

console.log(nota++);
console.log(nota);
console.log(++nota);

/** Operadores de Atribuição */

noto +=nota;
noto -=nota;



/** Operadores de igualidade */

 /** Igualidade estrita */

 console.log(1===1); 
 console.log("1"===1); 
 
  /** Igualidade solta */
 
 console.log(1==1); 
 console.log("1"==1); 



let pontos = 100;

let tipo = pontos > 100 ? "premium" : "comum";

/* se fossemos a usar o if : */ /*
      
      if (pontos > 100){
         let tipo = "premium";
      }else {
           let tipo = "comum";
      } 
*/

console.log(tipo);