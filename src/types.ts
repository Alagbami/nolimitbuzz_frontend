export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  }
  
  export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address;
  }
  