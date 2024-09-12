import Image from 'next/image';
import AppTag from '@/components/tag';
import FilterForm from '@/components/filter-form';
import { ISearchParams } from '@/types/types';
import GridCard from '@/components/grid-card';
import ViewMore from '@/components/view-more';
import { Suspense } from 'react';
import GridCardSkeleton from '@/components/grid-card-skeleton';
import { ITEM_PER_PAGE } from '@/constants/appConfig';
import { TIER_LIST } from '@/constants/mock-data';

export default function Page({ searchParams }: { searchParams?: ISearchParams }) {
  const searchParamsStr: string = searchParams ? JSON.stringify(searchParams) : '';

  return (
    <main className="home w-full py-5 shadow-md">
      <div className="py-5 mb-3">
        <Image src={'/assets/banners/wide.png'} alt="banner" width={2400} height={600} />
      </div>
      <div className="grid grid-cols-4 w-full m-auto px-5 gap-3 lg:w-11/12 lg:p-0  xl:w-4/5 xl:gap-6">
        <aside className="col-span-4 md:col-span-1 ">
          <FilterForm />
        </aside>
        <section className="flex flex-col col-span-4 md:col-span-3 items-center">
          <div className="w-full flex gap-3 mb-5 py-2">
            {TIER_LIST.map((tier) => (
              <AppTag key={tier.value} label={tier.label} />
            ))}
          </div>
          <div>
            <Suspense key={searchParamsStr} fallback={<GridCardSkeleton total={ITEM_PER_PAGE} />}>
              <GridCard searchParams={searchParams} />
            </Suspense>
          </div>
          <div>
            <ViewMore />
          </div>
        </section>
      </div>
    </main>
  );
}
