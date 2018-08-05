/** This is a structural design pattern that is widely used in the JavaScript libraries.
* It is used to provide a unified and simpler public facing interface for ease of use
* that shields away from the complexities of its consisting subsystems or subclasses.
* 
* The use of this pattern is very common in libraries like jQuery.
* 
* In this example, we create a public facing API with the class ComplaintRegistry.
* It exposes only one method to be used by the client i.e.registerComplaint.It
* internally handles instantiating required objects of either ProductComplaint
* or ServiceComplaint based on the type argument.It also handles all the other
* complex functionalities needed like generating unique ID, storing the complaint
* in memory, etc.But, all these complexities are hidden away using the Facade pattern.
**/

// flyweight class 
class Icecream {
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
    }

    // factory for flyweight objects
    class IcecreamFactory {
        constructor() {
            this._icecreams = [];
        }
    }

    createIcecream(flavour, price) {
        let icecream = this.getIcecream(flavour);
        if (icecream) {
            return icecream;
        } else {
            const newIcecream = new Icecream(flavour, price);
            this._icecreams.push(newIcecream);
            return newIcecream;
        }
    }

    getIcecream(flavour) {
        return this._icecreams.find( icecream => icecream.flavour === flavour );
    }
}

// usage
const factoy = new IcecreamFactory();

const chocoVanilla = factory.createIcecream( 'chocolate and vanilla', 15);
const vanillaChoco = factory.createIcecream( 'chocolate and vanilla', 15);

