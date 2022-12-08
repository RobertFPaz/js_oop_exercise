// Part One
// Create a class for vehicle. Each vehicle instance should 
// have the following properties:

// make
// model
// year
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Each vehicle instance should have access to a method 
    // called honk, which returns the string “Beep.”
    honk() {
        return "Beep";
    }
    // Each vehicle instance should have a method called toString,
    //  which returns the string containing the make, model and year.
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk();
// Part two
// Create a class for a car. The Car class should inherit from 
// Vehicle and each car instance should have a property 
// called numWheels which has a value of 4.

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}
myFirstCar = new Car("Toyota", "Corolla", 2005)
// Create a class for a Motorcycle. This class should inherit 
// from Vehicle and each motorcycle instance should have a 
// property called numWheels which has a value of 2. It should 
// also have a revEngine method which returns “VROOM!!!”
class Motorcycle extends Vehicle{
    constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

// Create a class for a Garage. It should have a property called 
// vehicles which will store an array of vehicles, and a property 
// called capacity which is a number indicating how many vehicles 
// will fit in the garage. When you create a garage, vehicles will 
// always be empty; you only need to provide the capacity.

// A garage should also have an add method, which attempts to add
//  a vehicle to the array of vehicles. However, if you try to add 
//  something which is not a vehicle, the garage should return the 
// message “Only vehicles are allowed in here!”. Also, if the
//  garage is at capacity, it should say “Sorry, we’re full.”
class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    addVehicle(vehicle){
        if(!(vehicle instanceof Car)){
            return "Only vehicles are allowed in here!"
        } else if(this.vehicles.length === this.capacity){
            return "Sorry, we're full"
        } else {
            return this.vehicles.push(vehicle);
        }
    }
}
let garage = new Garage(2);
