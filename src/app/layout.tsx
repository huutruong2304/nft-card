import type { Metadata } from 'next';
import './globals.css';
import { APP_DESCRIPTION, APP_NAME } from '@/constants/appConfig';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AntdRegistry } from '@ant-design/nextjs-registry';

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
        <AntdRegistry>
          <Header />
          <div style={{ padding: '0 48px' }}>
            <div>{children}</div>
          </div>
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
