interface Person {
    firstName: string;
    lastName: string;
}
class A {
    greeter(person: Person): string {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
}


export { A };