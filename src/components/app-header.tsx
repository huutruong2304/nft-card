'use client';
import { APP_HEADER_MENU } from '@/constants/appConfig';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Space } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

const AppHeader = () => {
  const pathname = usePathname();

  const isActivePath = (id: string): boolean => {
    return (id !== '/' && pathname.includes(id)) || (id === '/' && pathname === '/');
  };

  return (
    <header className="bg-zinc-900 w-full text-white p-5 shadow-md  fixed z-10">
      <div className="lg:w-4/5 w-full m-auto flex justify-between items-center px-3">
        <nav>
          <ul className="flex space-x-4 m-0">
            {APP_HEADER_MENU.map((item) => (
              <li key={item.id} className="menu-item">
                <Link href={`${item.id}`} legacyBehavior>
                  <a className={`text-sm uppercase font-bold hover:text-gray-400 ${isActivePath(item.id) ? 'active' : ''} `}>{item.label}</a>
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

export default AppHeader;
