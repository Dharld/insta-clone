import { User } from './user.model';

export interface PreviewItem {
  user: User;
  featured: boolean;
  imgUrl: string;
  number_of_likes: number;
  comments: string[];
}
