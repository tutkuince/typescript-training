var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
// let's create an instance 
var customer = new Customer('Tutku', 'Ince');
// customer.firstName = 'Tutku';
// customer.lastName = 'Ince';
console.log(customer);
