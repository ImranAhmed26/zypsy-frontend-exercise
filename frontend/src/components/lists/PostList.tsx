import { apiClient } from '@/lib/api';
import { useStore } from '@/store';
import { useQuery } from '@tanstack/react-query';
import { TEXTS } from '@/constants/texts';
import { PostItem } from '../molecules/PostItem';
import { Post, Category } from '@/types';

export const PostList = () => {
  const { selectedCategoryId } = useStore();
  const { data: allCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: apiClient.getCategories,
  });

  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts', selectedCategoryId],
    queryFn: () =>
      selectedCategoryId
        ? apiClient.getCategoryPosts(selectedCategoryId)
        : null,
    enabled: !!selectedCategoryId,
  });

  if (isLoading) {
    return <div>{TEXTS.MESSAGES.LOADING_POSTS}</div>;
  }

  if (!selectedCategoryId) {
    return <div>{TEXTS.MESSAGES.SELECT_CATEGORY}</div>;
  }

  const selectedCategory = allCategories?.find(
    (cat: Category) => cat.id === selectedCategoryId
  );
  const totalPosts = posts?.length || 0;

  return (
    <div className='space-y-4 pr-4 p-6 border border-gray-200 rounded overflow-hidden'>
      <div className='space-y-4'>
        <div className='text-gray-600 text-sm'>
          Found {totalPosts} posts of &ldquo;{selectedCategory?.name}&rdquo;
        </div>
        <hr className='border-gray-200 -mx-6' />
      </div>
      {posts?.map((post: Post, index: number) => (
        <div key={post.id}>
          <PostItem
            post={post}
            allCategories={allCategories || []}
            selectedCategoryId={selectedCategoryId}
          />
          {index !== posts.length - 1 && (
            <hr className="border-gray-200 my-4" />
          )}
        </div>
      ))}
    </div>
  );
};
