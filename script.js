/*Data una struttura di dati nella forma di array che rappresentano una lista
di cose da fare:
- visualizzare tutti i todo
- al click su un elemento della lista questo scompare
- attraverso un input di testo è possibie aggiungere cose da fare*/

const app = new Vue({
    el: '#todo',
    //- visualizzare tutti i todo
    data: {
        toDoList: ['fare la spesa', 'fare gli esercizi', 'scendere il cane'],
        deletedToDo: []
    },
    methods: {
        taskIsDone(todoIndex){
            this.deletedToDo.push(todoIndex);
        }
        
    }
})