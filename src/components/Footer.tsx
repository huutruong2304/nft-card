import React from 'react';
import { APP_FOOTER_NAVIGATION } from '@/constants/appConfig';
import { MessageFilled, PhoneFilled } from '@ant-design/icons';
import { Button, Divider, Input } from 'antd';
import Title from 'antd/es/typography/Title';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-800 w-full text-white p-5 shadow-md">
      <div className="lg:w-4/5 w-full m-auto">
        <div className="w-full flex flex-wrap">
          <div className="lg:w-1/3 sm:w-3/5 w-full p-2">
            <h3 className="text-xl px-1 py-3 font-bold">Navigation</h3>

            <div className="w-full flex flex-wrap">
              {APP_FOOTER_NAVIGATION.map((navigation) => (
                <div key={navigation.key} className="w-1/3 p-1">
                  <Link href="/" legacyBehavior>
                    <a className="hover:text-gray-400">{navigation.label}</a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-2/5 w-full p-2">
            <h3 className="text-xl px-1 py-3 font-bold">Contact us</h3>
            <div className="w-full">
              <p className="flex gap-2 p-1">
                <PhoneFilled />
                <span>01234568910</span>
              </p>
              <p className="flex gap-2 p-1">
                <MessageFilled />
                <span>tymex-talent@tyme.com</span>
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <h3 className="text-xl px-1 py-3 font-bold">Subscribe to receive our latest update</h3>
            <div className="flex gap-3 p-1">
              <Input placeholder="Your email address" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <Divider />
        <div className="w-full flex p-2">
          <div className="lg:w-1/2 w-full">©2023 Tyme - Edit. All Rights reserved.</div>
          <div className="lg:w-1/2 w-full flex gap-3 justify-end">
            <p>Security</p>
            <p>Legal</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
