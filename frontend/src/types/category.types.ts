export interface Category {
  id: string;
  name: string;
  favorite: boolean;
}

export interface CategoryFilterProps {
  showFavoritesOnly: boolean;
  toggleShowFavorites: () => void;
}

export interface CategoryItemsProps {
  categories: Category[];
  selectedCategoryId: string | null;
  showFavoritesOnly: boolean;
  onCategorySelect: (id: string) => void;
  onFavoriteToggle: (e: React.MouseEvent, category: Category) => void;
}
