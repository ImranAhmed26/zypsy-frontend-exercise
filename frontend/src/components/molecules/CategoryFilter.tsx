import { TEXTS } from '@/constants/texts';

interface CategoryFilterProps {
  showFavoritesOnly: boolean;
  toggleShowFavorites: () => void;
}

export const CategoryFilter = ({
  showFavoritesOnly,
  toggleShowFavorites,
}: CategoryFilterProps) => {
  const filterOptions = [
    {
      id: 'all',
      label: TEXTS.CATEGORIES.ALL,
      checked: !showFavoritesOnly,
    },
    {
      id: 'favorites',
      label: TEXTS.CATEGORIES.FAVORITES,
      checked: showFavoritesOnly,
    },
  ];

  return (
    <div className='flex mb-4'>
      {filterOptions.map((option) => (
        <label
          key={option.id}
          className='flex-1 flex items-center space-x-2 py-2 rounded hover:bg-gray-50 cursor-pointer'
        >
          <input
            type='radio'
            checked={option.checked}
            onChange={() => toggleShowFavorites()}
            className='h-4 w-4 accent-[#192e04] border-2 border-gray-300'
          />
          <div className='flex items-center space-x-2'>
            <span className='text-xs font-medium text-gray-700'>
              {option.label}
            </span>
          </div>
        </label>
      ))}
    </div>
  );
};