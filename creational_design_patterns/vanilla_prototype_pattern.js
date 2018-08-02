// this is another creational based design pattern. We use a sort of
// skeleton of an existing object to create or instantiate new objects.
// This pattern is specifically important and beneficial to JavaScript
// because it utilizes prototypal inheritance instead of a classic object-oriented 
// inheritance. Hence, it plays to JavaScript’s strength and has native support.
// In this example, we have a car object that we use as prototype to
// create another object myCar with JavaScript’s Object.create feature
// and define an extra property owner on the new object.

const car = {
    noOfWheels: 4,
    statusbar() {
        return 'started';
    },
    stop() {
        return 'stopped';
    },
};

// Object.create(proto[, propertiesObject])

const myCar = Object.create(car, { owner: { value: 'Sanjit' } });

console.log(myCar.__proto__ === car); // true

