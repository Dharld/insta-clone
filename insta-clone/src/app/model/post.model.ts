import { User } from './user.model';

export interface Post {
  id: string;
  user: User;
  created_date: Date;
  imgUrl: string;
  number_of_likes: number;
  description: string;
  comments?: Comment[];
}
