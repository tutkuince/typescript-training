class Customer {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// let's create an instance 
let customer = new Customer('Tutku', 'Ince');
// customer.firstName = 'Tutku';
// customer.lastName = 'Ince';

console.log(customer);