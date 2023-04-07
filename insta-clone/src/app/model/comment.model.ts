import { User } from './user.model';

export interface Comment {
  author_id: string;
  text: string;
  created_date: Date;
  post_id: string;
}
