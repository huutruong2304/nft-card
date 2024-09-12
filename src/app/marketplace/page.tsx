import Image from 'next/image';
import AppTag from '@/components/tag';
import FilterForm from '@/components/filter-form';
import { ISearchParams } from '@/types/types';
import GridCard from '@/components/grid-card';
import ViewMore from '@/components/view-more';
import { Suspense } from 'react';
import Skeleton from '@/components/skeleton';

export default function Page({ searchParams }: { searchParams?: ISearchParams }) {
  const searchParamsStr: string = searchParams ? JSON.stringify(searchParams) : '';

  return (
    <main className="home w-full py-5 shadow-md">
      <div className="py-5 mb-3">
        <Image src={'/assets/banners/wide.png'} alt="banner" width={2400} height={600} />
      </div>
      <div className="grid grid-cols-4 w-full m-auto px-5 gap-6 lg:w-4/5 lg:p-0 ">
        <aside className="col-span-4 md:col-span-1 ">
          <FilterForm />
        </aside>
        <section className="flex flex-col col-span-4 md:col-span-3 items-center">
          <div className="w-full flex gap-3 mb-5 py-2">
            <AppTag label="Epic" />
            <AppTag label="Super" />
            <AppTag label="Limited" />
            <AppTag label="Icon" />
          </div>
          <div>
            <Suspense key={searchParamsStr} fallback={<Skeleton />}>
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
