import { Category } from './category.types';

export interface Post {
  id: string;
  description: string;
  date: string;
  categories: string[];
}

export interface PostItemProps {
  post: Post;
  allCategories: Category[];
  selectedCategoryId: string | null;
}
