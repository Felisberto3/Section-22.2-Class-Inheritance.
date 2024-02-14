class SuperClasse {
    constructor() {
        this.logger = console.log
    }

    log() {
        this.logger(`Hello ${this.name}`)
    }   
}

module.exports = SuperClasse