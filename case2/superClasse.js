class SuperClasse {
    constructor() {
        this.logger = console.log
        this.name = 'Felisberto'
    }

    log() {
        return this.logger(this.logger)
    }
    logName(){
        return this.logger('I am a web developer', this.name)
    }
}

module.exports = SuperClasse