import Image from 'next/image';
import AppTag from '@/components/tag';
import FilterForm from '@/components/filter-form';
import { ISearchParams } from '@/types/types';
import GridCard from '@/components/grid-card';
import ViewMore from '@/components/view-more';
import { Suspense } from 'react';
import Skeleton from '@/components/skeleton';
import Await from '@/components/await';
import { fetchCardListWithPagination } from '@/constants/mock-data';

export default function Home({ searchParams }: { searchParams?: ISearchParams }) {
  const promise = fetchCardListWithPagination({
    page: searchParams?.page ? +searchParams?.page : 1,
    itemsPerPage: 10,
    search: searchParams?.search,
    price: searchParams?.price,
    time: searchParams?.time,
    minPrice: searchParams?.minPrice,
    maxPrice: searchParams?.maxPrice,
  });

  return (
    <main className="home w-full py-5 shadow-md">
      <div className="py-5 mb-3">
        <Image
          src={'/assets/banners/wide.png'}
          alt="banner"
          width={2400}
          height={600}
          style={{ minHeight: 250, objectFit: 'cover', objectPosition: 'cover' }}
        />
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
            {/* <Suspense key={searchParams?.page} fallback={<div>Loading ...</div>}>
              <GridCard searchParams={searchParams} />
            </Suspense> */}

            <Suspense fallback={<Skeleton />}>
              <Await promise={promise}>{(data) => <GridCard cardList={data} />}</Await>
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
