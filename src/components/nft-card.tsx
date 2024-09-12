import { ITier } from '@/types/types';
import { HeartFilled, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Image from 'next/image';
import React from 'react';

type Props = {
  name: string;
  image: string;
  tier: ITier;
  price: number;
  unit: string;
  sellerName: string;
  sellerAvatar?: string;
};

function getRandomGradient() {
  const gradientList = [
    'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(29,112,253,1) 57%, rgba(252,176,69,1) 100%)',
    'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(29,253,160,1) 57%, rgba(252,176,69,1) 100%)',
    'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 57%, rgba(252,176,69,1) 100%)',
  ];
  const index = Math.floor(Math.random() * gradientList.length);
  return gradientList[index];
}

const NftCard = (props: Props) => {
  return (
    <div
      className="text-white shadow-md p-2 h-max  rounded-xl cursor-pointer hover:scale-105 transition-all"
      style={{ backgroundColor: 'rgba(50, 50, 50, 0.8)' }}
    >
      <div className="relative rounded-lg " style={{ background: getRandomGradient() }}>
        <div className="absolute left-2 top-2 px-3 py-1 rounded-md text-sm" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
          {props.tier.label}
        </div>
        <div className="absolute top-1 right-0 px-3 py-2">
          <HeartFilled />
        </div>
        <div className="rounded-2xl overflow-hidden ">
          <Image src={props.image} alt={`nft-card-${props.name}`} width={300} height={300} />
        </div>
      </div>
      <div className="my-2">
        <div className="flex py-2 text-white">
          <div className="w-1/2">
            <h5 className="font-normal"> {props.name}</h5>
          </div>
          <div className="w-1/2  flex gap-2 justify-end items-center">
            <div>
              <Image src="/assets/icons/eth.png" alt="eth-unit" width={8} height={14} />
            </div>
            <p className="font-normal">
              {props.price} {props.unit}
            </p>
          </div>
        </div>

        <div className="w-full flex py-1 items-center">
          <Avatar size="default" src={props.sellerAvatar} icon={<UserOutlined />} rootClassName="bg-black" />
          <p className="m-0 ml-3 text-sm">{props.sellerName}</p>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
