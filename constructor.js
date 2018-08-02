// ES6 Class syntax
var Hero = /** @class */ (function () {
    function Hero(name, specialAbility, getDetails) {
        var _this = this;
        this.name = name;
        this.specialAbility = specialAbility;
        this.getDetails = getDetails;
        // setting property values
        this._name = name;
        this._specialAbility = specialAbility;
        //declaring a method on the object
        this.getDetails = function () {
            return _this.name + " can " + _this.specialAbility;
        };
    }
    return Hero;
}());
// creating new instances of Hero
var IronMan = new Hero('Iron Man', 'fly');
console.log(IronMan.getDetails());
