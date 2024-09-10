// components/Header.js
import { APP_HEADER_MENU } from '@/constants/appConfig';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Space } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    key: 'en',
    label: 'English',
  },
  {
    key: 'vi',
    label: 'Tiếng Việt',
  },
];

const Header = () => {
  return (
    <header className="bg-gray-800 w-full text-white p-5 shadow-md">
      <div className="lg:w-4/5 w-full m-auto flex justify-between items-center px-3">
        <nav>
          <ul className="flex space-x-4">
            {APP_HEADER_MENU.map((item) => (
              <li key={item.id}>
                <Link href="/" legacyBehavior>
                  <a className="hover:text-gray-400">{item.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3">
          <Button>Connect Wallet</Button>
          <Dropdown menu={{ items }} trigger={['click']} className="cursor-pointer">
            <Space>
              <GlobalOutlined />
              <DownOutlined />
            </Space>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
