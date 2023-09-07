class Customer {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // :string => return type
    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

// let's create an instance 
let customer = new Customer('Tutku', 'Ince');
// customer.firstName = 'Tutku';
// customer.lastName = 'Ince';

console.log(customer.firstName);
console.log(customer.lastName);
