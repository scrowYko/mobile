let taskID = 0

class Tarefa{
    constructor(title, isDone = false){
        this.id = ++taskID
        this.title = title
        this.isDone = isDone
    }
}

export const novaTarefa = (title, array, atualizarTarefas) => {
   let tarefaCriada = new Tarefa(title);
   atualizarTarefas([...array, tarefaCriada])
   return true
}

