export interface user {
  firstName: string;
  lastName: string;
  age: string;
  username: string;
  password: string;
}

export interface loginUser {
  username: string;
  password: string;
  expiresInMins: number;
}
