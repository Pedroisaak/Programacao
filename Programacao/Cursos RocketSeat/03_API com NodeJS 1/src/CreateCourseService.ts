
/* 
Criamos essa interface que servira como objeto para preencher os parametros do 'execute' e aqui já definimos os tipos
da variavel 
*/
interface Course {
    name : string;
    duration?: number; // Com o TS podemos definir se um parametro é obrigatório ou não inserindo ?
    educator: string;
}

class CreateCourseService {
    execute({duration = 8, educator, name}: Course){ //usamos desestruturação para pegar os valores da interface e definimos um valor padrão para duration
        console.log(name, duration, educator)
    }
}

export default new CreateCourseService(); // importamos o CreateCourseService já instanciando uma nova