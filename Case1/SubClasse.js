const SuperClasse = require("./src/SuperClasse");

class SubClasse extends SuperClasse{
    constructor( ) {
        super()
        this.name = 'Felisberto'
    }


}


new SubClasse().log()
