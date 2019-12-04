(function(){
  // Envolva todo o cÃ³digo desse arquivo em uma IIFE (incluindo esse comentÃ¡rio).
  
  /*
  Crie uma variÃ¡vel chamada `once`, que recebe `false` como seu valor.
  Crie um loop que execute enquanto essa variÃ¡vel for verdadeira. Dentro do
  loop, mostre no console a mensagem:
  'Entrou ao menos uma vez!'
  Qual loop vocÃª deve usar para que essa mensagem seja mostrada no console?
  */
  var once = false;
  do{  
     console.log('Entrou ao menos uma vez!');
  } while(once == true);
  
  /*
  Crie um objeto chamado `person`, que receba as seguintes propriedades:
  - 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
  para o nome, idade, peso e data de nascimento dessa pessoa.
  */
  var person = {
      name: 'Gilmar',
      age: 38,
      weight: 69.5,
      birthday: '24/04/1981'
  };
  
  /*
  Use um loop para percorrer o objeto criado acima, mostrando no console
  a frase: 
  'The [PROPERTY] of person is [VALUE]'
  Aproveite e crie uma variÃ¡vel `counter` que vai contar quantas propriedades
  esse objeto tem.
  ApÃ³s o loop, mostre a frase:
  'The person has [COUNTER] properties'
  */
  var x =0;
  for(var prop in person){
     console.log('The ' + prop + ' of person is ' + person[prop])
     x++;
  }
  console.log('The person has ' + x + ' properties');

  
  /*
  Crie uma funçãoo chamada `moreThan`, que vai verificar se a pessoa (objeto
  criado acima) Ã© mais velha que a idade passada por parÃ¢metro.
  Se verdadeiro, retornar `true`. SenÃ£o, retornar false.
  ApÃ³s a funÃ§Ã£o, mostrar a mensagem no console:
  'The person has more than 25 years old? [TRUE/FALSE]'
  */
  function moreThan(_age){
    if(person.age > _age){
       return true;
    }
    return false;
  }
  console.log('The person has more than 25 years old? ' + moreThan(25));
  
  /*
  FaÃ§a um loop de 0 a 20, que adicione cada nÃºmero como um item de um
  array chamado `numbers`. Se o contador for maior que 10, saia do loop.
  Mostre no console os nÃºmeros no array.
  */
  console.log( 'De 0 a 10:' );
  var numbers = [];
  for(var x=0 ; x < 20 ; x++){
     numbers.push(x);
     if(x > 10){
       break;
     }
  }
  console.log(numbers);
  
  /*
  FaÃ§a outro loop de 0 a 20, que adicione a um array chamado `numbers` (jÃ¡
  criado acima, sÃ³ precisa ser reiniciado) nÃºmeros de 0 a 20, inclusive
  esses. Se o nÃºmero for Ã­mpar, pular para o prÃ³ximo nÃºmero.
  Mostrar no console os nÃºmeros do array.
  */
  console.log( 'Pares de 0 a 20:' );
  numbers = [];
  
  for( var x = 0 ; x < 20 ; x++ ){
     if(x % 2 !== 0){
       continue;
     }
     numbers.push(x);     
  }
  console.log(numbers);
  
})();
