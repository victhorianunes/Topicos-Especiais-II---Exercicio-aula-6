import { Injectable } from '@angular/core';

interface Task {
  title: string;
}


@Injectable()
export class TasksService {
  
  list: Array<Task> = [{title: "Negócios e Marketing e Eletrônicos"},
                       {title: "Desenvolvimento para Servidores II"},
                       {title: "Inglês V"},
                       {title: "Projeto de Prototipagem e Testes de Usabilidade"},
                       {title: "Desenvolvimento para Dispositivos Móveis I"},
                       {title: "Tópicos Especiais em Sistemas para Internet I"},
                       {title: "Projeto de Trabalho de Graduação em Sistemas para Internet I"}, ];

  constructor() { }

  getList (){
    return this.list;
  }

  add (title: string){
    this.list.push({title});
  }

  remove (index: number){
    this.list.splice(index, 1);
  }

}