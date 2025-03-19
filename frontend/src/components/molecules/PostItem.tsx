import { format } from 'date-fns';
import { Category, PostItemProps } from '@/types';
import { StarIcon } from '@/components/atoms/StarIcon';
import clsx from 'clsx';

export const PostItem = ({ post, allCategories, selectedCategoryId }: PostItemProps) => {
  return (
    <div className="bg-white p-6 space-y-4">
      <div className="text-sm font-medium text-[#192e04]">
        {format(new Date(post.date), 'EEEE, MMMM do yyyy')}
      </div>
      <p className="text-neutral-500 text-sm">{post.description}</p>
      <div className="flex flex-wrap gap-3">
        {post.categories.map((categoryId) => {
          const category = allCategories?.find((cat: Category) => cat.id === categoryId);
          return category ? (
            <span
              key={categoryId}
              className={clsx(
                'w-fit inline-flex items-center px-4 py-1.5 text-sm rounded-sm border border-[#192e04]',
                selectedCategoryId === categoryId
                  ? 'hover:bg-gray-50'
                  : 'bg-[#192e04] text-white'
              )}
            >
              {category.name}
              <StarIcon 
                isFavorite={category.favorite}
                isSelected={selectedCategoryId === categoryId}
                className="ml-2"
              />
            </span>
          ) : null;
        })}
      </div>
    </div>
  );
};