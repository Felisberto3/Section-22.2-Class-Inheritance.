class SuperClasse {
    constructor() {
        // a função log que está no objecto console, está a ser depositada na variável logger
        this.logger = console.log
        this.name = 'Felisberto'
    }

    // inicializamos a função que está na variável 
    // logger, e printamos a própria função não inicializada
    log() {
        return this.logger(this.logger)
    }
    // Neste caso, inicializamos a função log que está
    //  imbutida na variável logger e printamos a a mensagem "I am a web developer Felisberto"
    logName(){
        return this.logger('I am a web developer', this.name)
    }
}

module.exports = SuperClasse