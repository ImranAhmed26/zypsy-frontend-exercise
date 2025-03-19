import { CategoryItemsProps } from '@/types';
import { StarIcon } from '@/components/atoms/StarIcon';
import clsx from 'clsx';

export const CategoryItems = ({
  categories,
  selectedCategoryId,
  showFavoritesOnly,
  onCategorySelect,
  onFavoriteToggle,
}: CategoryItemsProps) => {
  return (
    <div className='flex flex-col space-y-3'>
      {!categories?.length ? (
        <div className='text-gray-500 text-center py-4 text-sm'>
          {showFavoritesOnly
            ? 'No favorite categories'
            : 'No categories available'}
        </div>
      ) : (
        categories.map((category) => (
          <div
            key={category.id}
            className={clsx(
              'w-fit inline-flex items-center px-4 py-1.5 text-sm rounded-sm cursor-pointer border border-[#192e04]',
              selectedCategoryId !== category.id
                ? 'bg-[#192e04] text-white'
                : 'hover:bg-gray-50'
            )}
            onClick={() => onCategorySelect(category.id)}
          >
            <span className='font-medium'>{category.name}</span>
            <button
              onClick={(e) => onFavoriteToggle(e, category)}
              className='ml-2'
            >
              <StarIcon
                isFavorite={category.favorite}
                isSelected={selectedCategoryId === category.id}
              />
            </button>
          </div>
        ))
      )}
    </div>
  );
};
