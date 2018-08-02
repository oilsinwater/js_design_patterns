// This a creation pattern is frequently used when we need to 
// manage or manipulate collections of objects that
// are different yet have many similar characteristics.
// We create a factory class named BallFactory that has method 
// that takes in parameters and depending on the parameters it
// delegates the object instantiation responsibility to the respective 
// class.If the type parameter is “football” or “soccer” object 
// instantiation is handled by Football class but if it is “basketball” 
// object instantiation is handled by Basketball class.

class BallFactory {
    constructor() {
        this.createBall = function(type) {
            let ball;
            if (type === 'football' || type === 'soccer') ball = new Football();
            else if (type === 'basketball') ball = new Basketball();
            ball.roll = function() {
                return `This ${this._type} is rolling!`;
            };

            return ball;
        };
    }
}

class Football {
    constructor() {
        this._type = 'football';
        this.kick = function() {
            return 'You kick the football.';
        };
    }
}

class Basketball {
    constructor() {
        this._type = 'basketball';
        this.bounce = function() {
            return 'You bounced the basketball.';
        };
    }
}

// creating objects
const factory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');

console.log(myFootball.roll());
console.log(myBasketball.roll());
console.log(myFootball.kick());
console.log(myBasketball.bounce());

