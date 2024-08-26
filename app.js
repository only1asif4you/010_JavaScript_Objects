// JavaScript Objects :

/*
 * JavaScript Object Literal
 */

const newSymb = Symbol("Key1");
const mobileModel = {
  // key: value
  brand: "Vivo",
  model: "Y11",
  processor: "Snapdragon 439",
  camera: ["13MP", "8MP", "2MP"],
  hasZoomCamera: true,
  "my favorite brand": "is my favorite brand",
  [newSymb]: "MyKey1",
  brandModel: function () {
    return `Mobile Brand is ${this.brand} and model is ${this.model}`;
  },
  battery: {
    mah: 5000,
  },
};

mobileModel.model = "Y11 s";
Object.freeze(mobileModel);
mobileModel.model = "Y15";

console.log(mobileModel.brandModel());

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  p: 1,
  q: 2,
  r: 3,
};

const obj3 = {
  x: 1,
  y: 2,
  z: 3,
};

// const objFinal = Object.assign(target, source);
// const objFinal = Object.assign({}, obj1, obj2, obj3);

const objFinal = { ...obj1, ...obj2, ...obj3 };
console.log(objFinal);

console.log(mobileModel.battery.mah);

/*
 * JavaScript Object Constructor
 */
function Person(first, last) {
  (this.firstName = first), (this.lastName = last);
}

const person1 = new Person("Hi", "ASIF");
person1.age = 18;
const person2 = new Person("Hello", "RATUL");
console.log(person1);
console.log(person2);
