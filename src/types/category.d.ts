import { Category } from './home';

export interface CategoryData extends Category {
  children: Category[];
}
