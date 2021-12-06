/* --- STATE --- */
export interface MyProfilApiType {}

export interface UpdateInterfaceUser {
  Email: string;
  EmailContact: string;
  FirstName: string;
  LastName: string;
  Avatar: string;
  PhoneNumber: string;
  Speciality?: string;
  Biography?: string;
}

export interface UpdatePasswordInterface {
  CurrentPassword: string;
  NewPassword: string;
}
