import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { StarIconProps } from '@/types/icon.types';
import clsx from 'clsx';

export const StarIcon = ({ isFavorite, isSelected, className = '' }: StarIconProps) => {
  const Icon = isFavorite ? StarIconSolid : StarOutline;
  
  return (
    <Icon 
      className={clsx(
        'h-5 w-5',
        !isSelected
          ? isFavorite 
            ? 'text-gray-300' 
            : 'text-gray-300 stroke-gray-300'
          : isFavorite 
            ? 'text-[#192e04]'
            : 'text-white stroke-[#192e04] stroke-2',
        className
      )}
    />
  );
};