//* create object using object literals
const player ={};

player.name = 'smal Nirob';
player.specialty = 'batsman';
player.bat = function(){   //*method
    console.log('swing your bat');
}
console.log(player);
player.bat();

const student = {
    name: 'Afraem', 
    job: 'petuk',
    ball: function(){
        console.log('throw the ball');
    },
    salary: 10000
}
//* 2. object constructor
const person = new Object();
console.log(person);
//* 3. create object method
const item = Object.create(null);
console.log(item);

const myName = Object.create(student);
console.log(myName.name);
console.log(myName.friend);

//* 4. class
class Person{
    name = 'shinjon';
    address = 'Hili panama port';
    constructor(age){
        this.age = age;
    }
}
const person1 = new Person(56);
console.log(person1);

//*5. function

function Car(model, price){
    this.model = model;
    this.price = price;
}

const tesla = new Car ('Elon', 50000);
console.log(tesla);