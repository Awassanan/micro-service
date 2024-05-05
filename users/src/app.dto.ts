export class UserDto {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  email: string;
  phone: string;

  constructor(
    id: string,
    firstName: string,
    lastname: string,
    dateOfBirth: string,
    address: string,
    email: string,
    phone: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastname;
    this.dateOfBirth = dateOfBirth;
    this.address = address;
    this.email = email;
    this.phone = phone;
  }
}
