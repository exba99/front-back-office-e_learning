/* --- STATE --- */ export interface DashboardApiType {}

export interface InfoUser {
  idUser: string;
  email: string;
  emailContact: string;
  firstName: string;
  lastName: string;
  avatar: string;
  phoneNumber: string;
  biography?: string;
  speciality?: string;
  roleName: string;
  idRole: string;
  statusUser?: string;
}

export interface InfoUserPost {
  IddUser: string;
  Email: string;
  EmailContact: string;
  FirstName: string;
  LastName: string;
  Avatar: string;
  PhoneNumber: string;
  Biography?: string;
  Speciality: string;
  IdRole: string;
  Password: string;
}

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
