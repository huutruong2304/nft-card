'use client';
import { SearchOutlined, CloseCircleFilled } from '@ant-design/icons';
import { Form, Slider, Select, Button, SliderSingleProps, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import FormBox from './form-box';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ITier } from '@/types/types';
import { TIER_LIST } from '@/constants/mock-data';

const marks: SliderSingleProps['marks'] = {
  0.01: {
    style: {
      color: 'white',
    },
    label: 0.01,
  },
  200: {
    style: {
      color: 'white',
    },
    label: 200,
  },
};

type Props = {};

const MIN_PRICE = 0.01;
const MAX_PRICE = 200;

const FilterForm = (props: Props) => {
  const tierList: ITier[] = [{ value: '0', label: 'All' }, ...TIER_LIST];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [priceRange, setPriceRange] = useState([
    getDefaultPriceSlideValue('minPrice', MIN_PRICE),
    getDefaultPriceSlideValue('maxPrice', MAX_PRICE),
  ] as number[]);
  const [tier, setTier] = useState(getDefaultSelectValue('tier') as string);
  const [time, setTime] = useState(getDefaultSelectValue('time') as string);
  const [price, setPrice] = useState(getDefaultSelectValue('price') as string);

  const [params, setParams] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      handleSubmitParams();
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, [params]);

  const handleSearchChange = (term: string): void => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    // update new params to path name
    setParams(params.toString());
  };

  const handleChangePriceRange = (value: number[]) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('minPrice', `${value[0]}`);
      params.set('maxPrice', `${value[1]}`);
    } else {
      params.delete('minPrice');
      params.delete('maxPrice');
    }

    // default values can not reflect to ui
    setPriceRange(value);
    // update new params to path name
    setParams(params.toString());
  };

  const handleSelectChange = (value: string, name: string) => {
    const params = new URLSearchParams(searchParams);

    if (parseInt(value)) {
      params.set(name, `${value}`);
    } else {
      params.delete(name);
    }

    if (name === 'tier') {
      setTier(value);
    } else if (name === 'time') {
      setTime(value);
    } else if (name === 'price') {
      setPrice(value);
    }
    // update new params to path name
    setParams(params.toString());
  };

  // update params to url
  const handleSubmitParams = () => {
    // need to remove page before searching
    const newParams = new URLSearchParams(params);
    newParams.delete('page');
    replace(`${pathname}?${newParams.toString()}`);
  };

  // remove all params
  const handleResetFilter = () => {
    setPriceRange([MIN_PRICE, MAX_PRICE]);
    setParams('');
    setTier('0');
    setPrice('0');
    setTime('0');
    replace(`${pathname}`);
  };

  const getDefaultInputValue = (key: string): string => {
    return searchParams.get(key)?.toString() || '';
  };

  function getDefaultSelectValue(key: string): string {
    return searchParams.get(key)?.toString() || '0';
  }

  function getDefaultPriceSlideValue(key: string, defaultValue: number): number {
    const value = searchParams.get(key)?.toString();
    return value ? +value : defaultValue;
  }

  return (
    <Form name="trigger" layout="vertical" autoComplete="off">
      <FormBox>
        <Input
          placeholder="Quick search"
          prefix={<SearchOutlined />}
          onChange={(e) => {
            handleSearchChange(e.target.value);
          }}
          defaultValue={getDefaultInputValue('search')}
        />
      </FormBox>

      <FormBox label="Price">
        <Slider onChange={handleChangePriceRange} marks={marks} range value={priceRange} min={0.01} max={200} step={0.01} />
      </FormBox>

      <FormBox label="Tier">
        <Select className="w-full " value={tier} options={tierList} onChange={(value) => handleSelectChange(value, 'tier')} />
      </FormBox>

      {/* <FormBox label="Theme">
        <Select
          className="w-full"
          defaultValue={getDefaultSelectValue('tier')}
          options={[
            { value: '0', label: 'All' },
            { value: '1', label: 'Halloween' },
            { value: '2', label: 'Soccer' },
          ]}
          onChange={(value) => handleSelectChange(value, 'theme')}
        />
      </FormBox> */}

      <FormBox label="Time">
        <Select
          className="w-full"
          value={time}
          options={[
            { value: '0', label: '---' },
            { value: '1', label: 'Latest' },
            { value: '2', label: 'Oldest' },
          ]}
          onChange={(value) => handleSelectChange(value, 'time')}
        />
      </FormBox>

      <FormBox label="Price">
        <Select
          className="w-full"
          value={price}
          options={[
            { value: '0', label: '---' },
            { value: '1', label: 'Low to high' },
            { value: '2', label: 'High to low' },
          ]}
          onChange={(value) => handleSelectChange(value, 'price')}
        />
      </FormBox>

      <div className="w-full flex flex-wrap justify-between py-2 gap-2">
        <Button size="middle" type="text" icon={<CloseCircleFilled style={{ color: 'yellow' }} />} onClick={handleResetFilter}>
          <span className="text-white px-0"> Reset filter</span>
        </Button>

        <Button size="middle" type="primary" onClick={handleSubmitParams}>
          <span className="font-bold uppercase lg:px-1">Search</span>
        </Button>
      </div>
    </Form>
  );
};

export default FilterForm;
