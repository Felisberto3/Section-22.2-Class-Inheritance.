class SuperClasse {
    constructor({ name, age }) {
        this.name = name
        this.age = age
    }

    greating() {
        console.log(` Ola, eu sou ${this.name}, estou com ${this.age}`);
    }
}

module.exports = SuperClasse