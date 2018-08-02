
// ES6 Class syntax
class Hero {
    constructor(public name: string, public specialAbility: string, public getDetails?: string) {
        // setting property values
        this._name = name;
        this._specialAbility = specialAbility;

        //declaring a method on the object
        this.getDetails = () => {
            return `${this.name} can ${this.specialAbility}`;
        };
    }
}
// creating new instances of Hero
const IronMan = new Hero('Iron Man', 'fly');

console.log(IronMan.getDetails());

