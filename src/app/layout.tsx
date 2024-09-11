import type { Metadata } from 'next';
import './globals.css';
import { APP_DESCRIPTION, APP_NAME } from '@/constants/appConfig';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { ConfigProvider } from 'antd';
import theme from '../../theme-config';

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={theme}>
          <AntdRegistry>
            <AppHeader />
            <div className="min-h-screen">{children}</div>
            <AppFooter />
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
