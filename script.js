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
        doneToDo: [],
        newToDo: ''
    },
    methods: {
        taskIsDone(todoIndex){
            this.doneToDo.push(todoIndex);
        },
        //metodo per inserire nella lista dei to do quello che viene scritto nell'input
        addNewToDo(){
            if(this.newToDo.length > 0){
                this.toDoList.unshift(this.newToDo);
                //scrivo questo per resettare l'input ogni volta che inserisco del testo
                this.newToDo= '';
            }
        }
    }
})