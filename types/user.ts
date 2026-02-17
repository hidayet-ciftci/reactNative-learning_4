export interface UserProfile {
  maidenName: string;
  gender: string;
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  username: string;
  image: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
  company: {
    name: string;
    title: string;
    department: string;
  };
  university: string;
  role: string;
  bloodGroup: string;
}
