let person = {
  firstName: "Ivan",
  secondName: "Ivanov",
  showData: function () {
    console.log(this.firstName, this.secondName);
  },
};
let newPerson = Object.assign({}, person);
newPerson.firstName = "Petro";
newPerson.secondName = "Petriv";
person.showData();
newPerson.showData();
