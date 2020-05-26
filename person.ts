class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
    console.log('Added a new person: ', name);
  }

  getName = (): string => {
    return this.name;
  };
}

const person: Person = new Person('Ola Normann');

// console.log(`Person name: ${person.getName()}`);
