
import { apiClient } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useStore } from '@/store';
import { Category } from '@/types';
import { CategoryFilter } from '../molecules/CategoryFilter';
import { CategoryItems } from '../molecules/CategoryItems';
import { TEXTS } from '@/constants/texts';

interface CategoryListProps {
  categories: Category[];
}

export const CategoryList = ({ categories = [] }: CategoryListProps) => {
  const {
    selectedCategoryId,
    showFavoritesOnly,
    setSelectedCategory,
    toggleShowFavorites,
  } = useStore();

  const queryClient = useQueryClient();

  const { mutate: toggleFavorite } = useMutation({
    mutationFn: ({ category }: { category: Category }) =>
      apiClient.toggleFavorite(category.id, category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  const handleFavoriteClick = (e: React.MouseEvent, category: Category) => {
    e.stopPropagation();
    toggleFavorite({ category });
  };

  const displayedCategories = showFavoritesOnly
    ? categories?.filter((cat) => cat.favorite) || []
    : categories || [];

  return (
    <div className='w-80 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto'>
      <div className='bg-[#192e04] p-5'>
        <h1 className='text-base font-medium text-center text-white'>
          {TEXTS.HEADERS.POSTS}
        </h1>
      </div>

      <div className='p-6'>
        <CategoryFilter
          showFavoritesOnly={showFavoritesOnly}
          toggleShowFavorites={toggleShowFavorites}
        />
        <CategoryItems
          categories={displayedCategories}
          selectedCategoryId={selectedCategoryId}
          showFavoritesOnly={showFavoritesOnly}
          onCategorySelect={setSelectedCategory}
          onFavoriteToggle={handleFavoriteClick}
        />
      </div>
    </div>
  );
};
