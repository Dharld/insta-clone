import { User } from './user.model';

export interface Post {
  id: string;
  user_id: string;
  created_date: Date;
  imgUrl: string;
  number_of_likes: number;
  description: string;
  comments: Comment[];
}
