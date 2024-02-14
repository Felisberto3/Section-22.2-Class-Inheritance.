const SuperClasse = require("./superClasse");

class SubClasse extends SuperClasse {
    constructor({ name, age }){
        super({ name, age })
       
    }
}

new SubClasse({
    name:'Felisberto',
    age:22
}).greating()