/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var variavel = ['gilmar', 1, 565.23, true, 'justo'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcao(_array){
  return _array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(funcao(variavel)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retIndex(_arr, index){
  return _arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var var2 = ['Gilmar' , 'Justo' , 1981, 04 , 24 ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retIndex(var2,0));
console.log(retIndex(var2,1));
console.log(retIndex(var2,2));
console.log(retIndex(var2,3));
console.log(retIndex(var2,4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(_bookName){
  var allBooks = {
    'Livro 1' : { qtdePaginas: 488,  autor: 'Gilmar Justo',     editora: 'Novatec'           } ,
    'Livro 2' : { qtdePaginas: 500,  autor: 'Diego Hipolito',   editora: 'Atlas'             } ,
    'Livro 3' : { qtdePaginas: 120,  autor: 'Daniel Shumacher', editora: 'Trends and Blends' }
   }    
   if(_bookName){
     return allBooks[_bookName];
   }

  return allBooks;  
    
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
*/
var book1 = 'Livro 1';
var book2 = 'Livro 2';
var book3 = 'Livro 3';
console.log('O livro ' + book1 + ' tem ' + book(book1).qtdePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
*/
console.log('O autor do livro ' + book1 + ' é ' + book(book1).autor + '.');


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + book3 + ' foi publicado pela editora ' + book(book3).editora + '.');
