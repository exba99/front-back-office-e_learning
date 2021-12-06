/* --- STATE --- */
export interface DashboardSliceState {
  infoUser: InfoUser | null;
}

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
}
