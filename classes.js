// Classes: Simpler syntax for creating objects and inheritance. 

class Person {
    constructor(name) {
        this.name = name; 
    }

    greet() {
        console.log(`Hi, I'm ${this.name}`); 
    }
}

const p = new Person("John"); 
p.greet()
