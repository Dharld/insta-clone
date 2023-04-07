export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  profilePic: string;
  is_active: boolean;
  sex: 'female' | 'male';
}
