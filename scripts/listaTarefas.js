let taskID = 0

class Tarefa{
    constructor(title, isDone = false, date){
        this.id = ++taskID
        this.title = title
        this.isDone = isDone
        this.date = date
    }
}

export const novaTarefa = (title, array, atualizarTarefas) => {
   let tarefaCriada = new Tarefa(title);
   atualizarTarefas([...array, tarefaCriada])
   return true
}

export const alterBoolean = (id, array, atualizarTarefas) => {
    let updatedArray = array.map((tarefa) => {
        if (tarefa.id === id) {
            return { ...tarefa, isDone: !tarefa.isDone };
        }
        return tarefa;
    });
    atualizarTarefas(updatedArray);
    console.log(updatedArray.find(tarefa => tarefa.id === id).isDone);
    return true;
}
