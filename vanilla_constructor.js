// Constructors are special functions that can 
// be used to instantiate new objects with methods 
// and properties defined by that function.




// traditional function-based syntax
function Hero(name, specialAbility) {
    // setting propery values
    this.name = name;
    this.specialAbility = specialAbility;

    // declaring a method on the object
    this.getDetails = function() {
        return this.name + ' can ' + this.specialAbility;
    };
}