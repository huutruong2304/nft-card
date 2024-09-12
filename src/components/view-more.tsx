'use client';
import { Button } from 'antd';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react';

type Props = {};

const ViewMore = (props: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleLoadMore = () => {
    const currentPage = +(searchParams.get('page')?.toString() || '1');
    console.log('🚀 ~ handleLoadMore ~ currentPage:', currentPage);

    const params = new URLSearchParams(searchParams);
    params.set('page', `${currentPage + 1}`);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Button size="large" className="my-10" type="primary" onClick={handleLoadMore}>
      <span className="font-bold uppercase px-5">View More</span>
    </Button>
  );
};

export default ViewMore;
