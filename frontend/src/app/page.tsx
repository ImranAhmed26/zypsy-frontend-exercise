'use client';

import { CategoryList } from '@/components/lists/CategoryList';
import { PostList } from '@/components/lists/PostList';
import { apiClient } from '@/lib/api';
import { TEXTS } from '@/constants/texts';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: apiClient.getCategories,
  });

  return (
    <main className='min-h-screen bg-white'>
      <div className='container mx-auto py-8 px-4 max-w-[1920px]'>
        <h1 className='text-3xl font-bold mb-8'>{TEXTS.HEADERS.POSTS}</h1>
        <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
          <div className='w-full md:w-64 flex-shrink-0'>
            {isLoading ? (
              <div>{TEXTS.MESSAGES.LOADING_CATEGORIES}</div>
            ) : (
              <CategoryList categories={categories} />
            )}
          </div>
          <div className='flex-1 -mt-8 md:px-8'>
            <PostList />
          </div>
        </div>
      </div>
    </main>
  );
}
