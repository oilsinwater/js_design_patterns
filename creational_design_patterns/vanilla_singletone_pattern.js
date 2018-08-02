// Singleton is a special creational design pattern where only one 
//instance of a class can exist.It works like this — if no instance
// of the singleton class exists then a new instance is created and 
// returned but if an instance already exists then the reference to
// the existing instance is returned.
// A perfect real - life example would be that of mongoose. It utilizes 
// the singleton pattern. In this example, we have a Database class
// that is a Singleton.First, we create an object mongo by using the 
// new operator to invoke the Database class constructor.This time an
//  object is instantiated because none already exists.The second time, 
// when we create the mysql object, no new object is instantiated instead 
// the the reference to the object that was instantiated earlier i.e.mongo
// object is returned.


class Database {
    constructor(data) {
        if (Database.exists) {
            return Database.instance;
        }
        this._data = data;
        Database.instance = this;
        Database.exists = true;
        return this;
    }

    getData() {
        return this._data;
    }

    setData(data) {
        this._data = data;
    }
}

// usage 
const mongo = new Database('mongo');
console.log(mongo.getData()); // mongo

const mysql = new Database('mysql');
console.log(mysql.getData()); // mongo