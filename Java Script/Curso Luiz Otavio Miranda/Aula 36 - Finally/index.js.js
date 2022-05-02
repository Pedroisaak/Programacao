/*
A cláusula finally é executada após a excecução do bloco try e da(s) cláusula(s) 
catch porém antes das declarações seguintes ao try. Ela sempre é executada, 
independente se uma exceção for lançada ou capturada.

try {
  tryCode - Code block to run
}
catch(err) {
  catchCode - Code block to handle errors
}
finally {
  finallyCode - Code block to be executed regardless of the try result
}

*/

try {
  console.log('Abri')
  console.log('Mexi')
  console.log(a)
  console.log('Fechei')
} 
catch (erro){
  console.log('Erro')
  /* console.log(erro) */
}
finally {
  console.log('Sempre irei executar')
}




 function retonaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');  //usando throw para lancar erro caso o valor não seja uma data
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {     //retornando data e formatando-a
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retonaHora();
  console.log(hora);
} catch(e) {
  // Tratar erro
  // console.log(e);
} finally {                                       //sempre é executada
  console.log('Tenha um bom dia.');
}
