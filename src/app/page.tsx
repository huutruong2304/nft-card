import NftCard from '@/components/nft-card';
import { CARD_LIST } from '@/constants/mock-data';
import { CloseCircleFilled, SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Slider, SliderSingleProps } from 'antd';
import Image from 'next/image';
import 'antd/dist/reset.css'; // Reset default styles for easier Tailwind customization
import FormBox from '@/components/form-box';
import AppTag from '@/components/tag';
const marks: SliderSingleProps['marks'] = {
  0.01: '0.01',
  200: '200',
};

export default function Home() {
  const cardList = CARD_LIST;

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
          <Form name="trigger" layout="vertical" autoComplete="off">
            <FormBox>
              <Input placeholder="Quick search" prefix={<SearchOutlined />} />
            </FormBox>

            <FormBox label="Price">
              <Slider marks={marks} range defaultValue={[20, 50]} min={0.01} max={200} step={0.01} />
            </FormBox>

            <FormBox label="Tier">
              <Select
                className="w-full "
                defaultValue={'0'}
                options={[
                  { value: '0', label: 'All' },
                  { value: '1', label: 'Lucy' },
                ]}
              />
            </FormBox>

            <FormBox label="Theme">
              <Select
                className="w-full"
                defaultValue={'0'}
                options={[
                  { value: '0', label: 'All' },
                  { value: '1', label: 'Lucy' },
                ]}
              />
            </FormBox>

            <FormBox label="Time">
              <Select
                className="w-full"
                defaultValue="0"
                options={[
                  { value: '0', label: 'Latest' },
                  { value: '1', label: 'Newest' },
                ]}
              />
            </FormBox>

            <FormBox label="Price">
              <Select
                id="price"
                className="w-full"
                defaultValue="0"
                options={[
                  { value: '0', label: 'Low to high' },
                  { value: '1', label: 'High to low' },
                ]}
              />
            </FormBox>

            <div className="w-full flex justify-between py-2">
              <Button type="text" icon={<CloseCircleFilled style={{ color: 'yellow' }} />}>
                <span className="text-white"> Reset filter</span>
              </Button>

              <Button size="middle" type="primary">
                <span className="font-bold uppercase px-5">Search</span>
              </Button>
            </div>
          </Form>
        </aside>

        <section className="flex flex-col col-span-4 md:col-span-3 items-center">
          <div className="w-full flex gap-3 mb-5 py-2">
            <AppTag label="Epic" />
            <AppTag label="Super" />
            <AppTag label="Limited" />
            <AppTag label="Icon" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {cardList.map((item, index) => (
              <NftCard
                key={index}
                name={item.name}
                image={item.image}
                tier={item.tier}
                price={item.price}
                unit={item.unit}
                sellerName={item.seller?.name}
              />
            ))}
          </div>
          <div>
            <Button size="large" className="my-10" type="primary">
              <span className="font-bold uppercase px-5">View More</span>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
