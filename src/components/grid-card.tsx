import { fetchCardListWithPagination } from '@/constants/mock-data';
import React from 'react';
import NftCard from './nft-card';
import { ISearchParams } from '@/types/types';

type Props = {
  searchParams?: ISearchParams;
};

const GridCard = async (props: Props) => {
  const page = props?.searchParams?.page ? Number(props.searchParams.page) : 1;
  const cardList = await fetchCardListWithPagination({
    page,
    itemsPerPage: 10,
    search: props?.searchParams?.search,
    price: props?.searchParams?.price,
    time: props?.searchParams?.time,
    minPrice: props?.searchParams?.minPrice,
    maxPrice: props?.searchParams?.maxPrice,
    tier: props?.searchParams?.tier,
  });
  return cardList?.length ? (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6">
      {cardList.map((item) => (
        <NftCard
          key={item.id}
          name={item.name}
          image={item.image}
          tier={item.tier}
          price={item.price}
          unit={item.unit}
          sellerName={item.seller?.name}
          sellerAvatar={item.seller?.avatar}
        />
      ))}
    </div>
  ) : (
    <h5 className="text-white">No card available!</h5>
  );
};

export default GridCard;
