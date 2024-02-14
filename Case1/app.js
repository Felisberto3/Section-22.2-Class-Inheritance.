const SuperClasse = require("./SuperClasse");

class SubClasse extends SuperClasse{
    constructor( ) {
        super()
        this.name = 'Felisberto'
    }


}


new SubClasse().log()